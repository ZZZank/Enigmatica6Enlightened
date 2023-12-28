'use strict';

onEvent('item.tags', (event) => {
    /**
     * @type {{tag:string,firstRemove?:any,thenAdd?:any}[]}
     * @param tag the tag string WITHOUT `#` prefix, like `forge:ingots` or `why:using/this/tag`
     * @param firstRemove valid values: RegEx, tag string, item string, item string array, or you can ignore this entry
     * @param thenAdd valid values: RegEx, tag string, item string, item string array, or you can ignore this entry
     */
    let recipes = [
        {
            tag: 'enigmatica:explosives/base',
            thenAdd: [
                'minecraft:tnt',
                'appliedenergistics2:tiny_tnt',
                'minecraft:tnt_minecart',
                'thermal:explosive_grenade',
                'supplementaries:bomb',
                'archers_paradox:explosive_arrow',
                'immersiveengineering:he',
                'apotheosis:explosive_arrow',
                'botania:lens_explosive'
            ]
        },
        {
            tag: 'enigmatica:explosives/lightning',
            thenAdd: [
                'powah:charged_snowball',
                'thermal:lightning_charge',
                'thermal:lightning_grenade',
                'thermal:lightning_tnt',
                'thermal:lightning_tnt_minecart',
                'archers_paradox:lightning_arrow'
            ]
        },
        {
            tag: 'enigmatica:explosives/ice',
            thenAdd: [
                'thermal:ice_charge',
                'thermal:ice_grenade',
                'thermal:ice_tnt',
                'thermal:ice_tnt_minecart'
            ]
        },
        {
            tag: 'enigmatica:explosives/earth',
            thenAdd: [
                'tconstruct:efln_ball',
                'thermal:earth_charge',
                'thermal:earth_tnt',
                'thermal:earth_tnt_minecart',
                'thermal:earth_grenade'
            ]
        }
    ];

    for (let recipe of recipes) {
        if (!recipe.firstRemove) {
            recipe.firstRemove = [];
        }
        let tagSplitted = recipe.tag.split('/');
        for (let i = 0; i < tagSplitted.length; i++) {
            let tag = tagSplitted.slice(0, i + 1).join('/');
            event.get(tag).remove(recipe.firstRemove).add(recipe.thenAdd);
        }
    }
});
