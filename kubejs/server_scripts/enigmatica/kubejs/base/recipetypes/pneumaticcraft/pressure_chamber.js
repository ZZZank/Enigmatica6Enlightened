'use strict';
onEvent('recipes', (event) => {
    const id_prefix = 'enigmatica:base/pneumaticcraft/pressure_chamber/';
    const recipes = [
        {
            ingredients: ['#forge:grain'],
            pressure: 1.5,
            output: ['create:wheat_flour'],
            id: 'pneumaticcraft:pressure_chamber/wheat_flour'
        },
        {
            ingredients: ['atum:emmer'],
            pressure: 1.5,
            output: ['atum:emmer_flour'],
            id: `${id_prefix}emmer_flour`
        },
        {
            ingredients: [
                Item.of('resourcefulbees:bee_jar', { Entity: 'resourcefulbees:iron_bee' }).weakNBT().toJson(),
                'pneumaticcraft:lubricant_bucket',
                Item.of('pneumaticcraft:pneumatic_helmet').ignoreNBT().toJson()
            ],
            pressure: 4.5,
            output: [
                Item.of('resourcefulbees:bee_jar', { Entity: 'resourcefulbees:pcbee_bee' }).toResultJson()
            ],
            id: `${id_prefix}pcbee_jar`
        }
    ];
    recipes.forEach((recipe) => {
        const ingredients = [];
        recipe.inputs.forEach((input) => {
            if (typeof input != 'string') {
                ingredients.push(input)
                return
            }
            const parsed = toJsonWithCount(input);
            parsed.type = 'pneumaticcraft:stacked_item';
            ingredients.push(parsed);
        });
        event
            .custom({
                type: 'pneumaticcraft:pressure_chamber',
                inputs: ingredients,
                pressure: recipe.pressure,
                results: recipe.results.map((str) => Item.of(str).toResultJson())
            })
            .id(recipe.id);
    });
});
