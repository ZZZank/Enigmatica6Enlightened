onEvent('recipes', (event) => {
    const id_prefix = 'enigmatica:base/interactio/item_lightning/';
    const recipes = [
        {
            inputs: ['tiab:timeinabottle', '#forge:raw_fishes'],
            output: {
                entries: [{ result: { item: 'aquaculture:fish_bones', count: 1 }, weight: 1 }],
                empty_weight: 0,
                rolls: 1
            },
            id: `${id_prefix}fish_bones`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'interactio:item_lightning';

        recipe.inputs = recipe.inputs.map((input) => Ingredient.of(input).toJson());

        event.custom(recipe).id(recipe.id);
    });
});
