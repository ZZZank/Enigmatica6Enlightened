'use strict';

onEvent('recipes', (event) => {
    //TODO: how to impl chance display

    event.recipes.custommachinery
        .custom_machine('enligntened6:recipe_hint', 20)
        .jei()
        .requireItem(Item.of('environmental:apple_pie'))
        .produceItem(Item.of('appliedenergistics2:16k_fluid_cell_component'));
});

onEvent('server.datapack.first', (event) => {
    let components = []
        .concat(new CMGrid(5, 1, 'in', 'item').setMode('input').build())
        .concat(new CMGrid(9, 3, 'out', 'item').setMode('output').build());
    let gui = [
        {
            type: 'custommachinery:progress',
            x: 0,
            y: 20,
            id: 'progress'
        }
    ]
        .concat(new CMGrid(5, 1, 'in', 'slot').build())
        .concat(new CMGrid(9, 3, 'out', 'slot').offset(0, 40).build());

    event.addJson('enligntened6:machines/recipe_hint.json', {
        name: {
            text: 'Recipe Hint',
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
