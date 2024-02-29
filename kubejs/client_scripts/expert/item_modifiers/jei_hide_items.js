'use strict';

onEvent('jei.hide.items', (event) => {
    if (global.isNormalMode) {
        return;
    }

    const items = [
        //tool
        'appliedenergistics2:sky_compass',
        //crystal
        'appliedenergistics2:fluix_crystal',
        'appliedenergistics2:certus_quartz_crystal',
        'appliedenergistics2:purified_certus_quartz_crystal',
        'appliedenergistics2:purified_nether_quartz_crystal',
        'appliedenergistics2:purified_fluix_crystal',
        //ore
        'appliedenergistics2:quartz_ore',
        'appliedenergistics2:charged_quartz_ore',
        //machine
        'appliedenergistics2:charger',
        'appliedenergistics2:vibration_chamber',
        'appliedenergistics2:quartz_growth_accelerator',
        'appliedenergistics2:crank',
        'appliedenergistics2:grindstone',
        //printed_xxx
        'appliedenergistics2:printed_silicon',
        //press
        'appliedenergistics2:calculation_processor_press',
        'appliedenergistics2:engineering_processor_press',
        'appliedenergistics2:logic_processor_press',
        'appliedenergistics2:silicon_press',

        /darkutils:export_plate/,

        'integrateddynamics:coal_generator',
        /integrateddynamics:energy_battery/,

        /powah:energy_cable_/
    ];

    event.hide(items);
});
