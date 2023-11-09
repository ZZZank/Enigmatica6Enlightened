'use strict';
onEvent('recipes', (event) => {
    if (global.isNormalMode) {
        return;
    }

    const recipes = [
        {
            toReplace: 'redstone_arsenal:obsidian_rod',
            replaceWith: 'immersiveengineering:graphite_electrode'
        },
        {
            filter: {
                not: [{ id: 'redstone_arsenal:storage/flux_metal_block' }]
            },
            toReplace: 'redstone_arsenal:flux_ingot',
            replaceWith: 'powah:capacitor_blazing'
        },
        {
            filter: {
                not: [{ id: 'redstone_arsenal:storage/flux_gem_block' }]
            },
            toReplace: 'redstone_arsenal:flux_gem',
            replaceWith: 'powah:crystal_nitro'
        }
    ];

    recipes.forEach((recipe) => {
        let filter = {
            mod: 'redstone_arsenal'
        };
        if (recipe.filter) {
            recipe.filter.mod = 'redstone_arsenal';
            filter = recipe.filter;
        }
        event.replaceInput(filter, recipe.toReplace, recipe.replaceWith);
    });
});
