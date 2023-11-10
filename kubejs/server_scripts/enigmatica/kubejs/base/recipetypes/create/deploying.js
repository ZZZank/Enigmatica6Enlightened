'use strict';
onEvent('recipes', (event) => {
    if (global.isNormalMode) {
        return;
    }
    const id_prefix = 'enigmatica:base/create/deploying/';
    const recipes = [
        {
            target: 'astralsorcery:marble_raw',
            output: 'astralsorcery:marble_runed',
            holding: 'naturesaura:gold_leaf'
        }
    ];

    recipes.forEach((recipe) => {
        event.recipes.create
            .deploying(recipe.output, [recipe.target, recipe.holding])
            .id('astralsorcery:altar/marble_runed');
    });
});
