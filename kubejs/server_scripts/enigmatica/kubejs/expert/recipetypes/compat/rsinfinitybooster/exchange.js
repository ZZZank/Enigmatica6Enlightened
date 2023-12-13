'use strict';
onEvent('recipes', (event) => {
    if (global.isNormalMode || !Platform.isLoaded('rsinfinitybooster')) {
        return;
    }
    const id_prefix = 'enigmatica:expert/rsinfinitybooster/exchange/';

    const recipes = [
        {
            output: Item.of('botania:corporea_block', 8),
            inputs: ['naturesaura:infused_stone', 'botania:corporea_spark'],
            id: 'botania:corporea_block'
        },
        {
            output: Item.of('botania:corporea_spark_master', 1),
            inputs: ['botania:corporea_spark', '#atum:godshards'],
            id: 'botania:corporea_spark_master'
        }
    ];

    let exchanges = {
        'rsinfinitybooster:infinity_card': 'aeinfinitybooster:infinity_card',
        'rsinfinitybooster:dimension_card': 'aeinfinitybooster:dimension_card'
    };

    for (let itemRS in exchanges) {
        let itemAE = exchanges[itemRS];
        event.remove({ output: itemRS });
        recipes.push(
            {
                inputs: itemAE,
                output: itemRS,
                id: `${id_prefix}ae_rs/${itemRS.split(':')[1]}`
            },
            {
                inputs: itemRS,
                output: itemAE,
                id: `${id_prefix}rs_ae/${itemRS.split(':')[1]}`
            }
        );
    }

    recipes.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});
