'use strict';
onEvent('recipes', (event) => {
    if (global.isNormalMode) {
        return;
    }
    const id_prefix = 'enigmatica:expert/redstone_arsenal/';
    const recipes = [
        {
            output: 'redstone_arsenal:obsidian_rod',
            pattern: ['  A', ' B ', 'A  '],
            key: {
                A: '#forge:dusts/obsidian',
                B: 'immersiveengineering:ingot_hop_graphite'
            },
            id: 'redstone_arsenal:materials/obsidian_rod'
        }
    ];


    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
