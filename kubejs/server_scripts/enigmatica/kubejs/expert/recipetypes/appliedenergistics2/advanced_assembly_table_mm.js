'use strict';
onEvent('recipes', (event) => {
    if (global.isNormalMode) {
        return;
    }
    const id_prefix = 'enigmatica:expert/appliedenergistics2/advanced_assembly_table/';
    const recipes = [];

    for (let type in storagePartsAE) {
        let part = storagePartsAE[type];
        for (let capacity in part) {
            let [mod, name] = part[capacity].split(':');
            recipes.push({
                outputs: [
                    {
                        type: 'masterfulmachinery:items',
                        data: { item: `kubejs:batch_${name}_package`, count: 1 }
                    }
                ],
                inputs: [
                    {
                        type: 'masterfulmachinery:items',
                        data: { item: `kubejs:${name}_package`, count: 30 }
                    },
                    { type: 'masterfulmachinery:pncr_pressure', perTick: true, data: { air: 300 * 4 } }
                ],
                ticks: 240,
                id: `${id_prefix}batch_${capacity}k_package`
            });
        }
    }

    recipes.forEach((recipe) => {
        recipe.type = 'masterfulmachinery:machine_process';
        recipe.structureId = 'advanced_assembly_table_structure';
        recipe.controllerId = 'advanced_assembly_table';
        event.custom(recipe).id(recipe.id);
    });
});
