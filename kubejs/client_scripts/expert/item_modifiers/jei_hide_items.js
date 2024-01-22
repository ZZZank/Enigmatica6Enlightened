'use strict';

onEvent('jei.hide.items', (event) => {
    if (global.isNormalMode) {
        return;
    }
    let items = [
        'integrateddynamics:coal_generator',
        /darkutils:export_plate/,
        /integrateddynamics:energy_battery/,
        /powah:energy_cable_/
    ].concat(disabledItemsAE);

    items.forEach((entry) => {
        event.hide(entry);
    });
});
