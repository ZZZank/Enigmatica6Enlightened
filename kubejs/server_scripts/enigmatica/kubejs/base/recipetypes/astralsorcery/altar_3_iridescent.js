'use strict';
onEvent('recipes', (event) => {
    /*
    Note, max starlight is theoretical. In practice, assume roughly 95% as the max reasonable level

    Iridescent Altar
    altar_type: 3
    max_starlight: 8000

    */

    const id_prefix = 'enigmatica:base/astralsorcery/altar/';
    const recipes = [
        {
            output: Item.of('kubejs:observatory_lens', 1),
            pattern: ['_DCD_', 'DEBED', 'CBABC', 'DEBED', '_DCD_'],
            key: {
                A: {
                    type: 'astralsorcery:crystal',
                    hasToBeAttuned: true,
                    hasToBeCelestial: true,
                    canBeAttuned: true,
                    canBeCelestialCrystal: true
                },
                B: { item: 'astralsorcery:resonating_gem' },
                C: { tag: 'botania:runes/air' },
                D: { item: 'create:shadow_steel' },
                E: { item: 'astralsorcery:colored_lens_spectral' }
            },
            relay_inputs: [
                { item: 'astralsorcery:illumination_powder' },
                { item: 'astralsorcery:nocturnal_powder' },
                { item: 'astralsorcery:illumination_powder' },
                { item: 'astralsorcery:stardust' },
                { item: 'astralsorcery:illumination_powder' },
                { item: 'astralsorcery:nocturnal_powder' },
                { item: 'astralsorcery:illumination_powder' },
                { item: 'astralsorcery:stardust' }
            ],
            duration: 600,
            starlight: 7500,
            focus_constellation: 'astralsorcery:lucerna',
            effects: [
                'astralsorcery:built_in_effect_constellation_finish',
                'astralsorcery:built_in_effect_trait_relay_highlight',
                'astralsorcery:built_in_effect_discovery_central_beam',
                'astralsorcery:built_in_effect_trait_focus_circle',
                'astralsorcery:altar_default_sparkle',
                'astralsorcery:built_in_effect_constellation_lines',
                'astralsorcery:built_in_effect_attunement_sparkle'
            ],
            id: 'astralsorcery:altar/observatory'
        },
        {
            output: Item.of('masterfulmachinery:auto_iridescent_altar_starlight_port_astral_starlight_input'),
            pattern: ['ABCBA', 'BADAB', 'CDEDC', 'BADAB', 'ABCBA'],
            key: {
                A: { tag: 'forge:dusts/starmetal' },
                B: { tag: 'forge:gems/niotic' },
                C: { item: 'bloodmagic:etherealslate' },
                D: { tag: 'forge:pellets/polonium' },
                E: { item: 'astralsorcery:shifting_star_vicio' }
            },
            relay_inputs: [
                { item: 'bloodmagic:steadfastcrystal' },
                { item: 'bloodmagic:steadfastcrystal' },
                { item: 'bloodmagic:steadfastcrystal' },
                { item: 'bloodmagic:steadfastcrystal' },
                { item: 'bloodmagic:steadfastcrystal' },
                { item: 'bloodmagic:steadfastcrystal' }
            ],
            duration: 600,
            starlight: 4800,
            effects: [
                'astralsorcery:built_in_effect_constellation_finish',
                'astralsorcery:built_in_effect_trait_relay_highlight',
                'astralsorcery:built_in_effect_discovery_central_beam',
                'astralsorcery:built_in_effect_trait_focus_circle',
                'astralsorcery:focus_dust_swirl',
                'astralsorcery:focus_edge',
                'astralsorcery:altar_focus_sparkle',
                'astralsorcery:altar_default_sparkle',
                'astralsorcery:built_in_effect_constellation_lines',
                'astralsorcery:built_in_effect_attunement_sparkle'
            ],
            id: `${id_prefix}auto_iridescent_altar_starlight_port_astral_starlight_input`
        },
        {
            output: Item.of('kubejs:worldshaper_handle'),
            duration: 600,
            starlight: 7000,
            pattern: ['AA___', 'ABA__', '_ACA_', '__ABA', '___AA'],
            key: {
                A: { item: 'botania:dreamwood' },
                B: { item: 'kubejs:laputian_ingot' },
                C: { tag: 'botania:runes/vanaheim' }
            },
            focus_constellation: 'astralsorcery:evorsio',
            relay_inputs: [
                { item: 'astralsorcery:resonating_gem' },
                { item: 'mythicbotany:dream_cherry' },
                { item: 'astralsorcery:resonating_gem' },
                { item: 'mythicbotany:dream_cherry' },
                { item: 'astralsorcery:resonating_gem' },
                { item: 'mythicbotany:dream_cherry' },
                { item: 'astralsorcery:resonating_gem' },
                { item: 'mythicbotany:dream_cherry' },
                { item: 'astralsorcery:resonating_gem' },
                { item: 'mythicbotany:dream_cherry' },
                { item: 'astralsorcery:resonating_gem' },
                { item: 'mythicbotany:dream_cherry' }
            ],
            effects: [
                'astralsorcery:built_in_effect_constellation_finish',
                'astralsorcery:built_in_effect_trait_relay_highlight',
                'astralsorcery:built_in_effect_discovery_central_beam',
                'astralsorcery:built_in_effect_trait_focus_circle',
                'astralsorcery:focus_dust_swirl',
                'astralsorcery:focus_edge',
                'astralsorcery:altar_focus_sparkle',
                'astralsorcery:altar_default_sparkle',
                'astralsorcery:built_in_effect_constellation_lines',
                'astralsorcery:built_in_effect_attunement_sparkle'
            ],
            id: `${id_prefix}worldshaper_handle`
        },
        {
            output: Item.of('kubejs:worldshaper_barrel'),
            duration: 600,
            starlight: 7000,
            pattern: ['_____', 'AAAAA', 'BCDEF', 'AAAAA', '_____'],
            key: {
                A: { item: 'kubejs:laputian_ingot' },
                B: { item: 'botania:lens_gravity' },
                C: { item: 'botania:lens_influence' },
                D: { item: 'botania:lens_warp' },
                E: { item: 'mekanism:laser_tractor_beam' },
                F: { item: 'industrialforegoing:laser_drill' }
            },
            focus_constellation: 'astralsorcery:evorsio',
            relay_inputs: [
                { item: 'bloodmagic:chargingrune' },
                { item: 'bloodmagic:dislocationrune' },
                { item: 'bloodmagic:accelerationrune' },
                { item: 'bloodmagic:chargingrune' },
                { item: 'bloodmagic:dislocationrune' },
                { item: 'bloodmagic:accelerationrune' },
                { item: 'bloodmagic:chargingrune' },
                { item: 'bloodmagic:dislocationrune' },
                { item: 'bloodmagic:accelerationrune' }
            ],
            effects: [
                'astralsorcery:built_in_effect_constellation_finish',
                'astralsorcery:built_in_effect_trait_relay_highlight',
                'astralsorcery:built_in_effect_discovery_central_beam',
                'astralsorcery:built_in_effect_trait_focus_circle',
                'astralsorcery:focus_dust_swirl',
                'astralsorcery:focus_edge',
                'astralsorcery:altar_focus_sparkle',
                'astralsorcery:altar_default_sparkle',
                'astralsorcery:built_in_effect_constellation_lines',
                'astralsorcery:built_in_effect_attunement_sparkle'
            ],
            id: `${id_prefix}worldshaper_barrel`
        },
        {
            output: Item.of('create:handheld_worldshaper'),
            duration: 1200,
            starlight: 7000,
            pattern: ['_____', '_AAB_', '___C_', '_____', '_____'],
            key: {
                A: { item: 'kubejs:worldshaper_barrel' },
                B: { item: 'kubejs:worldshaper_cog' },
                C: { item: 'kubejs:worldshaper_handle' }
            },
            focus_constellation: 'astralsorcery:evorsio',
            relay_inputs: [
                { item: 'kubejs:automation_mastery_token' },
                { item: 'kubejs:botanical_mastery_token' },
                { item: 'kubejs:engineering_mastery_token' },
                { item: 'kubejs:astronomy_mastery_token' },
                { item: 'kubejs:energistics_mastery_token' },
                { item: 'kubejs:alchemy_mastery_token' },
                { item: 'kubejs:dimensional_mastery_token' },
                { item: 'kubejs:ritual_mastery_token' },
                { item: 'kubejs:battle_mastery_token' },
                { item: 'kubejs:aura_mastery_token' },
                { item: 'kubejs:excavation_mastery_token' },
                { item: 'kubejs:culinary_mastery_token' }
            ],
            effects: [
                'astralsorcery:built_in_effect_constellation_finish',
                'astralsorcery:built_in_effect_trait_relay_highlight',
                'astralsorcery:built_in_effect_discovery_central_beam',
                'astralsorcery:built_in_effect_trait_focus_circle',
                'astralsorcery:focus_dust_swirl',
                'astralsorcery:focus_edge',
                'astralsorcery:altar_focus_sparkle',
                'astralsorcery:altar_default_sparkle',
                'astralsorcery:built_in_effect_constellation_lines',
                'astralsorcery:built_in_effect_attunement_sparkle'
            ],
            id: `${id_prefix}handheld_worldshaper`
        }

    ]
    
    recipes.forEach((recipe) => {
        const constructed_recipe = {
            type: 'astralsorcery:altar',
            altar_type: 3,
            duration: recipe.duration,
            starlight: recipe.starlight,
            pattern: recipe.pattern,
            key: recipe.key,
            output: [recipe.output.toResultJson()],
            effects: recipe.effects
        };

        if (recipe.relay_inputs) {
            constructed_recipe.relay_inputs = recipe.relay_inputs;
        }
        if (recipe.focus_constellation) {
            constructed_recipe.focus_constellation = recipe.focus_constellation;
        }
        if (recipe.recipe_class) {
            constructed_recipe.recipe_class = recipe.recipe_class;
        }

        event.custom(constructed_recipe).id(recipe.id);
    });
});
