'use strict';
onEvent('player.tick', (/** @type {Internal.PlayerEventJS} */ event) => {
    const player = event.player;
    if (!player.player || player.fake) {
        return;
    }
    // Hot Ingot Cooling
    const hotIngot = 'kubejs:hot_compressed_iron_ingot';
    if (player.inWater) {
        let hotIngotCount = player.inventory.count(hotIngot);
        if (hotIngotCount > 0) {
            player.inventory.clear(Item.of(hotIngot));
            player.give(Item.of('pneumaticcraft:ingot_iron_compressed', hotIngotCount));
            player.sendInventoryUpdate();
        }
    }
});
