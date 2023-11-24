// priority: 1005
'use strict';

/**
 * 
 * @param {string} str 
 * @returns 
 */
function titleCase(str) {
    return str
        .toLowerCase()
        .split(' ')
        .map((str) => str.charAt(0).toUpperCase() + str.substring(1))
        .join(' ');
}

/**
 *
 * @param {any[]} entries
 * @returns {any}
 */
function getRandomInList(entries) {
    return entries[Math.floor(Math.random() * entries.length)];
}

/**
 * @param {Internal.ItemStackJS} item
 * @param {string} color
 * @returns {string}
 */
function rawItemStr(item, color) {
    let colorTag = color ? `,"color":"${color}"` : '';
    let count = item.count > 1 ? `${item.count}*` : '';
    return `{
        "translate":"%s[%s]",
        "with":["${count}","${item.getName()}"],
        "hoverEvent": {
            "action": "show_item",
            "contents": {
                "id": "${item.id}",
                "count": ${item.count},
                "tag":"${item.nbtString.replace(/"/g, '\\"')}"
        }}${colorTag}}`.replace(/\s+/g, '');
}

/**
 * run `tellraw` command on a player
 * @param {Internal.PlayerJS} player The target of tellraw command
 * @param {string} str The content of tellraw command
 */
function tellr(player, str) {
    player.server.runCommandSilent(`/tellraw ${player.name} ${str}`);
}

function shapedRecipe(result, pattern, key, id) {
    return { result: result, pattern: pattern, key: key, id: id };
}
function shapelessRecipe(result, ingredients, id) {
    return { result: result, ingredients: ingredients, id: id };
}

/**
 *
 * @param {string} material
 * @param {string} type
 * @returns
 */
function unificationBlacklistEntry(material, type) {
    return { material: material, type: type };
}
function entryIsBlacklisted(material, type) {
    for (let i = 0; i < unificationBlacklist.length; i++) {
        if (unificationBlacklist[i].material == material && unificationBlacklist[i].type == type) {
            return true;
        }
    }
    return false;
}

function tagIsEmpty(tag) {
    return getPreferredItemInTag(Ingredient.of(tag)).id == air;
}

/**
 *
 * @param {Internal.IngredientJS} tag
 */
function getPreferredItemInTag(tag) {
    return getItemsInTag(tag).sort((a, b) => compareIndices(a.mod, b.mod, tag))[0] || Item.of(air);
}

/**
 *
 * @param {Internal.IngredientJS} tag
 * @return {Internal.ItemStackJS[]} 
 */
function getItemsInTag(tag) {
    return tag.stacks.toArray();
}

function compareIndices(a, b, tag) {
    if (a == b) return 0; // iff a == b, they'll be found at the same position in modPriorities

    for (let mod of modPriorities) {
        if (mod == a) return -1; // if a comes before b, then idx(a) < idx(b), so -1
        if (mod == b) return 1; // if a comes after b, then idx(a) > idx(b), so 1
    }

    console.error(
        '[' + a + ', ' + b + '] were both unaccounted for in mod unification' + (tag ? ' for ' + tag : '!')
    );
    return 0;
}

function getStrippedLogFrom(logBlock) {
    buildWoodVariants.find((wood) => {
        if (wood.logBlock == logBlock) {
            return wood.logBlockStripped;
        }
    });
    return air;
}

const unificationBlacklist = [
    unificationBlacklistEntry('quartz', 'gem'),
    unificationBlacklistEntry('quartz', 'storage_block')
];

/**
 *
 * @param {Internal.ItemStackJS} item
 * @param {Internal.PlayerJS} player
 * @returns {boolean}
 */
const playerHas = (item, player) => {
    return player.inventory.find(item) != -1;
};

// lt  = .slice(0, index)
// lte = .slice(0, index + 1)
// gt  = .slice(index)
// gte = .slice(index + 1)

function lowerTiers(tiers, tier) {
    return tiers.slice(0, tiers.indexOf(tier));
}

/**
 * transplant the md5 from `<type's mod>:kjs_<hash>` onto the supplied prefix
 * @param {Internal.RecipeJS} recipe
 * @param {string} id_prefix
 */
function fallback_id(recipe, id_prefix) {
    if (recipe.path.includes('kjs_')) {
        recipe.serializeJson(); // without this the hashes *will* collide
        recipe.id(id_prefix + 'md5_' + recipe.uniqueId);
    }
}
