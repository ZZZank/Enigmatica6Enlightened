'use strict';

onEvent('recipes', (event) => {
    const id_prefix = 'enigmatica:expert/masterful_machinery/advanced_assembly_table/';
    const recipes = [
        {
            outputs: ['kubejs:batch_basic_circuit_package'],
            inputs: ['32x kubejs:basic_circuit_package'],
            air: 300 * 4,
            ticks: 240,
            id: `${id_prefix}batch_basic_circuit_package`
        },
        {
            outputs: ['kubejs:batch_basic_memory_package'],
            inputs: ['32x kubejs:basic_memory_package'],
            air: 300 * 4,
            ticks: 240,
            id: `${id_prefix}batch_basic_memory_package`
        },
        {
            outputs: ['kubejs:batch_cpu_core_500_package'],
            inputs: ['32x kubejs:cpu_core_500_package'],
            air: 300 * 4,
            ticks: 240,
            id: `${id_prefix}batch_cpu_core_500_package`
        },
        {
            outputs: ['kubejs:batch_cpu_core_1000_package'],
            inputs: ['32x kubejs:cpu_core_1000_package'],
            air: 300 * 4,
            ticks: 240,
            id: `${id_prefix}batch_cpu_core_1000_package`
        },
        {
            outputs: ['kubejs:batch_cpu_core_2000_package'],
            inputs: ['32x kubejs:cpu_core_2000_package'],
            air: 300 * 4,
            ticks: 240,
            id: `${id_prefix}batch_cpu_core_2000_package`
        },
        {
            outputs: ['kubejs:batch_unassembled_pcb'],
            inputs: ['32x pneumaticcraft:empty_pcb'],
            air: 300 * 4,
            ticks: 240,
            id: `${id_prefix}batch_unassembled_pcb`
        },
        {
            outputs: ['kubejs:batch_unassembled_advanced_pressure_tube'],
            inputs: ['32x pneumaticcraft:compressed_iron_block'],
            air: 300 * 4,
            ticks: 240,
            id: `${id_prefix}batch_unassembled_advanced_pressure_tube`
        },
        {
            outputs: ['kubejs:batch_unassembled_machine_frame'],
            inputs: ['32x kubejs:rough_machine_frame'],
            air: 300 * 4,
            ticks: 240,
            id: `${id_prefix}batch_unassembled_machine_frame`
        }
    ];

    for (let type in storagePartsAE) {
        for (let capacity in storagePartsAE[type]) {
            let [mod, name] = storagePartsAE[type][capacity].split(':');
            recipes.push({
                outputs: [`kubejs:batch_${name}_package`],
                inputs: [`30x kubejs:${name}_package`],
                air: 300 * 4,
                ticks: 240,
                id: `${id_prefix}batch_${type}_${capacity}k_package`
            });
        }
    }

    recipes.forEach((recipe) => {
        const parsedInputs = recipe.inputs.map((val) => toMMJson(val));
        parsedInputs.push({
            type: 'masterfulmachinery:pncr_pressure',
            // @ts-ignore
            perTick: true,
            data: { air: recipe.air }
        });
        const parsed = {
            type: 'masterfulmachinery:machine_process',
            structureId: 'advanced_assembly_table_structure',
            controllerId: 'advanced_assembly_table',
            inputs: parsedInputs,
            outputs: recipe.outputs.map((val) => toMMJson(val))
        };
        event.custom(parsed).id(recipe.id);
    });
});
