'use strict';
onEvent('recipes', (event) => {
    if (global.isNormalMode) {
        return;
    }
    const id_prefix = 'enigmatica:expert/masterful_machinery/auto_iridescent_altar/';
    const recipes = [
        {
            outputs: [
                {
                    type: 'masterfulmachinery:items',
                    chance: 1.0,
                    data: '1x kubejs:observatory_lens'
                },
                {
                    type: 'masterfulmachinery:items',
                    chance: 0.05,
                    data: '1x kubejs:observatory_lens'
                }
            ],

            inputs: [
                '8x #forge:ingots/shadow_steel',
                '4x #botania:runes/air',
                '4x astralsorcery:colored_lens_spectral',
                '4x astralsorcery:resonating_gem',
                '4x astralsorcery:illumination_powder',
                '2x astralsorcery:nocturnal_powder',
                '2x #forge:dusts/starmetal',
                '1x astralsorcery:attuned_celestial_crystal',

                { type: 'masterfulmachinery:energy', perTick: true, data: { amount: 500000 } },
                { type: 'masterfulmachinery:astral_starlight', perTick: true, data: { amount: 50 } }
            ],
            ticks: 200,
            id: `${id_prefix}observatory_lens`
        },
        {
            outputs: [
                {
                    type: 'masterfulmachinery:items',
                    chance: 1.0,
                    data: '3x astralsorcery:colored_lens_fire'
                },
                {
                    type: 'masterfulmachinery:items',
                    chance: 0.1,
                    data: '1x astralsorcery:colored_lens_fire'
                }
            ],
            inputs: [
                '4x #forge:dusts/starmetal',
                '4x astralsorcery:resonating_gem',
                '2x quark:orange_rune',
                '2x bloodmagic:smelting_anointment_l',
                '1x astralsorcery:glass_lens',

                { type: 'masterfulmachinery:energy', perTick: true, data: { amount: 50000 } },
                { type: 'masterfulmachinery:astral_starlight', perTick: true, data: { amount: 50 } }
            ],
            ticks: 100,
            id: `${id_prefix}colored_lens_fire`
        },
        {
            outputs: [
                {
                    type: 'masterfulmachinery:items',
                    chance: 1.0,
                    data: '3x astralsorcery:colored_lens_break'
                },
                {
                    type: 'masterfulmachinery:items',
                    chance: 0.1,
                    data: '1x astralsorcery:colored_lens_break'
                }
            ],
            inputs: [
                '4x #forge:dusts/starmetal',
                '4x astralsorcery:resonating_gem',
                '2x quark:yellow_rune',
                '2x bloodmagic:hidden_knowledge_anointment_l',
                '1x astralsorcery:glass_lens',

                { type: 'masterfulmachinery:energy', perTick: true, data: { amount: 50000 } },
                { type: 'masterfulmachinery:astral_starlight', perTick: true, data: { amount: 50 } }
            ],
            ticks: 100,
            id: `${id_prefix}colored_lens_break`
        },
        {
            outputs: [
                {
                    type: 'masterfulmachinery:items',
                    chance: 1.0,
                    data: '3x astralsorcery:colored_lens_growth'
                },
                {
                    type: 'masterfulmachinery:items',
                    chance: 0.1,
                    data: '1x astralsorcery:colored_lens_growth'
                }
            ],
            inputs: [
                '4x #forge:dusts/starmetal',
                '4x naturesaura:gold_powder',
                '2x quark:lime_rune',
                '2x bloodmagic:fortune_anointment_l',
                '1x astralsorcery:glass_lens',

                { type: 'masterfulmachinery:energy', perTick: true, data: { amount: 50000 } },
                { type: 'masterfulmachinery:astral_starlight', perTick: true, data: { amount: 50 } }
            ],
            ticks: 100,
            id: `${id_prefix}colored_lens_growth`
        },
        {
            outputs: [
                {
                    type: 'masterfulmachinery:items',
                    chance: 1.0,
                    data: '3x astralsorcery:colored_lens_damage'
                },
                {
                    type: 'masterfulmachinery:items',
                    chance: 0.1,
                    data: '1x astralsorcery:colored_lens_damage'
                }
            ],
            inputs: [
                '4x #forge:dusts/starmetal',
                '4x astralsorcery:resonating_gem',
                '2x quark:red_rune',
                '2x bloodmagic:melee_anointment_l',
                '1x astralsorcery:glass_lens',

                { type: 'masterfulmachinery:energy', perTick: true, data: { amount: 50000 } },
                { type: 'masterfulmachinery:astral_starlight', perTick: true, data: { amount: 50 } }
            ],
            ticks: 100,
            id: `${id_prefix}colored_lens_damage`
        },
        {
            outputs: [
                {
                    type: 'masterfulmachinery:items',
                    chance: 1.0,
                    data: '3x astralsorcery:colored_lens_regeneration'
                },
                {
                    type: 'masterfulmachinery:items',
                    chance: 0.1,
                    data: '1x astralsorcery:colored_lens_regeneration'
                }
            ],
            inputs: [
                '4x #forge:dusts/starmetal',
                '4x astralsorcery:resonating_gem',
                '2x quark:pink_rune',
                '2x bloodmagic:holy_water_anointment_l',
                '1x astralsorcery:glass_lens',

                { type: 'masterfulmachinery:energy', perTick: true, data: { amount: 50000 } },
                { type: 'masterfulmachinery:astral_starlight', perTick: true, data: { amount: 50 } }
            ],
            ticks: 100,
            id: `${id_prefix}colored_lens_regeneration`
        },
        {
            outputs: [
                {
                    type: 'masterfulmachinery:items',
                    chance: 1.0,
                    data: '3x astralsorcery:colored_lens_push'
                },
                {
                    type: 'masterfulmachinery:items',
                    chance: 0.1,
                    data: '1x astralsorcery:colored_lens_push'
                }
            ],
            inputs: [
                '4x #forge:dusts/starmetal',
                '4x astralsorcery:resonating_gem',
                '2x quark:light_blue_rune',
                '2x bloodmagic:bow_velocity_anointment_l',
                '1x astralsorcery:glass_lens',

                { type: 'masterfulmachinery:energy', perTick: true, data: { amount: 50000 } },
                { type: 'masterfulmachinery:astral_starlight', perTick: true, data: { amount: 50 } }
            ],
            ticks: 100,
            id: `${id_prefix}colored_lens_push`
        },
        {
            outputs: [
                {
                    type: 'masterfulmachinery:items',
                    chance: 1.0,
                    data: '3x astralsorcery:colored_lens_spectral'
                },
                {
                    type: 'masterfulmachinery:items',
                    chance: 0.1,
                    data: '1x astralsorcery:colored_lens_spectral'
                }
            ],
            inputs: [
                '4x atum:ectoplasm',
                '4x astralsorcery:resonating_gem',
                '2x quark:purple_rune',
                '2x bloodmagic:silk_touch_anointment_l',
                '1x astralsorcery:glass_lens',

                { type: 'masterfulmachinery:energy', perTick: true, data: { amount: 50000 } },
                { type: 'masterfulmachinery:astral_starlight', perTick: true, data: { amount: 50 } }
            ],
            ticks: 100,
            id: `${id_prefix}colored_lens_spectral`
        },
        {
            outputs: [
                {
                    type: 'masterfulmachinery:items',
                    chance: 1.0,
                    data: '1x astralsorcery:altar_radiance'
                }
            ],
            inputs: [
                '4x create:shadow_steel_casing',
                '4x redstone_arsenal:flux_gem',
                '4x astralsorcery:resonating_gem',
                '2x astralsorcery:colored_lens_spectral',
                '2x bloodmagic:etherealslate',
                '1x #botania:runes/asgard',
                '1x #botania:runes/niflheim',
                '1x #botania:runes/alfheim',
                '1x #botania:runes/midgard',
                '1x #astralsorcery:crystals/attuned',

                { type: 'masterfulmachinery:energy', perTick: true, data: { amount: 500000 } },
                { type: 'masterfulmachinery:astral_starlight', perTick: true, data: { amount: 50 } }
            ],
            ticks: 400,
            id: `${id_prefix}altar_radiance`
        },
        {
            outputs: [
                {
                    type: 'masterfulmachinery:items',
                    chance: 1.0,
                    data: '1x botania:gaia_spreader'
                }
            ],
            inputs: [
                '6x botania:bifrost_perm',
                '4x botania:life_essence',
                '2x #botania:runes/midgard',
                '1x astralsorcery:colored_lens_spectral',
                '1x botania:elven_spreader',
                '1x naturesaura:ancient_sapling',
                '1x mythicbotany:dream_cherry',
                '1x #forge:gems/dragonstone',

                { type: 'masterfulmachinery:energy', perTick: true, data: { amount: 500000 } },
                { type: 'masterfulmachinery:astral_starlight', perTick: true, data: { amount: 50 } }
            ],
            ticks: 400,
            id: `${id_prefix}gaia_spreader`
        },
        {
            outputs: [
                {
                    type: 'masterfulmachinery:items',
                    chance: 1.0,
                    data: '1x botania:elven_spreader'
                }
            ],
            inputs: [
                '1x #forge:ingots/elementium',
                '8x botania:dreamwood',
                '2x botania:glimmering_dreamwood',
                '1x botania:spark',
                '2x #botania:runes/summer',
                '2x #botania:runes/air',
                '1x astralsorcery:colored_lens_push',

                { type: 'masterfulmachinery:energy', perTick: true, data: { amount: 500000 } },
                { type: 'masterfulmachinery:astral_starlight', perTick: true, data: { amount: 50 } }
            ],
            ticks: 400,
            id: `${id_prefix}elven_spreader`
        },
        {
            outputs: [
                {
                    type: 'masterfulmachinery:items',
                    chance: 1.0,
                    data: '1x astralsorcery:shifting_star'
                }
            ],
            inputs: [
                '4x #forge:gems/niotic',
                '2x bloodmagic:reagentbinding',
                '2x #forge:dusts/starmetal',
                '4x astralsorcery:illumination_powder',
                '1x industrialforegoing:ether_gas_bucket',

                { type: 'masterfulmachinery:energy', perTick: true, data: { amount: 500000 } },
                { type: 'masterfulmachinery:astral_starlight', perTick: true, data: { amount: 50 } }
            ],
            ticks: 400,
            id: `${id_prefix}shifting_star`
        },
        {
            outputs: [
                {
                    type: 'masterfulmachinery:items',
                    chance: 1.0,
                    data: '1x astralsorcery:chalice'
                }
            ],
            inputs: [
                '4x #forge:ingots/gold',
                '4x astralsorcery:resonating_gem',
                '2x #forge:ingots/starmetal',
                '3x astralsorcery:black_marble_raw',
                '5x #forge:gems/aquamarine',

                { type: 'masterfulmachinery:energy', perTick: true, data: { amount: 500000 } },
                { type: 'masterfulmachinery:astral_starlight', perTick: true, data: { amount: 50 } }
            ],
            ticks: 400,
            id: `${id_prefix}chalice`
        },
        {
            outputs: [
                {
                    type: 'masterfulmachinery:items',
                    chance: 1.0,
                    data: '1x astralsorcery:shifting_star_vicio'
                }
            ],
            inputs: [
                '1x astralsorcery:shifting_star',
                '2x #forge:ingots/starmetal',
                '6x #forge:dusts/starmetal',
                '2x astralsorcery:illumination_powder',
                '2x bloodmagic:defaultcrystal',
                '2x bloodmagic:reagentair',

                { type: 'masterfulmachinery:energy', perTick: true, data: { amount: 500000 } },
                { type: 'masterfulmachinery:astral_starlight', perTick: true, data: { amount: 50 } }
            ],
            ticks: 400,
            id: `${id_prefix}shifting_star_vicio`
        },
        {
            outputs: [
                {
                    type: 'masterfulmachinery:items',
                    chance: 1.0,
                    data: '1x astralsorcery:shifting_star_evorsio'
                }
            ],
            inputs: [
                '1x astralsorcery:shifting_star',
                '2x #forge:ingots/starmetal',
                '6x #forge:dusts/starmetal',
                '2x astralsorcery:illumination_powder',
                '2x bloodmagic:destructivecrystal',
                '2x bloodmagic:reagentfastminer',

                { type: 'masterfulmachinery:energy', perTick: true, data: { amount: 500000 } },
                { type: 'masterfulmachinery:astral_starlight', perTick: true, data: { amount: 50 } }
            ],
            ticks: 400,
            id: `${id_prefix}shifting_star_evorsio`
        },
        {
            outputs: [
                {
                    type: 'masterfulmachinery:items',
                    chance: 1.0,
                    data: '1x astralsorcery:shifting_star_discidia'
                }
            ],
            inputs: [
                '1x astralsorcery:shifting_star',
                '2x #forge:ingots/starmetal',
                '6x #forge:dusts/starmetal',
                '2x astralsorcery:illumination_powder',
                '2x bloodmagic:vengefulcrystal',
                '2x bloodmagic:reagentlava',

                { type: 'masterfulmachinery:energy', perTick: true, data: { amount: 500000 } },
                { type: 'masterfulmachinery:astral_starlight', perTick: true, data: { amount: 50 } }
            ],
            ticks: 400,
            id: `${id_prefix}shifting_star_discidia`
        },
        {
            outputs: [
                {
                    type: 'masterfulmachinery:items',
                    chance: 1.0,
                    data: '1x astralsorcery:shifting_star_armara'
                }
            ],
            inputs: [
                '1x astralsorcery:shifting_star',
                '2x #forge:ingots/starmetal',
                '6x #forge:dusts/starmetal',
                '2x astralsorcery:illumination_powder',
                '2x bloodmagic:steadfastcrystal',
                '2x bloodmagic:reagentbinding',

                { type: 'masterfulmachinery:energy', perTick: true, data: { amount: 500000 } },
                { type: 'masterfulmachinery:astral_starlight', perTick: true, data: { amount: 50 } }
            ],
            ticks: 400,
            id: `${id_prefix}shifting_star_armara`
        },
        {
            outputs: [
                {
                    type: 'masterfulmachinery:items',
                    chance: 1.0,
                    data: '1x astralsorcery:shifting_star_aevitas'
                }
            ],
            inputs: [
                '1x astralsorcery:shifting_star',
                '2x #forge:ingots/starmetal',
                '6x #forge:dusts/starmetal',
                '2x astralsorcery:illumination_powder',
                '2x bloodmagic:corrosivecrystal',
                '2x bloodmagic:reagentgrowth',

                { type: 'masterfulmachinery:energy', perTick: true, data: { amount: 500000 } },
                { type: 'masterfulmachinery:astral_starlight', perTick: true, data: { amount: 50 } }
            ],
            ticks: 400,
            id: `${id_prefix}shifting_star_aevitas`
        },
        {
            outputs: [
                {
                    type: 'masterfulmachinery:items',
                    chance: 1.0,
                    data: '1x astralsorcery:mantle'
                }
            ],
            inputs: [
                '1x botania:balance_cloak',
                '1x astralsorcery:celestial_crystal',
                '1x magicfeather:magicfeather',

                '4x #forge:dusts/starmetal',
                '4x astralsorcery:illumination_powder',
                '4x astralsorcery:resonating_gem',
                '1x #botania:runes/mana',
                '1x #botania:runes/pride',
                '1x #botania:runes/envy',
                '1x #forge:storage_blocks/starmetal',

                { type: 'masterfulmachinery:energy', perTick: true, data: { amount: 500000 } },
                { type: 'masterfulmachinery:astral_starlight', perTick: true, data: { amount: 50 } }
            ],
            ticks: 400,
            id: `${id_prefix}mantle`
        },
        {
            outputs: [
                {
                    type: 'masterfulmachinery:items',
                    chance: 1.0,
                    data: '2x mekanism:solar_neutron_activator'
                }
            ],
            inputs: [
                '5x kubejs:observatory_lens',
                '5x powah:solar_panel_niotic',
                '5x mekanism:hdpe_sheet',
                '1x #industrialforegoing:machine_frame/advanced',
                '2x #forge:circuits/elite',
                '2x #forge:plates/enderium',
                '2x #forge:dusts/iesnium',
                '2x #forge:dusts/starmetal',
                '2x #forge:dusts/end_stone',

                { type: 'masterfulmachinery:energy', perTick: true, data: { amount: 500000 } },
                { type: 'masterfulmachinery:astral_starlight', perTick: true, data: { amount: 50 } }
            ],
            ticks: 400,
            id: `${id_prefix}solar_neutron_activator`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.inputs.forEach((val, i) => {
            if (val instanceof string) {
                // '32x kubejs:rough_machine_frame'
                recipe.inputs[i] = {
                    type: 'masterfulmachinery:items',
                    data: toJsonWithCount(val)
                };
            } else if (val.type == 'masterfulmachinery:items') {
                /*
                {
                    type: 'masterfulmachinery:items',
                    chance: 1.0,
                    data: '2x mekanism:solar_neutron_activator'
                }
                 */
                recipe.inputs[i].data = toJsonWithCount(val.data);
            }
        });
        recipe.outputs.forEach((val, i) => {
            if (val instanceof string) {
                recipe.outputs[i] = {
                    type: 'masterfulmachinery:items',
                    data: toJsonWithCount(val)
                };
            } else if (val.type == 'masterfulmachinery:items') {
                recipe.outputs[i].data = toJsonWithCount(val.data);
            }
        });
        recipe.type = 'masterfulmachinery:machine_process';
        recipe.structureId = 'auto_iridescent_altar_structure';
        recipe.controllerId = 'auto_iridescent_altar';
        event.custom(recipe).id(recipe.id);
    });
});
