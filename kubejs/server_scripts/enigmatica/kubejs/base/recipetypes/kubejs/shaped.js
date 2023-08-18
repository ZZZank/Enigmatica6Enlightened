onEvent('recipes', (event) => {
    const id_prefix = 'enigmatica:base/kubejs/';
    /*
        ,
        {
            output: '',
            pattern: ['', '', ''],
            key: {
                A: ''
            },
            id: ''
        }
    */

    const recipes = [
        {
            output: 'kubejs:amadron_survey_tools',
            pattern: ['ABA', 'CDE', 'AFA'],
            key: {
                A: Item.of('pneumaticcraft:air_canister', '{"pneumaticcraft:air":30000}').weakNBT(),
                B: 'pneumaticcraft:reinforced_chest',
                C: Item.of('mekanismtools:steel_paxel', '{Damage:0}').weakNBT(),
                D: 'mekanism:cardboard_box',
                E: 'minecraft:compass',
                F: 'immersiveengineering:survey_tools'
            },
            id: `${id_prefix}amadron_survey_tools`
        },
        {
            output: 'kubejs:pewter_ingot',
            pattern: ['AAA', 'AAA', 'AAA'],
            key: {
                A: '#forge:nuggets/pewter'
            },
            id: `${id_prefix}pewter_nugget_to_ingot`
        },
        {
            output: '2x kubejs:pewter_inlay',
            pattern: [' A ', 'A A', ' A '],
            key: {
                A: '#forge:ingots/pewter'
            },
            id: `${id_prefix}pewter_inlay`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
