'use strict';
onEvent('recipes', (event) => {
    //https://github.com/CompactMods/CompactCrafting/wiki/Recipe-Specification

    //Also note, can't use Item.of because Count is caps sensitive (Name too)

    const recipes = [
        /*
        {
            recipeSize: 5,
            layers: [
                {
                    type: 'compactcrafting:mixed',
                    pattern: ['WWWWW', 'WWWWW', 'WWEWW', 'WWWWW', 'WWWWW']
                },
                {
                    type: 'compactcrafting:filled',
                    component: 'W'
                }
            ],
            catalyst: {
                id: 'thermal:upgrade_augment_1',
                Count: 1
            },
            components: {
                E: {
                    type: 'compactcrafting:block',
                    block: 'rftoolsutility:matter_transmitter'
                },
                W: {
                    type: 'compactcrafting:block',
                    block: 'compactmachines:wall'
                },
                H: {
                    type: 'compactcrafting:block',
                    block: craftBlock
                },
                T: {
                    type: 'compactcrafting:block',
                    block: 'mekanism:teleporter'
                }
            },
            outputs: [
                {
                    id: `compactmachines:machine_${tier}`,
                    Count: 1
                }
            ]
        }
        */
    ];

    let compactMachines = [
        ['tiny', 'resourcefulbees:forest_honeycomb_block'],
        ['small', 'resourcefulbees:aluminum_honeycomb_block'],
        ['normal', 'resourcefulbees:zinc_honeycomb_block'],
        ['large', 'resourcefulbees:uranium_honeycomb_block'],
        ['giant', 'resourcefulbees:cobalt_honeycomb_block'],
        ['maximum', 'resourcefulbees:industrious_honeycomb_block']
    ];

    compactMachines.forEach(([tier, craftBlock]) => {
        recipes.push({
            recipeSize: 5,
            layers: [
                {
                    type: 'compactcrafting:mixed',
                    pattern: ['WWWWW', 'WWWWW', 'WWEWW', 'WWWWW', 'WWWWW']
                },
                {
                    type: 'compactcrafting:mixed',
                    pattern: ['WWWWW', 'W   W', 'W H W', 'W   W', 'WWWWW']
                },
                {
                    type: 'compactcrafting:mixed',
                    pattern: ['WWWWW', 'W H W', 'WHTHW', 'W H W', 'WWWWW']
                },
                {
                    type: 'compactcrafting:mixed',
                    pattern: ['WWWWW', 'W   W', 'W H W', 'W   W', 'WWWWW']
                },
                {
                    type: 'compactcrafting:filled',
                    component: 'W'
                }
            ],
            catalyst: {
                id: 'thermal:upgrade_augment_1',
                Count: 1
            },
            components: {
                E: {
                    type: 'compactcrafting:block',
                    block: 'rftoolsutility:matter_transmitter'
                },
                W: {
                    type: 'compactcrafting:block',
                    block: 'compactmachines:wall'
                },
                H: {
                    type: 'compactcrafting:block',
                    block: craftBlock
                },
                T: {
                    type: 'compactcrafting:block',
                    block: 'mekanism:teleporter'
                }
            },
            outputs: [
                {
                    id: `compactmachines:machine_${tier}`,
                    Count: 1
                }
            ]
        });
    });

    recipes.forEach((recipe) => {
        recipe.layers.forEach((layer) => {
            if (layer.type != 'compactcrafting:mixed') {
                return;
            }
            for (let i = layer.pattern.length; i >= 0; i++) {
                layer.pattern[i] = layer.pattern[i].split('');
            }
        });
        recipe.type = 'compactcrafting:miniaturization';
        event.custom(recipe);
    });
});
