'use strict';

onEvent('recipes', (event) => {
    const id_prefix = 'enlightened6:in_world_interaction/';
    /**
     * @type {{target:string,output:string,holding:string,id:string}[]}
     */
    const recipes = [];

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
            x: 18 * 7,
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
