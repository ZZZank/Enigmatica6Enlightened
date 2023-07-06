onEvent('recipes', (event) => {
    const id_prefix = 'enigmatica:base/tconstruct/blasting/';
    const recipes = [
        {
            input: 'minecraft:glass',
            output: Item.of('tconstruct:clear_glass'),
            xp: 0.1,
            id: `${id_prefix}glass_to_clear_glass`
        }
    ];

    colors.forEach((color) => {
        event
            .blasting(`tconstruct:${color}_clear_stained_glass`, `minecraft:${color}_stained_glass`)
            .id(`${id_prefix}${color}_glass_to_clear_glass`)
            .xp(0.1);
    });

    recipes.forEach((recipe) => {
        const recipeEvent = event.blasting(recipe.output, recipe.input).id(recipe.id);

        if (recipe.xp) {
            recipeEvent.xp(recipe.xp);
        }
    });
});
