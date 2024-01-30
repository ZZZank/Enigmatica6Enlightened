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
    ];

    astralsorcery_mineralis: {
        let weightSum = 0;
        let perk_stone_enrichment_ore = [
            'forge:ores/aluminum;1200',
            'forge:ores/apatite;700',
            'forge:ores/mana;200',
            'forge:ores/bitumen;1000',
            'forge:ores/cinnabar;500',
            'forge:ores/coal;5200',
            'forge:ores/copper;2000',
            'forge:ores/diamond;120',
            'forge:ores/dimensional;20',
            'forge:ores/emerald;100',
            'forge:ores/fluorite;50',
            'forge:ores/gold;550',
            'forge:ores/iron;2500',
            'forge:ores/lapis;360',
            'forge:ores/lead;1500',
            'forge:ores/nickel;100',
            'forge:ores/osmium;1500',
            'forge:ores/potassium_nitrate;250',
            'forge:ores/redstone;700',
            'forge:ores/silver;1000',
            'forge:ores/sulfur;300',
            'forge:ores/tin;1800',
            'forge:ores/uranium;400',
            'forge:ores/zinc;1000'
        ]
            .map((entry) => {
                let [tag, weightStr] = entry.split(';', 2);
                let weight = parseInt(weightStr);
                let item = getPreferredItemInTag(ingredient.of('#' + tag));
                weightSum += weight;
                return { item: item, weight: weight };
            })
            .map((entry) => entry.item.chance(entry.weight / weightSum));
        toPagedArray(perk_stone_enrichment_ore, 15).forEach((page, i) => {
            recipes.push({
                inputs: [
                    Item.of('astralsorcery:attuned_rock_crystal', {
                        astralsorcery: { constellationName: 'astralsorcery:mineralis' }
                    })
                ],
                catalyst: 'astralsorcery:ritual_pedestal',
                outputs: page,
                id: id_prefix + 'astralsorcery_mineralis_' + i
            });
        });
    }
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
            x: 18 * 4.5 - 24 / 2,
            y: 18 * 1.5,
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
