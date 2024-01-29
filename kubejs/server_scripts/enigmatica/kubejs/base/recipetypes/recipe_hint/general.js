'use strict';

onEvent('recipes', (event) => {
    const id_prefix = 'enlightened6:recipe_hint_general/';
    /**
     * @type {{inputs:(string|Internal.ItemStackJS)[],catalyst:''|string|Internal.ItemStackJS,outputs:Internal.ItemStackJS_[],id:string}[]}
     */
    const recipes = [
        {
            inputs: ['#appliedenergistics2:metal_ingots'],
            catalyst: '#appliedenergistics2:knife',
            outputs: ['appliedenergistics2:name_press'],
            id: id_prefix + 'name_press'
        },
        {
            inputs: [
                Item.of('ars_nouveau:mana_jar', {
                    BlockEntityTag: { mana: 10000, max_mana: 10000, id: 'ars_nouveau:mana_jar' }
                })
            ],
            catalyst: 'minecraft:bucket',
            outputs: [
                'ars_nouveau:bucket_of_mana',
                Item.of('ars_nouveau:mana_jar', {
                    BlockEntityTag: { mana: 9000, max_mana: 10000, id: 'ars_nouveau:mana_jar' }
                })
            ],
            id: id_prefix + 'bucket_of_mana'
        },
        {
            inputs: ['minecraft:ender_pearl', 'appliedenergistics2:singularity'],
            catalyst: '#enlightened6:explosives/base',
            outputs: ['2x appliedenergistics2:quantum_entangled_singularity'],
            id: id_prefix + 'quantum_entangled_singularity'
        }
        ,
        {
            inputs: [Item.of('create:black_seat', 30).chance(0.4), 'minecraft:beacon'],
            catalyst: 'farsight_spyglasses:spyglass',
            outputs: [Item.of('create:blue_seat', 30).chance(0.4), 'create:analog_lever'],
            id: 'enl:try'
        }

    ];

    recipes.forEach((recipe) => {
        addGeneralRecipeHint(recipe, event);
    });
});

onEvent('server.datapack.high_priority', (event) => {
    const components = [
        {
            type: 'custommachinery:item',
            mode: 'input',
            id: 'catalyst'
        }
    ]
        // @ts-ignore
        .concat(new CMGrid(3, 3, 'in', 'item').setMode('input').build())
        // @ts-ignore
        .concat(new CMGrid(3, 5, 'out', 'item').setMode('output').build());
    const gui = [
        {
            type: 'custommachinery:progress',
            x: 18 * 4,
            y: 20,
            id: 'progress'
        },
        {
            type: 'custommachinery:slot',
            x: 18 * 4,
            y: 0,
            id: 'catalyst'
        }
    ]
        .concat(new CMGrid(3, 3, 'in', 'slot').build())
        .concat(new CMGrid(3, 5, 'out', 'slot').offset(18 * 6, 0).build());

    event.addJson('enlightened6:machines/recipe_hint_general.json', {
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
