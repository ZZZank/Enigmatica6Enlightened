'use strict';
{
    const rarityMap = {
        99: 'common', // 99 means 'c'
        114: 'rare', // 114 means 'r'
        101: 'epic',
        108: 'legendary'
    };
    onEvent('item.right_click', (event) => {
        const player = event.player;
        const id = player.mainHandItem.id;
        if (player.fake || !id.startsWith('kubejs:') || !id.endsWith('_lootbox')) {
            return;
        }
        if (!player.mainHandItem.nbt || !player.mainHandItem.nbt.mod) {
            player.tell(`There's no proper NBT data, where did you get this?`);
            return;
        }

        const rarity = rarityMap[id.charAt(7)];
        const mod = player.mainHandItem.nbt.mod.toString();

        event.server.runCommandSilent(
            `/execute at ${player.name} run loot spawn ${player.x} ${player.y + 1} ${
                player.z
            } loot enigmatica:chests/quest_${mod}_loot_${rarity}`
        );

        // not handling 'gamemode creative' case, due to performance and rarity of such a case
        player.mainHandItem.count--;
    });
}
