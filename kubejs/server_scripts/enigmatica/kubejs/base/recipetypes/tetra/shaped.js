'use strict';
onEvent('recipes', (event) => {
    const id_prefix = 'enigmatica:base/tetra/shaped/';

    /*
    {
        output:"output",
        ingerdients:[
            "ingerdient1",
            "ingerdient2"
        ],
        id:"recipe_id"
    }
    */
    const recipes = [
        {
            output: Item.of('tetra:modular_double', {
                'double/head_left': 'double/basic_hammer_left',
                'double/basic_hammer_left_material': 'basic_hammer/oak',
                'double/head_right': 'double/basic_hammer_right',
                'double/basic_hammer_right_material': 'basic_hammer/oak',
                'double/handle': 'double/basic_handle',
                'double/basic_handle_material': 'basic_handle/stick'
            }),
            pattern: [' # ', ' /#', '/  '],
            key: { '#': '#minecraft:planks', '/': '$forge:rods/wooden' },
            id: 'tetra:hammer/oak'
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
