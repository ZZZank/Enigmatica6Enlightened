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
                    type: 'compactcrafting:filled',
                    component: 'C'
                },
                {
                    type: 'compactcrafting:hollow',
                    wall: 'C'
                },
                {
                    type: 'compactcrafting:mixed',
                    pattern: [
                        ['C', 'C', 'C', 'C', 'C'],
                        ['C', '-', '-', '-', 'C'],
                        ['C', '-', 'D', '-', 'C'],
                        ['C', '-', '-', '-', 'C'],
                        ['C', 'C', 'C', 'C', 'C']
                    ]
                }
            ],
            catalyst: {
                id: 'minecraft:diamond',
                Count: 1
            },
            components: {
                C: {
                    Name: 'minecraft:coal_block'
                },
                D: {
                    type: 'compactcrafting:block',
                    block: 'minecraft:coal_block'
                }
                // both of these can be valid, needs test
            },
            outputs: [
                {
                    id: 'minecraft:diamond',
                    Count: 1
                }
            ]
        }
        */
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'compactcrafting:miniaturization';
        recipe.version = 1; // do we actually need this?
        event.custom(recipe);
    });
});
