'use strict';
onEvent('recipes', (event) => {
    const id_prefix = 'enigmatica:expert/tetra/shapeless/';

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
            output: Item.of(
                'tetra:modular_bow',
                '{"bow/stave":"bow/straight_stave",honing_progress:112,HideFlags:1,"bow/basic_string_material":"basic_string/string","bow/string":"bow/basic_string",id:"b4179b9a-bde2-40aa-999c-9a038c2a0232",Damage:0,repairCount:1,"bow/stave:stave/wrap/string":0,"bow/straight_stave_material":"straight_stave/stick"}'
            ),
            ingerdients: [Item.of('minecraft:bow', '{Damage:0}')],
            id: `${id_prefix}bow`
        },
        {
            output: Item.of(
                'tetra:modular_double',
                '{"double/handle":"double/basic_handle",honing_progress:280,"double/head_left":"double/basic_pickaxe_left",HideFlags:1,"double/head_right":"double/basic_pickaxe_right","double/basic_pickaxe_right_material":"basic_pickaxe/oak",id:"53142f91-1871-4cb5-b84a-d78a6cc428a1","double/basic_pickaxe_left_material":"basic_pickaxe/oak",Damage:0,repairCount:1,"double/basic_handle_material":"basic_handle/stick"}'
            ),
            ingerdients: [Item.of('minecraft:wooden_pickaxe', '{Damage:0}')],
            id: `${id_prefix}wooden_pickaxe`
        },
        {
            output: Item.of(
                'tetra:modular_double',
                '{"double/butt_right_material":"butt/oak","double/basic_axe_left_material":"basic_axe/oak","double/handle":"double/basic_handle",honing_progress:210,"double/head_left":"double/basic_axe_left",HideFlags:1,"double/head_right":"double/butt_right",id:"f2f16360-9ccd-425b-93e4-b8daa6e039db",Damage:0,repairCount:1,"double/basic_handle_material":"basic_handle/stick"}'
            ),
            ingerdients: [Item.of('minecraft:wooden_axe', '{Damage:0}')],
            id: `${id_prefix}wooden_axe`
        },
        {
            output: Item.of(
                'tetra:modular_single',
                '{"single/basic_shovel_material":"basic_shovel/oak",honing_progress:80,HideFlags:1,"single/head":"single/basic_shovel","single/handle":"single/basic_handle",id:"39f1aa0e-98b7-412c-a787-068d3679228f",Damage:0,repairCount:1,"single/basic_handle_material":"basic_handle/stick"}'
            ),
            ingerdients: [Item.of('minecraft:wooden_shovel', '{Damage:0}')],
            id: `${id_prefix}wooden_shovel`
        },
        {
            output: Item.of(
                'tetra:modular_double',
                '{"double/butt_right_material":"butt/oak","double/handle":"double/basic_handle",honing_progress:210,"double/head_left":"double/hoe_left",HideFlags:1,"double/head_right":"double/butt_right",id:"a4223d05-d83e-4dae-b2b3-cfaaa8f50375",Damage:0,repairCount:1,"double/hoe_left_material":"hoe/oak","double/basic_handle_material":"basic_handle/stick"}'
            ),
            ingerdients: [Item.of('minecraft:wooden_hoe', '{Damage:0}')],
            id: `${id_prefix}wooden_hoe`
        },
        {
            output: Item.of(
                'tetra:modular_sword',
                '{"sword/guard":"sword/makeshift_guard","sword/blade":"sword/basic_blade","sword/basic_blade_material":"basic_blade/oak",repairCount:1,"sword/pommel":"sword/decorative_pommel",honing_progress:175,"sword/basic_hilt_material":"basic_hilt/stick",HideFlags:1,"sword/hilt":"sword/basic_hilt","sword/makeshift_guard_material":"makeshift_guard/oak",id:"49ecf612-8e63-42e5-b90a-c078064c24e5",Damage:0,"sword/decorative_pommel_material":"decorative_pommel/oak"}'
            ),
            ingerdients: [Item.of('minecraft:wooden_sword', '{Damage:0}')],
            id: `${id_prefix}wooden_sword`
        },
        {
            output: Item.of(
                'tetra:modular_shield',
                '{"shield/plate":"shield/tower",honing_progress:144,HideFlags:1,"shield/basic_grip_material":"basic_grip/iron","shield/plate:shield/studs/iron":0,"shield/plate:shield/trim/iron":0,id:"d5efdc1a-4fc2-4268-b9ca-f07ad0317166",Damage:0,repairCount:0,"shield/tower_material":"tower/oak","shield/grip":"shield/basic_grip"}'
            ),
            ingerdients: [Item.of('minecraft:shield', '{Damage:0}')],
            id: `${id_prefix}wooden_shield`
        }
    ];

    recipes.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.ingerdients).id(recipe.id);
    });
});
