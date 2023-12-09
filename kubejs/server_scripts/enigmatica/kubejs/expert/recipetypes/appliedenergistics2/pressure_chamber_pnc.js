'use strict';
onEvent('recipes', (event) => {
    if (global.isNormalMode) {
        return;
    }

    const id_prefix = 'enigmatica:expert/appliedenergistics2/pressure_chamber/';

    const recipes = [
        {
            inputs: [
                'tconstruct:ichor_slime_crystal',
                'appliedenergistics2:calculation_processor',
                'botania:corporea_spark'
            ],
            pressure: 2.0,
            results: ['appliedenergistics2:annihilation_core'],
            id: 'appliedenergistics2:materials/annihilationcore'
        },
        {
            inputs: [
                'tconstruct:sky_slime_crystal',
                'appliedenergistics2:calculation_processor',
                'botania:corporea_spark'
            ],
            pressure: 2.0,
            results: ['appliedenergistics2:formation_core'],
            id: 'appliedenergistics2:materials/formationcore'
        },
        {
            inputs: [
                '#forge:coins/tin',
                '#forge:gems/silicon',
                'appliedenergistics2:sky_dust',
                'fluxnetworks:flux_dust'
            ],
            pressure: 2.0,
            results: ['appliedenergistics2:printed_calculation_processor'],
            id: 'appliedenergistics2:inscriber/calculation_processor_print'
        },
        {
            inputs: [
                '#forge:coins/lumium',
                '#forge:gems/silicon',
                'appliedenergistics2:sky_dust',
                'fluxnetworks:flux_dust'
            ],
            pressure: 2.0,
            results: ['appliedenergistics2:printed_logic_processor'],
            id: 'appliedenergistics2:inscriber/logic_processor_print'
        },
        {
            inputs: [
                '#forge:coins/enderium',
                '#forge:gems/silicon',
                'appliedenergistics2:sky_dust',
                'fluxnetworks:flux_dust'
            ],
            pressure: 2.0,
            results: ['appliedenergistics2:printed_engineering_processor'],
            id: 'appliedenergistics2:inscriber/engineering_processor_print'
        }
    ];

    recipes.forEach((recipe) => {
        let parsedInputs = [];
        recipe.inputs.forEach((input) => {
            let parsed = toJsonWithCount(input);
            parsed.type = 'pneumaticcraft:stacked_item';
            parsedInputs.push(parsed);
        });

        event
            .custom({
                type: 'pneumaticcraft:pressure_chamber',
                inputs: parsedInputs,
                pressure: recipe.pressure,
                results: recipe.results.map((str) => Item.of(str).toResultJson())
            })
            .id(recipe.id);
    });
});
