onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/ars_nouveau/shapeless/';

    const recipes = [
        {
            output: 'ars_nouveau:ritual_flight',
            inputs: [
                'ars_nouveau:purple_archwood_log',
                'ars_nouveau:wilden_wing',
                'ars_nouveau:wilden_wing',
                'quark:bottled_cloud',
                'quark:bottled_cloud'
            ],
            id: 'ars_nouveau:ritual_flight'
        },
        {
            output: 'ars_nouveau:ritual_cloudshaping',
            inputs: [
                'ars_nouveau:blue_archwood_log',
                '#forge:dusts/silver',
                '#forge:dusts/silver',
                'quark:bottled_cloud',
                'quark:bottled_cloud'
            ],
            id: 'ars_nouveau:ritual_cloudshaping'
        },
        {
            output: 'ars_nouveau:ritual_moonfall',
            inputs: ['ars_nouveau:blue_archwood_log', 'architects_palette:moonstone', '#forge:ingots/silver'],
            id: 'ars_nouveau:ritual_moonfall'
        },
        {
            output: 'ars_nouveau:ritual_sunrise',
            inputs: ['ars_nouveau:red_archwood_log', 'architects_palette:sunstone', '#forge:ingots/sunmetal'],
            id: 'ars_nouveau:ritual_sunrise'
        },
        {
            output: 'ars_nouveau:ritual_binding',
            inputs: [
                'ars_nouveau:purple_archwood_log',
                'ars_nouveau:blank_parchment',
                'bloodmagic:reagentbinding',
                '#forge:gems/mana',
                '#forge:gems/mana',
                '#forge:gems/mana'
            ],
            id: 'ars_nouveau:ritual_binding'
        },
        {
            output: 'ars_nouveau:potion_jar',
            inputs: ['ars_nouveau:mana_jar', ['minecraft:nether_wart', 'byg:bulbis_sprouts']],
            id: 'ars_nouveau:potion_jar'
        },
        {
            output: 'ars_nouveau:mundane_belt',
            inputs: ['eidolon:basic_belt'],
            id: `${id_prefix}mundane_belt_to_basic_belt`
        },
        {
            output: 'eidolon:basic_belt',
            inputs: ['ars_nouveau:mundane_belt'],
            id: `${id_prefix}basic_belt_to_mundane_belt`
        }
    ];

    recipes.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});
