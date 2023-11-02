'use strict';
// priority: 1005

/**
 * @param {ItemStackJS} item
 * @param {string} color
 * @returns {string}
 */
function rawItemStr(item, color) {
    let colorTag = color
        ? `,"color":"${color}"`
        : '';
    let count = item.count > 1
        ? `${item.count}*`
        : '';
    return `{
        "translate":"[%s%s]",
        "with":["${count}","${item.getName()}"],
        "hoverEvent": {
            "action": "show_item",
            "contents": {
                "id": "${item.getId()}",
                "count": ${item.count},
                "tag":"${item.getNbtString().split('"').join('\\\"')}"
        }}${colorTag}
    }`.split(/[\s\s\s\s|\n]/).join('');
}

function tellr(player, str) {
    player.server.runCommand(`/tellraw ${player.name} ${str}`);
}

function shapedRecipe(result, pattern, key, id) {
    return { result: result, pattern: pattern, key: key, id: id };
}
function shapelessRecipe(result, ingredients, id) {
    return { result: result, ingredients: ingredients, id: id };
}

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

function getPreferredItemInTag(tag) {
    let pref =
        utils
            .listOf(tag.stacks)
            .toArray()
            .sort(({ mod: a }, { mod: b }) => compareIndices(a, b, tag))[0] || Item.of(air);
    return pref;
}

function getItemsInTag(tag) {
    let items = utils.listOf(tag.stacks).toArray();
    return items;
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
    let result = air;
    buildWoodVariants.find((wood) => {
        if (wood.logBlock == logBlock) {
            result = wood.logBlockStripped;
            return result;
        }
    });
    return result;
}

const unificationBlacklist = [
    unificationBlacklistEntry('quartz', 'gem'),
    unificationBlacklistEntry('quartz', 'storage_block')
];

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

// transplant the md5 from `<type's mod>:kjs_<hash>` onto the supplied prefix
function fallback_id(recipe, id_prefix) {
    if (recipe.id.path.includes('kjs_')) {
        recipe.serializeJson(); // without this the hashes *will* collide
        recipe.id(id_prefix + 'md5_' + recipe.getUniqueId());
    }
}
