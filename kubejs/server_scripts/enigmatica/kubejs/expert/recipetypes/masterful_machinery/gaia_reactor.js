'use strict';
onEvent('recipes', (event) => {
    if (global.isNormalMode) {
        return;
    }
    const id_prefix = 'enigmatica:expert/masterful_machinery/gaia_reactor/';
    const recipes = [
        {
            outputs: [
                {
                    type: 'masterfulmachinery:items',
                    chance: 1.0,
                    data: '8x botania:life_essence'
                },
                {
                    type: 'masterfulmachinery:items',
                    chance: 0.5,
                    data: '4x botania:life_essence'
                },
                {
                    type: 'masterfulmachinery:items',
                    chance: 0.25,
                    data: '2x botania:life_essence'
                },
                { type: 'masterfulmachinery:botania_mana', data: { amount: 9000 * 300 } }
            ],
            inputs: [
                {
                    type: 'masterfulmachinery:energy',
                    perTick: true,
                    data: { amount: 2000000 }
                },
                {
                    type: 'masterfulmachinery:fluids',
                    perTick: true,
                    data: { fluid: 'pneumaticcraft:memory_essence', amount: 16000 }
                },
                {
                    type: 'masterfulmachinery:fluids',
                    perTick: true,
                    data: { fluid: 'astralsorcery:liquid_starlight', amount: 1000 }
                },
                { type: 'masterfulmachinery:pncr_pressure', perTick: true, data: { air: 300 * 4 } }
            ],
            ticks: 300,
            id: `${id_prefix}gaia_spirit`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.inputs.forEach((val, i) => {
            if (val instanceof string) {
                // '32x kubejs:rough_machine_frame'
                recipe.inputs[i] = {
                    type: 'masterfulmachinery:items',
                    data: toJsonWithCount(val)
                };
            } else if (val.type == 'masterfulmachinery:items') {
                /*
                {
                    type: 'masterfulmachinery:items',
                    chance: 1.0,
                    data: '2x mekanism:solar_neutron_activator'
                }
                 */
                recipe.inputs[i].data = toJsonWithCount(val.data);
            }
        });
        recipe.outputs.forEach((val, i) => {
            if (val instanceof string) {
                recipe.outputs[i] = {
                    type: 'masterfulmachinery:items',
                    data: toJsonWithCount(val)
                };
            } else if (val.type == 'masterfulmachinery:items') {
                recipe.outputs[i].data = toJsonWithCount(val.data);
            }
        });
        recipe.type = 'masterfulmachinery:machine_process';
        recipe.structureId = 'gaia_reactor_structure';
        recipe.controllerId = 'gaia_reactor';
        event.custom(recipe).id(recipe.id);
    });
});
