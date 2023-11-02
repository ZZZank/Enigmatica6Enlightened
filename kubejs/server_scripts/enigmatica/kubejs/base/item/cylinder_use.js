'use strict';
function onEvent() {}

onEvent('item.right_click', (event) => {
    const player = event.player;
    if (
        player.fake ||
        !player.crouching ||
        player.offHandItem.empty ||
        player.mainHandItem.id != 'kubejs:cylinder'
    ) {
        return;
    }

});

onEvent('item.left_click', (event) => {
    const player = event.player;
    if (
        player.fake ||
        !player.crouching ||
        !player.offHandItem.empty ||
        player.mainHandItem.id != 'kubejs:cylinder'
    ) {
        return;
    }

});
