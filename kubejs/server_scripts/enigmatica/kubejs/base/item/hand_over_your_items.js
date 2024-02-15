'use strict';
/**
 * @file Give items when player Shift+Right-click another player
 *
 * @author Krutoy242, ported by ZZZank
 * @link https://github.com/Krutoy242
 * @link https://github.com/ZZZank
 */

onEvent('item.entity_interact', (event) => {
    const player = event.player;
    if (
        !player ||
        // fake player not allowed
        player.fake ||
        // player must be sneaking
        !player.crouching ||
        // player must be holding something
        player.mainHandItem.empty
    ) {
        return;
    }
    //@ts-ignore
    const /** @type {Internal.PlayerJS} */ target = event.target;
    // const target = player;

    if (!target || !target.player) {
        return; // player must be targeting another player
    }

    // cancel original right-click operations
    event.cancel();

    const itemMessage = rawItemStr(player.mainHandItem, 'white');
    tellraw(
        target,
        '{"translate":"chat.hand_over_your_items.send","color":"blue",' +
            `"with":[${itemMessage},{"text":"${player.name}","color":"dark_blue"}]}`
    );
    tellraw(
        player,
        '{"translate":"chat.hand_over_your_items.receive","color":"dark_green",' +
            `"with":[${itemMessage},{"text":"${target.name}","color":"green"}]}`
    );
    target.giveInHand(player.mainHandItem);
    player.mainHandItem.count = 0;
});
