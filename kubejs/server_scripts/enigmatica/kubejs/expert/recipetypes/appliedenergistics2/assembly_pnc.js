'use strict';
onEvent('recipes', (event) => {
    if (global.isNormalMode) {
        return;
    }
    const id_prefix = 'enigmatica:expert/appliedenergistics2/assembly_pnc/';
    const recipes = [
        //blank for now
    ];

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
            let partID = `${storagePart.modID}:${partName}`;

            recipes.push(
                {
                    input: { item: `kubejs:${partName}_package`, count: 1 },
                    output: { item: `kubejs:${partName}_assembly`, count: 1 },
                    program: 'drill',
                    id: `${id_prefix}${partName}_assembly`
                },
                {
                    input: { item: `kubejs:${partName}_assembly`, count: 1 },
                    output: { item: partID, count: 1 },
                    program: 'laser',
                    id: `${id_prefix}${partName}`
                },
                {
                    input: { item: `kubejs:batch_${partName}_package`, count: 1 },
                    output: { item: `kubejs:batch_${partName}_assembly`, count: 1 },
                    program: 'drill',
                    id: `${id_prefix}batch_${partName}_assembly`
                },
                {
                    input: { item: `kubejs:batch_${partName}_assembly`, count: 1 },
                    output: { item: partID, count: 30 },
                    program: 'laser',
                    id: `${id_prefix}batch_${partName}`
                }
            );
        });
    });

    recipes.forEach((recipe) => {
        recipe.input.type = 'pneumaticcraft:stacked_item';
        event
            .custom({
                type: `pneumaticcraft:assembly_${recipe.program}`,
                input: recipe.input,
                result: recipe.output,
                program: recipe.program
            })
            .id(recipe.id);
    });
});
