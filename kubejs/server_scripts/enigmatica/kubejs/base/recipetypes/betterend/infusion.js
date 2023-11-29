'use strict';
onEvent('recipes', (event) => {
    const id_prefix = 'enlightened6:base/betterend/infusion/';

    const recipes = [
        {
            input: 'minecraft:book',
            catalysts: [
                'betterendforge:enchanted_petal',
                'minecraft:lapis_lazuli',
                'thermal:gold_coin',
                '',
                'bloodmagic:sacrificialdagger',
                '',
                'botania:cosmetic_red_ribbons',
                'minecraft:lapis_lazuli'
            ],
            output: {
                id: 'minecraft:enchanted_book',
                Count: 1,
                tag: {
                    StoredEnchantments: [
                        {
                            id: 'apotheosis:life_mending',
                            lvl: 2
                        }
                    ]
                }
            },
            time: 300,
            id: id_prefix + 'life_mending'
        }
    ];

    let enchantments = [
        {
            inputs: ['botania:bellethorn', '', 'bloodmagic:sacrificialdagger'],
            enchant: 'apotheosis:life_mending',
            level: 2
        },
        {
            inputs: [
                'emendatusenigmatica:steel_plate',
                'minecraft:turtle_helmet',
                'emendatusenigmatica:steel_plate'
            ],
            enchant: 'minecraft:protection',
            level: 2
        },
        {
            inputs: ['atum:atem_godshard', 'tconstruct:rose_gold_block', 'tconstruct:silky_cloth'],
            enchant: 'minecraft:silk_touch',
            level: 1
        },
        {
            inputs: ['minecraft:feather', 'alexsmobs:roadrunner_feather', 'minecraft:feather'],
            enchant: 'minecraft:feather_falling',
            level: 2
        },
        {
            inputs: [
                'ars_nouveau:amplify_arrow',
                'betterendforge:eternal_crystal',
                'ars_nouveau:amplify_arrow'
            ],
            enchant: 'minecraft:infinity',
            level: 1
        },
        {
            inputs: ['ars_nouveau:pierce_arrow', 'ars_nouveau:pierce_arrow', 'ars_nouveau:pierce_arrow'],
            enchant: 'minecraft:piercing',
            level: 2
        },
        {
            inputs: ['minecraft:scute',
                'minecraft:shield',
                'minecraft:scute'],
            enchant: 'minecraft:projectile_protection',
            level: 2
        },
        {
            inputs: ['tconstruct:soul_glass', 'quark:soul_bead', 'tconstruct:soul_glass'],
            enchant: 'minecraft:soul_speed',
            level: 2
        },
        {
            inputs: ['archers_paradox:blaze_arrow', 'create:rose_quartz', 'archers_paradox:blaze_arrow'],
            enchant: 'minecraft:fire_aspect',
            level: 1
        },
        {
            inputs: ['ars_nouveau:greater_experience_gem', 'botania:rune_mana', 'ars_nouveau:greater_experience_gem'],
            enchant: 'minecraft:mending',
            level: 1
        },
        {
            inputs: ['thermal:diving_fabric', 'minecraft:heart_of_the_sea', 'thermal:diving_fabric'],
            enchant: 'minecraft:aqua_affinity',
            level: 1
        },
        {
            inputs: ['aquaculture:worm', 'aquaculture:redstone_hook', 'aquaculture:worm'],
            enchant: 'minecraft:lure',
            level: 2
        },
        {
            inputs: ['ars_nouveau:split_arrow', 'thermal:basalz_powder', 'ars_nouveau:split_arrow'],
            enchant: 'minecraft:multishot',
            level: 1
        },
        {
            inputs: ['alexsmobs:bear_fur', 'betterendforge:amber_gem', 'ars_nouveau:wilden_horn'],
            enchant: 'minecraft:power',
            level: 2
        },
        {
            inputs: ['tconstruct:quartz_shuriken', 'tconstruct:manyullyn_ingot', 'tconstruct:quartz_shuriken'],
            enchant: 'minecraft:sharpness',
            level: 2
        },
        {
            inputs: ['minecraft:fermented_spider_eye', 'tconstruct:quartz_shuriken', 'minecraft:fermented_spider_eye'],
            enchant: 'minecraft:bane_of_arthropods',
            level: 2
        },
        {
            inputs: ['minecraft:netherite_scrap', 'meetyourfight:velvet_fortune', 'minecraft:netherite_scrap'],
            enchant: 'minecraft:fortune',
            level: 2
        },
        {
            inputs: ['littlelogistics:spring', 'aquaculture:diamond_hook', 'littlelogistics:spring'],
            enchant: 'minecraft:sweeping',
            level: 2
        },
        {
            inputs: ['powah:charged_snowball', 'powah:capacitor_basic_large', 'powah:charged_snowball'],
            enchant: 'minecraft:channeling',
            level: 1
        },
        {
            inputs: ['tconstruct:sky_congealed_slime', 'ars_nouveau:glyph_gust', 'tconstruct:sky_congealed_slime'],
            enchant: 'minecraft:punch',
            level: 2
        },
        {
            inputs: ['emendatusenigmatica:emerald_plate', 'modularrouters:blast_upgrade', 'emendatusenigmatica:emerald_plate'],
            enchant: 'minecraft:blast_protection',
            level: 2
        },
        {
            inputs: ['pneumaticcraft:heat_pipe', 'betterendforge:ancient_emerald_ice', 'pneumaticcraft:heat_pipe'],
            enchant: 'minecraft:frost_walker',
            level: 1
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'betterendforge:infusion';
        let processed = [];
        for (let i in recipe.catalysts) {
            if (recipe.catalysts[i] == '') {
                continue;
            }
            processed.push({
                item: {
                    item: recipe.catalysts[i]
                },
                index: parseInt(i)
            });
        }
        recipe.catalysts = processed;
        recipe.input = {
            item: recipe.input
        };
        event.custom(recipe).id(recipe.id);
    });
});
