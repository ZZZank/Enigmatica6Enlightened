'use strict';
onEvent('recipes', (event) => {
    const recipes = [
        {
            output: 'supplementaries:candle_holder',
            pattern: ['A', 'B'],
            key: {
                A: '#quark:candles',
                B: '#forge:nuggets/pewter'
            },
            id: 'supplementaries:candle_holder'
        },
        {
            output: 'supplementaries:amethyst_arrow',
            pattern: ['A', 'B', 'C'],
            key: {
                A: 'betterendforge:crystal_shards',
                B: '#forge:rods/wooden',
                C: 'minecraft:feather'
            },
            id: 'supplementaries:amethyst_arrow'
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
