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
                E: 'rftoolsutility:matter_transmitter',
                W: 'compactmachines:wall',
                H: 'minecraft:stone',
                T: 'mekanism:teleporter'
            },
            outputs: [
                {
                    id: `minecraft:stone`,
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
                    pattern: ['WWAWW', 'W H W', 'AHTHA', 'W H W', 'WWAWW']
                },
                {
                    type: 'compactcrafting:mixed',
                    pattern: ['WWWWW', 'W   W', 'W H W', 'W   W', 'WWWWW']
                },
                {
                    type: 'compactcrafting:mixed',
                    pattern: ['WWWWW', 'WWWWW', 'WWAWW', 'WWWWW', 'WWWWW']
                }
            ],
            catalyst: {
                id: 'thermal:upgrade_augment_1',
                Count: 1
            },
            components: {
                E: 'rftoolsutility:matter_transmitter',
                W: 'compactmachines:wall',
                H: craftBlock,
                T: 'mekanism:teleporter',
                A: 'mekanism:teleporter_frame'
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
            let pattern = layer.pattern;
            if (!pattern) {
                return;
            }
            for (let i = pattern.length - 1; i >= 0; i--) {
                pattern[i] = pattern[i].split('');
            }
        });
        for (let key in recipe.components) {
            recipe.components[key] = {
                type: 'compactcrafting:block',
                block: recipe.components[key]
            };
        }
        console.info(recipe);
        recipe.type = 'compactcrafting:miniaturization';
        event.custom(recipe);
    });
});
