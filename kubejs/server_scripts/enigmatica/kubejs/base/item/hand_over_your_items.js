'use strict';
/**
 * @file Give items when player Shift+Right-click another player
 *
 * @author Krutoy242, ported by ZZZank
 * @link https://github.com/Krutoy242
 * @link https://github.com/ZZZank
 */

onEvent('item.right_click', (event) => {
    const /** @type {Internal.PlayerJS} */ player = event.player;
    if (
        !player ||
        // fake player not allowed
        player.fake ||
        // player must be sneaking
        !player.crouching
    ) {
        return;
    }
    const item = player.mainHandItem;
    const target = player.rayTrace(4).entity;
    if (
        // player must be holding something
        item.empty ||
        // player must be targeting another player
        !target ||
        !target.player
    ) {
        return;
    }

    // cancel original right-click operations
    event.cancel();

    let itemMessage = rawItemStr(item, 'white');
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
    target.giveInHand(item);
    player.setHeldItem(MAIN_HAND, null);
});
