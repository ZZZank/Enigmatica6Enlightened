'use strict';

onEvent('jei.hide.items', (event) => {
    if (global.isNormalMode) {
        return;
    }

    const items = [
        'integrateddynamics:coal_generator',
        /darkutils:export_plate/,
        /integrateddynamics:energy_battery/,
        /powah:energy_cable_/
    ];
    // @ts-ignore
    items.push(disabledItemsAE);

    event.hide(items);
});
