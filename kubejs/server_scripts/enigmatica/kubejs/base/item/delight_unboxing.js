'use strict';
onEvent('item.right_click', (event) => {
    const player = event.player;

    let [mod, id] = player.mainHandItem.id.split(':', 2);
    if (player.fake || mod != 'kubejs' || !id.endsWith('_delight')) {
        return;
    }

    let lootTable = 'enigmatica:delights/' + id; // ('kubejs:'.length) is 7
    event.server.runCommandSilent(
        `/execute at ${player.name} run loot spawn ${player.x} ${player.y + 1} ${player.z} loot ${lootTable}`
    );

    // not handling 'gamemode creative' case, due to performance and rarity of such a case
    player.mainHandItem.count--;
});
