'use strict';
onEvent('item.right_click', (event) => {
    const player = event.player;
    let id = player.mainHandItem.id;
    if (!id.startsWith('kubejs:') || !id.endsWith('_lootbox')) {
        return;
    }

    let rarityMap = {
        99: 'common', // 99 means 'c'
        114: 'rare', // 114 means 'r'
        101: 'epic',
        108: 'legendary'
    };
    let rarity = rarityMap[id.charAt(7)];
    if (!player.mainHandItem.nbt || !player.mainHandItem.nbt.mod) {
        player.tell(`There's no proper NBT data, where did you get this?`);
        return;
    }
    let mod = player.mainHandItem.nbt.mod.toString();
    let lootTable = `enigmatica:chests/quest_${mod}_loot_${rarity}`;

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
