'use strict';
onEvent('recipes', (event) => {
    const id_prefix = 'enigmatica:base/ars_nouveau/enchanting_apparatus/';
    const recipes = [
        {
            inputs: [],
            reagent: 'minecraft:bucket',
            sourceCost: 1000,
            output: 'ars_nouveau:bucket_of_mana',
            id: `${id_prefix}bucket_of_mana`
        },
        {
            inputs: [
                'minecraft:conduit',
                'kubejs:monster_mash',
                'aquaculture:fish_bones',
                'ars_nouveau:red_archwood_sapling'
            ],
            reagent: 'minecraft:water_bucket',
            sourceCost: 1000,
            output: 'kubejs:dead_koi_bucket',
            id: `${id_prefix}dead_koi_bucket`
        },
        {
            inputs: ['#forge:gems/mana', '#forge:gems/mana', '#forge:gems/mana', '#forge:gems/mana'],
            reagent: '#forge:seeds',
            output: 'ars_nouveau:mana_bloom_crop',
            id: 'ars_nouveau:mana_bloom_crop'
        },

        {
            inputs: [
                'resourcefulbees:carbee_honeycomb_block',
                'resourcefulbees:carbee_honeycomb_block',
                'resourcefulbees:carbee_honeycomb_block'
            ],
            reagent: Item.of('minecraft:potion', '{Potion:"ars_nouveau:mana_regen_potion_long"}'),
            output: Item.of('resourcefulbees:mana_honey_bottle', 1),
            id: `${id_prefix}mana_honey_bottle`
        }
    ];
    recipes.forEach((recipe) => {
        recipe.sourceCost
            ? event.recipes.ars_nouveau
                  .enchanting_apparatus(recipe.output, recipe.reagent, recipe.inputs)
                  .merge({ sourceCost: recipe.sourceCost })
                  .id(recipe.id)
            : event.recipes.ars_nouveau
                  .enchanting_apparatus(recipe.output, recipe.reagent, recipe.inputs)
                  .id(recipe.id);
    });
});
