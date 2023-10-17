'use strict';
onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/appliedenergistics2/advanced_assembly_table_mm/';
    const recipes = [];

    storagePartsAE.forEach((storagePart) => {
        storagePart.sizes.forEach((partSize) => {
            let partName = '';
            if (storagePart.modID === 'appliedenergistics2') {
                // 'appliedenergistics2:1k_cell_component'
                partName = `${partSize}_cell_component`;
            } else if (storagePart.modID == 'aeadditions') {
                // 'aeadditions:item_storage_component_256'
                partName = `${storagePart.type}_storage_component_${partSize}`;
            } else {
                //nothing else for now
            }

            recipes.push({
                outputs: [
                    {
                        type: 'masterfulmachinery:items',
                        data: { item: `kubejs:batch_${partName}_package`, count: 1 }
                    }
                ],
                inputs: [
                    {
                        type: 'masterfulmachinery:items',
                        data: { item: `kubejs:${partName}_package`, count: 30 }
                    },
                    { type: 'masterfulmachinery:pncr_pressure', perTick: true, data: { air: 300 * 4 } }
                ],
                ticks: 240,
                id: `${id_prefix}batch_${partSize}_package`
            });
        });
    });

    recipes.forEach((recipe) => {
        recipe.type = 'masterfulmachinery:machine_process';
        recipe.structureId = 'advanced_assembly_table_structure';
        recipe.controllerId = 'advanced_assembly_table';
        event.custom(recipe).id(recipe.id);
    });
});
