onEvent('item.right_click', (event) => {
    let id = event.player.mainHandItem.id;
    if (!id.startsWith('kubejs:') || !id.endsWith('_lootbox')) {
        return;
    }

    let rarityMap = {
        99: 'common',
        114: 'rare',
        101: 'epic',
        108: 'legendary'
    };
    let rarity = rarityMap[id.charAt(7)];
    if (!event.player.mainHandItem.nbt) {
        event.server.runCommandSilent(
            `/tell ${event.player.name} There's no proper NBT data, where did you get this?`
        );
        return;
    }
    let mod = event.player.mainHandItem.nbt.mod.toString();
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

    let name = event.player.name;
    event.server.runCommandSilent(`/execute at ${name} run loot give ${name} loot ${lootTable}`);

    // not handling 'gamemode creative' case, due to performance and rarity of such a case
    event.player.mainHandItem.count--;
});
