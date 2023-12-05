'use strict';

for (let type in storagePartsAE) {
    let parts = storagePartsAE[type];
    for (let capacity in parts) {
        let part = parts[capacity];
        let [mod, name] = part.split(':');
        console.info(part);
    }
}

onEvent('recipes', (event) => {
    if (global.isNormalMode) {
        return;
    }
    const id_prefix = 'enigmatica:expert/ae/assembly/';
    const recipes = [
        //blank for now
    ];

    for (let type in storagePartsAE) {
        for (let capacity in storagePartsAE[type]) {
            let part = storagePartsAE[type][capacity];
            let [mod, name] = part.split(':');
            recipes.push(
                {
                    input: { item: `kubejs:${name}_package`, count: 1 },
                    output: { item: `kubejs:${name}_assembly`, count: 1 },
                    program: 'drill',
                    id: `${id_prefix}${name}_assembly`
                },
                {
                    input: { item: `kubejs:${name}_assembly`, count: 1 },
                    output: { item: part },
                    program: 'laser',
                    id: `${id_prefix}${name}`
                },
                {
                    input: { item: `kubejs:batch_${name}_package`, count: 1 },
                    output: { item: `kubejs:batch_${name}_assembly`, count: 1 },
                    program: 'drill',
                    id: `${id_prefix}batch_${name}_assembly`
                },
                {
                    input: { item: `kubejs:batch_${name}_assembly`, count: 1 },
                    output: { item: part, count: 30 },
                    program: 'laser',
                    id: `${id_prefix}batch_${name}`
                }
            );
        }
    }

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
