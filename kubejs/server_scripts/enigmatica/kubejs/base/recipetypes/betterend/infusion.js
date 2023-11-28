'use strict';
onEvent('recipes', (event) => {
    const id_prefix = 'enlightened6:base/betterend/infusion/';

    const recipes = [
        {
            input: 'minecraft:book',
            catalysts: [
                'betterendforge:enchanted_petal',
                'minecraft:lapis_lazuli',
                'thermal:gold_coin',
                '',
                'bloodmagic:sacrificialdagger',
                '',
                'botania:cosmetic_red_ribbons',
                'minecraft:lapis_lazuli'
            ],
            output: {
                id: 'minecraft:enchanted_book',
                Count: 1,
                tag: {
                    StoredEnchantments: [
                        {
                            id: 'apotheosis:life_mending',
                            lvl: 2
                        }
                    ]
                }
            },
            time: 300,
            id: id_prefix + 'life_mending'
        }
    ];

    let enchantments = [
        {
            inputs: ['botania:bellethorn', '', 'bloodmagic:sacrificialdagger'],
            enchant: 'apotheosis:life_mending',
            level: 2
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'betterendforge:infusion';
        let processed = [];
        for (let i in recipe.catalysts) {
            if (recipe.catalysts[i] == '') {
                continue;
            }
            processed.push({
                item: {
                    item: recipe.catalysts[i]
                },
                index: parseInt(i)
            });
        }
        recipe.catalysts = processed;
        recipe.input = {
            item: recipe.input
        };
        event.custom(recipe).id(recipe.id);
    });
});
