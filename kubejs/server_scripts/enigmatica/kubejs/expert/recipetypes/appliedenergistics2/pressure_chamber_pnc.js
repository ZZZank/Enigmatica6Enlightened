'use strict';
onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const id_prefix = 'enigmatica:expert/appliedenergistics2/pressure_chamber/';

    const recipes = [
        {
            inputs: [
                { item: 'tconstruct:ichor_slime_crystal', count: 1 },
                { item: 'appliedenergistics2:calculation_processor', count: 1 },
                { item: 'botania:corporea_spark', count: 1 }
            ],
            pressure: 2.0,
            results: [{ item: 'appliedenergistics2:annihilation_core', count: 1 }],
            id: 'appliedenergistics2:materials/annihilationcore'
        },
        {
            inputs: [
                { item: 'tconstruct:sky_slime_crystal', count: 1 },
                { item: 'appliedenergistics2:calculation_processor', count: 1 },
                { item: 'botania:corporea_spark', count: 1 }
            ],
            pressure: 2.0,
            results: [{ item: 'appliedenergistics2:formation_core', count: 1 }],
            id: 'appliedenergistics2:materials/formationcore'
        },
        {
            inputs: [
                { tag: 'forge:coins/tin', count: 1 },
                { tag: 'forge:gems/silicon', count: 1 },
                { item: 'appliedenergistics2:sky_dust', count: 1 },
                { item: 'fluxnetworks:flux_dust', count: 1 }
            ],
            pressure: 2.0,
            results: [{ item: 'appliedenergistics2:printed_calculation_processor', count: 1 }],
            id: 'appliedenergistics2:inscriber/calculation_processor_print'
        },
        {
            inputs: [
                { tag: 'forge:coins/lumium', count: 1 },
                { tag: 'forge:gems/silicon', count: 1 },
                { item: 'appliedenergistics2:sky_dust', count: 1 },
                { item: 'fluxnetworks:flux_dust', count: 1 }
            ],
            pressure: 2.0,
            results: [{ item: 'appliedenergistics2:printed_logic_processor', count: 1 }],
            id: 'appliedenergistics2:inscriber/logic_processor_print'
        },
        {
            inputs: [
                { tag: 'forge:coins/enderium', count: 1 },
                { tag: 'forge:gems/silicon', count: 1 },
                { item: 'appliedenergistics2:sky_dust', count: 1 },
                { item: 'fluxnetworks:flux_dust', count: 1 }
            ],
            pressure: 2.0,
            results: [{ item: 'appliedenergistics2:printed_engineering_processor', count: 1 }],
            id: 'appliedenergistics2:inscriber/engineering_processor_print'
        }
    ];

    recipes.forEach((recipe) => {
        let ingredients = [];
        recipe.inputs.forEach((input) => {
            input.type = 'pneumaticcraft:stacked_item';
            ingredients.push(input);
        });

        event
            .custom({
                type: 'pneumaticcraft:pressure_chamber',
                inputs: ingredients,
                pressure: recipe.pressure,
                results: recipe.results
            })
            .id(recipe.id);
    });
});
