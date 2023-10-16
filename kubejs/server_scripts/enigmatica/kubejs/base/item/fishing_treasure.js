onEvent('item.right_click', (e) => {
    if (e.item.id != 'kubejs:soggy_treasure_box') {
        return;
    }
    if (!e.player.isCreativeMode()) {
        e.player.getMainHandItem().count--;
    }
    let lootTable = 'enigmatica:chests/soggy_treasure_box';

    if (!e.player.isPlayer() || e.player.isFake()) {
        //kludge until a better handler is available to drop the item at the fake player's location.
        let playerCoords = `${e.player.x} ${e.player.y + 1} ${e.player.z}`;
        e.world.server.runCommand(
            `/execute positioned ${playerCoords} run loot spawn ${playerCoords} loot ${lootTable}`
        );
    } else {
        e.server.runCommandSilent(
            `/execute at ${e.player.name} run loot give ${e.player.name} loot ${lootTable}`
        );
    }
});
