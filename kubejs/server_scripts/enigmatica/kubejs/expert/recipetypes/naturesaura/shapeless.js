onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/naturesaura/shapeless/';

    const recipes = [
        {
            output: 'naturesaura:bottle_two_the_rebottling',
            inputs: ['minecraft:glass_bottle', 'farmersdelight:tree_bark'],
            id: 'naturesaura:bottle_two_the_rebottling'
        },
        {
            output: 'naturesaura:altar/tainted_gold',
            inputs: ['#forge:ingots/arcane_gold'],
            id: `${id_prefix}arcane_gold_to_tainted_gold`
        }
    ];

    recipes.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});
