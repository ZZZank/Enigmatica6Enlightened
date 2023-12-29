// priority: 1005
'use strict';

/**
 *
 * @param {string} str : e.g. `an example sTRing`
 * @returns {string}: e.g. `An Exmaple String`
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
 * @param {{inputs:(string|{type?:string,data:{},chance?:number})[],outputs:(string|{type?:string,data:{},chance?:number})[],id:string}} recipe
 * @param {Internal.RecipeEventJS} event
 */
function addGeneralRecipeHint(recipe, event) {
    let proc = {
        type: 'masterfulmachinery:machine_process',
        structureId: 'recipe_hint_general_structure',
        controllerId: 'recipe_hint_general',
        outputs: recipe.outputs.map((output) => toMMJson(output)),
        inputs: recipe.inputs.map((input) => toMMJson(input)),
        ticks: 1
    };

    event.custom(proc).id(recipe.id);
}

/**
 * transform String/JSON style ingredient into Masterful Machinery JSON style
 * @param {string|{type?:string,data:string|{},chance?:number}} ingredient
 * @returns {{type:string,data:{},chance?:number}}
 */
function toMMJson(ingredient) {
    if (typeof ingredient == 'string') {
        // '32x kubejs:rough_machine_frame'
        ingredient = {
            type: 'masterfulmachinery:items',
            data: toJsonWithCount(ingredient)
        };
    } else if (typeof ingredient.data == 'string') {
        // { chance: 1.0, data: '2x mekanism:solar_neutron_activator' }
        ingredient.data = toJsonWithCount(ingredient.data);
    }
    if (!ingredient.type) {
        ingredient.type = 'masterfulmachinery:items';
    }
    return ingredient;
}

/**
 * transform string-style ingredient into Masterful Machinery JSON style
 * @param {string} ingredient like '3x #forge:grain' or 'minecraft:book'
 * @returns {{tag:string,count:number}|{item:string,count:number}}
 */
function toJsonWithCount(ingredient) {
    let parsed = { count: 1 };

    let splited = ingredient.split('x ', 2);
    if (splited.length != 1) {
        // "3x kubejs:no" -> ["3", "kubejs:no"]
        parsed.count = parseInt(splited[0]);
        ingredient = splited[1];
    }

    if (ingredient.startsWith('#')) {
        parsed.tag = ingredient.substring(1);
    } else {
        parsed.item = ingredient;
    }
    return parsed;
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
 * @param {string?} color
 * @returns {string}
 */
function rawItemStr(item, color) {
    let colorTag = color ? `,"color":"${color}"` : '';
    let count = item.count > 1 ? `"${item.count}*"` : '""';
    let itemName = '';
    try {
        itemName = item.getNbt().display.Name;
    } catch (e) {
        itemName = `{"translate":"${item.block ? 'block' : 'item'}.${item.id.replace(':', '.')}"}`;
    }
    // we use string instead of Text/TextComponent because KubeJS cannot handle `show_item` properly
    return `{
        "translate":"%s[%s]",
        "with":[${count},${itemName}],
        "hoverEvent": {
            "action": "show_item",
            "contents": {
                "id": "${item.id}",
                "count": ${item.count},
                "tag":"${item.nbtString.replace('"', '\\"')}"
        }}${colorTag}}`.replace(/\s+/g, '');
}

/**
 * run `tellraw` command on a player
 * @param {Internal.PlayerJS} player The target of tellraw command
 * @param {string} str The content of tellraw command
 */
function tellraw(player, str) {
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
    for (let blacklist of unificationBlacklist) {
        if (blacklist.material == material && blacklist.type == type) {
            return true;
        }
    }
    return false;
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
 * @param {T[]} arr the array to be splited
 * @param {number} sizeLimit the max size of spilitted parts of `arr`
 * @returns {T[][]} the spilitted array containing spilitted parts
 */
function splitArray(arr, sizeLimit) {
    if (sizeLimit <= 0) {
        throw 'Invalid param, `sizeLimit` must be positive number';
    }
    let unProcessed = arr.slice(0);
    let result = [];
    while (unProcessed.length > sizeLimit) {
        result.push(unProcessed.slice(0, sizeLimit));
        unProcessed = unProcessed.slice(sizeLimit);
    }
    result.push(unProcessed);
    return result;
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
    for (let wood of buildWoodVariants) {
        if (wood.logBlock == logBlock) {
            return wood.logBlockStripped;
        }
    }
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
function playerHas(item, player) {
    return player.inventory.find(item) != -1;
}

// lt  = .slice(0, index)
// lte = .slice(0, index + 1)
// gt  = .slice(index)
// gte = .slice(index + 1)

/**
 *
 * @param {string[]} tiers
 * @param {string} tier
 * @returns
 */
function getLowerTiers(tiers, tier) {
    return tiers.slice(0, tiers.indexOf(tier));
}

/**
 *
 * @param {string[]} tiers
 * @param {string} tier
 */
function getNextTier(tiers, tier) {
    let i = tiers.indexOf(tier);
    if (i == tiers.length - 1) {
        return tier;
    }
    return tiers[i + 1];
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
