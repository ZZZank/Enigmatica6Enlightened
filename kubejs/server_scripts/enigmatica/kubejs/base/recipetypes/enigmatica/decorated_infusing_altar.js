'use strict';

onEvent('recipes', (event) => {
    /**
     * @type {(CMRecipeHint&{time: number})[]}
     */
    const recipes = [
        // {
        //     inputs: [],
        //     outputs: [],
        //     catalyst: '',
        //     time: 20,
        //     id: ''
        // }
    ];

    //process structure key map
    const structureRaw = {
        layout: [
            ['       ', ' ))))) ', ' )   ) ', ' )   ) ', ' )   ) ', ' ))))) ', '       '],
            ['  ***  ', ' +   + ', '* *** *', '* *,* *', '* *** *', ' +   + ', '  ***  '],
            ['       ', ' -   - ', '       ', '       ', '       ', ' -   - ', '       '],
            ['       ', ' +   + ', '       ', '       ', '       ', ' +   + ', '       ']
        ],
        legend: {
            ')': { block: 'astralsorcery:marble_raw' },
            '*': { block: 'astralsorcery:marble_runed' },
            '+': { block: 'astralsorcery:marble_chiseled' },
            ',': { block: 'minecraft:lapis_block' },
            '-': { block: 'astralsorcery:marble_pillar' }
        }
    };
    /**
     * @type {{[x in string]: string}}
     */
    const structurePattern = {};
    for (let key in structureRaw.legend) {
        structurePattern[key] = structureRaw.legend[key].block;
    }

    recipes.forEach((recipe) => {
        const builder = event.recipes.custommachinery
            .custom_machine('enlightened6:decorated_infusing_altar', recipe.time)
            .requireStructure(structureRaw.layout, structurePattern);
        addCMRecipe(builder, recipe);
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
        .concat(new CMHelper.Grid(2, 4, 'in', 'item').setMode('input').build())
        .concat(
            // @ts-ignore
            new CMHelper.Grid(2, 1, 'in', 'fluid')
                .offsetY(4 * 18)
                .setMode('input')
                .setPreset({ capacity: 10000 })
                .build()
        )
        // @ts-ignore
        .concat(new CMHelper.Grid(4, 5, 'out', 'item').setMode('output').build());
    const gui = [
        {
            type: 'custommachinery:progress',
            x: 18 * 3.5 - 24 / 2,
            y: 18 * 1.5,
            id: 'progress'
        },
        {
            type: 'custommachinery:slot',
            x: 18 * 3,
            y: 0,
            id: 'catalyst'
        }
    ]
        .concat(new CMHelper.Grid(2, 4, 'in', 'slot').build())
        .concat(
            new CMHelper.Grid(2, 1, 'in', 'fluid')
                .setPreset(CMHelper.Slot.fluidSlotPreset)
                .offsetY(4 * 18)
                .build()
        )
        .concat(new CMHelper.Grid(4, 5, 'out', 'slot').offsetX(18 * 5).build());

    event.addJson('enlightened6:machines/decorated_infusing_altar.json', {
        name: {
            text: 'Decorated Infusing Altar',
            color: 'blue'
        },
        appearance: {},
        tooltips: [],
        components: components,
        gui: gui,
        jei: [],
        catalysts: []
    });
});
