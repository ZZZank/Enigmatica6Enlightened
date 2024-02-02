'use strict';

onEvent('recipes', (event) => {
    const id_prefix = 'enlightened6:killing_entity/';
    const recipes = [
        {
            target: [
                Item.of('ars_nouveau:glyph_filter_monster', {
                    display: {
                        Lore: ['[{ "text": "Any monsters with no more than 20 healths(10 hearts)" }]']
                    }
                })
            ],
            weapon: Item.of('minecraft:trident', {
                nullptrType: 1,
                Damage: 225,
                display: {
                    Name: '[{ "translate": "item.en6e.null_pointer" }]',
                    Lore: ['[{ "translate": "lore.en6e.null_pointer" }]']
                },
                'quark:RuneAttached': true,
                'quark:RuneColor': { id: 'quark:gray_rune', Count: 1 }
            }).enchant('minecraft:vanishing_curse', 1),
            output: ['appliedenergistics2:charged_certus_quartz_crystal'],
            id: id_prefix + 'null_pointer'
        },
        {
            target: ['minecraft:ravager_spawn_egg'],
            output: ['quark:ravager_hide'],
            id: id_prefix + 'ravager'
        },
        {
            target: ['minecraft:wither_skeleton_spawn_egg'],
            output: [
                'minecraft:wither_skeleton_skull',
                'architects_palette:withered_bone',
                'wstweaks:fragment'
            ],
            id: id_prefix + 'wither_skeleton'
        },
        {
            target: ['minecraft:elder_guardian_spawn_egg'],
            output: ['upgrade_aquatic:elder_guardian_spine', 'upgrade_aquatic:elder_eye'],
            id: id_prefix + 'elder_guardian'
        },
        {
            target: ['minecraft:guardian_spawn_egg'],
            output: ['upgrade_aquatic:guardian_spine'],
            id: id_prefix + 'guardian'
        },
        {
            target: ['minecraft:pig_spawn_egg'],
            weapon: '#farmersdelight:tools/knives',
            output: ['farmersdelight:ham'],
            id: id_prefix + 'pig'
        },
        {
            target: ['minecraft:hoglin_spawn_egg'],
            weapon: '#farmersdelight:tools/knives',
            output: ['farmersdelight:ham', 'nethers_delight:hoglin_hide'],
            id: id_prefix + 'hoglin'
        },
        {
            target: ['upgrade_aquatic:nautilus_spawn_egg'],
            output: ['minecraft:nautilus_shell'],
            id: id_prefix + 'nautilus'
        },
        {
            target: [
                'ars_nouveau:ritual_wilden_summon',
                'ars_nouveau:wilden_horn',
                'ars_nouveau:wilden_wing',
                'ars_nouveau:wilden_spike'
            ],
            output: ['ars_nouveau:wilden_tribute'],
            id: id_prefix + 'wilden_summon'
        },
        {
            target: ['betterendforge:silk_moth_nest'],
            output: ['betterendforge:silk_fiber'],
            id: id_prefix + 'silk_moth'
        },
        {
            target: ['meetyourfight:haunted_bell'],
            output: ['meetyourfight:phantoplasm'],
            id: id_prefix + 'phantoplasm'
        },
        {
            target: ['meetyourfight:fossil_bait'],
            output: ['meetyourfight:mossy_tooth'],
            id: id_prefix + 'mossy_tooth'
        },
        {
            target: ['meetyourfight:devils_ante'],
            output: ['meetyourfight:fortunes_favor'],
            id: id_prefix + 'fortunes_favor'
        },
        {
            target: ['environmental:koi_bucket'],
            output: ['bloodmagic:slate_ampoule', 'aquaculture:fish_bones'],
            id: id_prefix + 'koi'
        }
    ];

    recipes.forEach((recipe) => {
        const builder = event.recipes.custommachinery.custom_machine('enlightened6:killing_entity', 1).jei();
        if (!recipe.weapon) {
            recipe.weapon = '#forge:weapons';
        }
        addCMRecipe(builder, {
            inputs: recipe.target,
            catalyst: recipe.weapon,
            outputs: recipe.output,
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
        }
    ]
        // @ts-ignore
        .concat(new CMGrid(3, 2, 'in', 'item').setMode('input').build())
        // @ts-ignore
        .concat(new CMGrid(3, 2, 'out', 'item').setMode('output').build());
    const gui = [
        {
            type: 'custommachinery:progress',
            x: 18 * 4.5 - 24 / 2,
            y: 19, //18*2-16, with additional 1 as divider
            id: 'progress'
        },
        {
            type: 'custommachinery:slot',
            x: 18 * 4,
            y: 0,
            id: 'catalyst'
        }
    ]
        .concat(new CMGrid(3, 2, 'in', 'slot').build())
        .concat(new CMGrid(3, 2, 'out', 'slot').offset(18 * 6, 0).build());

    event.addJson('enlightened6:machines/killing_entity.json', {
        name: {
            text: 'Killing Entity',
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
