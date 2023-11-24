'use strict';
onEvent('player.inventory.changed', function (event) {
    const /** @type {Internal.PlayerJS} */player = event.player;
    if (!player.player || player.fake) {
        return;
    }

    if (!event.item.hasTag('enigmatica:burning_hot')) {
        return;
    }

    if (!player.inWater) {
        player.setStatusMessage([Text.of(`A hot item is burning you!`).red()]);
        player.setOnFire(180);
        global.setOnFire = true;
    }
});
