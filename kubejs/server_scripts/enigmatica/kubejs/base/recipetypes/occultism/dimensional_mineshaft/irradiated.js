'use strict';
onEvent('recipes', (event) => {
    const id_prefix = 'enigmatica:base/occultism/miners/irradiated/';
    const recipes = [
        {
            output: 'emendatusenigmatica:uranium_chunk',
            weight: 6,
            id: `${id_prefix}uranium_chunk`
        },
        {
            output: 'emendatusenigmatica:fluorite_chunk',
            weight: 1,
            id: `${id_prefix}fluorite_chunk`
        },
        {
            output: 'emendatusenigmatica:sulfur_chunk',
            weight: 1,
            id: `${id_prefix}sulfur_chunk`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'occultism:miner';
        recipe.ingredient = { tag: 'occultism:miners/irradiated' };
        recipe.result = Item.of(recipe.output).toJson();

        event.custom(recipe).id(recipe.id);
    });

    RecipeHint: {
        let weightSum = 0;
        recipes.forEach((recipe) => (weightSum += recipe.weight));
        let unProcessed = recipes.map((recipe) => {
            return {
                data: { item: recipe.output, count: 1 },
                chance: (recipe.weight / weightSum).toFixed(4)
            };
        });
        splitArray(unProcessed, 18).forEach((output, index) => {
            let recipe_hint = {
                inputs: ['#occultism:miners/irradiated', 'occultism:dimensional_mineshaft'],
                outputs: output,
                id: id_prefix + 'hint' + index
            };
            addGeneralRecipeHint(recipe_hint, event);
        });
    }
});
