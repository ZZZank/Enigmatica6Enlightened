onEvent('recipes', (event) => {
    const id_prefix = 'enigmatica:base/smithing/';

    const recipes = [];

    const black_hole_types = ['tank', 'unit'];
    const black_hole_tiers = ['common', 'pity', 'simple', 'advanced', 'supreme'];

    black_hole_types.forEach((type) => {
        black_hole_tiers.forEach((tier) => {
            lowerTiers(black_hole_tiers, tier).forEach((prev) => {
                recipes.push({
                    input1: `industrialforegoing:${prev}_black_hole_${type}`,
                    input2: `industrialforegoing:machine_frame_${tier}`,
                    output: `industrialforegoing:${tier}_black_hole_${type}`,
                    id: `${id_prefix}upgrade_${prev}_black_hole_${type}_to_${tier}`
                });
            });
        });
    });

    recipes.forEach((recipe) => {
        event.smithing(recipe.output, recipe.input1, recipe.input2).id(recipe.id);
    });
});
