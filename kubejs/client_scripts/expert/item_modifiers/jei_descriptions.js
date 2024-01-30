'use strict';

onEvent('jei.information', (event) => {
    if (global.isNormalMode) {
        return;
    }
    const eprefix = 'descriptions.en6e.expert.';
    const id_prefix = `descriptions.enigmatica.expert.`;

    const recipes = [
        {
            items: ['bloodmagic:soulpickaxe'],
            text: ['tooltips.enigmatica.expert.soulpickaxe']
        },
        {
            items: ['atum:nebu_hammer', 'mythicbotany:alfsteel_pick'],
            text: [`${id_prefix}nebu_hammer`]
        },
        {
            items: ['resourcefulbees:t2_apiary', 'resourcefulbees:t3_apiary', 'resourcefulbees:t4_apiary'],
            text: [`${id_prefix}apiary`]
        },
        {
            items: ['industrialforegoing:mob_slaughter_factory'],
            text: [
                'tooltips.enigmatica.expert.disabled',
                'tooltips.enigmatica.expert.liquid_meat',
                'tooltips.enigmatica.expert.pink_slime'
            ]
        },
        {
            items: ['appliedenergistics2:1k_cell_component', 'appliedenergistics2:1k_fluid_cell_component'],
            text: [`${eprefix}small_storage_part`]
        },
        {
            items: [
                'kubejs:medium_machinery_schematics',
                'kubejs:heavy_machinery_schematics',
                'occultism:chalk_red',
                'bloodmagic:masterbloodorb',
                'bloodmagic:soulgemlesser'
            ],
            text: [`${id_prefix}stage_unlock`]
        },
        {
            // Disabled Items
            items: [
                'pneumaticcraft:air_compressor',
                'pneumaticcraft:advanced_air_compressor',
                'industrialforegoing:mob_slaughter_factory',
                'integrateddynamics:energy_battery',
                'integrateddynamics:mechanical_squeezer',
                'integrateddynamics:mechanical_drying_basin',
                'integrateddynamics:squeezer',
                'integrateddynamics:drying_basin',
                'integrateddynamics:coal_generator',
                'mekanism:upgrade_filter',
                'darkutils:rune_damage_player',
                'integrateddynamics:coal_generator',
                /darkutils:export_plate/,
                /integrateddynamics:energy_battery/,
                /powah:energy_cable_/,
                'engineersdecor:factory_placer'
            ],
            text: [`descriptions.en6e.base.disabled_please_report`]
        },
        {
            items: disabledItemsAE,
            text: [`descriptions.en6e.base.disabled_please_report`]
        }
    ];

    recipes.forEach((recipe) => {
        recipe.items.forEach((item) => {
            event.add(
                item,
                recipe.text.map(Text.translate)
            );
        });
    });
});
