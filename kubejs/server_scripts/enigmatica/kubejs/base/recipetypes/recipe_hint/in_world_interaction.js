'use strict';

onEvent('recipes', (event) => {
    const id_prefix = 'enlightened6:in_world_interaction/';
    /**
     * @type {{target:string,output:string,holding:string|Internal.ItemStackJS,id:string}[]}
     */
    const recipes = [
        {
            target: 'minecraft:crafting_table',
            holding: Item.of('tetra:modular_double', {
                Damage: 0,
                'double/handle': 'double/basic_handle',
                'double/head_left': 'double/basic_hammer_left',
                'double/head_right': 'double/basic_hammer_right',
                'double/basic_handle_material': 'basic_handle/stick',
                'double/basic_hammer_right_material': 'basic_hammer/oak',
                'double/basic_hammer_left_material': 'basic_hammer/oak'
            }),
            output: 'tetra:basic_workbench',
            id: id_prefix + 'tetra_workbench'
        },
        {
            target: 'minecraft:cauldron',
            holding: 'ars_nouveau:wixie_charm',
            output: 'ars_nouveau:wixie_cauldron',
            id: id_prefix + 'wixie_cauldron'
        },
        {
            target: 'minecraft:mossy_cobblestone',
            holding: 'ars_nouveau:drygmy_charm',
            output: 'ars_nouveau:drygmy_stone',
            id: id_prefix + 'drygmy_stone'
        },
        {
            target: 'minecraft:lectern',
            holding: 'ars_nouveau:whelp_charm',
            output: 'ars_nouveau:bookwyrm_lectern',
            id: id_prefix + 'bookwyrm_lectern'
        },
        {
            target: 'ars_nouveau:summoning_crystal',
            holding: 'ars_nouveau:sylph_charm',
            output: 'ars_nouveau:sylph_se',
            id: id_prefix + 'sylph_summoning'
        },
        {
            target: 'ars_nouveau:summoning_crystal',
            holding: 'ars_nouveau:carbuncle_charm',
            output: 'ars_nouveau:carbuncle_se',
            id: id_prefix + 'carbuncle_summoning'
        }
    ];

    recipes.forEach((recipe) => {
        const builder = event.recipes.custommachinery
            .custom_machine('enlightened6:in_world_interaction', 1)
            .jei();
        addCMRecipe(builder, {
            inputs: [recipe.target],
            catalyst: recipe.holding,
            outputs: [recipe.output],
            id: recipe.id
        });
    });
});

onEvent('server.datapack.high_priority', (event) => {
    const components = [
        {
            type: 'custommachinery:item',
            mode: 'input',
            id: 'catalyst'
        },
        {
            type: 'custommachinery:item',
            mode: 'input',
            id: 'input_0'
        },
        {
            type: 'custommachinery:item',
            mode: 'output',
            id: 'output_0'
        }
    ];
    const gui = [
        {
            type: 'custommachinery:progress',
            x: 18 * 4.5 - 24 / 2,
            y: 0,
            id: 'progress'
        },
        {
            type: 'custommachinery:slot',
            x: 18 * 2,
            y: 0,
            id: 'catalyst'
        },
        {
            type: 'custommachinery:slot',
            x: 0,
            y: 0,
            id: 'input_0'
        },
        {
            type: 'custommachinery:slot',
            x: 18 * 6,
            y: 0,
            id: 'output_0'
        }
    ];

    event.addJson('enlightened6:machines/in_world_interaction.json', {
        name: {
            text: 'In-world Interaction',
            color: 'green'
        },
        appearance: {},
        tooltips: [],
        components: components,
        gui: gui,
        jei: [],
        catalysts: []
    });
});
