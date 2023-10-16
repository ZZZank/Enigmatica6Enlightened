onEvent('item.right_click', (e) => {
    const player = e.player;
    if (player.mainHandItem.id != 'kubejs:soggy_treasure_box') {
        return;
    }

    player.mainHandItem.count--;

    let lootTable = 'enigmatica:chests/soggy_treasure_box';
    let playerCoords = `${player.x} ${player.y + 1} ${player.z}`;

    // universial solutions for both fake and real player
    e.server.runCommandSilent(
        `/execute positioned ${playerCoords} run loot spawn ${playerCoords} loot ${lootTable}`
    );
});
