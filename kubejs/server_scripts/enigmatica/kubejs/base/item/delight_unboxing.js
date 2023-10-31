'use strict';
onEvent('item.right_click', (event) => {
    const player = event.player;
    let id = player.mainHandItem.id;
    if (player.fake || !id.startsWith('kubejs:') || !id.endsWith('_delight')) {
        return;
    }

    let lootTable = `enigmatica:chests/quest_${id.substr(7)}`; // ('kubejs:'.length) is 7

    /*
    // This piece of code is disabled, baceuse if anyone let a fake player to open such
    // an item, it must be intended. 
    // Also, 'event.player' can provide protections against unintended entity. 
    if (!event.player.isPlayer() || event.player.isFake()) {
        //kludge until a better handler is available to drop the item at the fake player's location.
        let playerCoords = `${event.player.x} ${event.player.y + 1} ${event.player.z}`;
        event.world.server.runCommand(
            `/execute positioned ${playerCoords} run loot spawn ${playerCoords} loot ${lootTable}`
        );
        return;
    }
    */

    event.server.runCommandSilent(
        `/execute at ${player.name} run loot spawn ${player.x} ${player.y + 1} ${player.z} loot ${lootTable}`
    );

    // not handling 'gamemode creative' case, due to performance and rarity of such a case
    player.mainHandItem.count--;
});
