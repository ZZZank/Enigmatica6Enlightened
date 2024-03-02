'use strict';

onEvent('item.right_click', (e) => {
    const player = e.player;
    if (player.fake || player.offHandItem.id != 'minecraft:stick' || !player.creativeMode) {
        return;
    }

    let a = [
    ]

    a.forEach(s => {
        player.give(s)
    });

    // player.tell(a);
});
