'use strict';
/**
 * @file Give items when player Shift+Right-click another player
 *
 * @author Krutoy242, ported by ZZZank
 * @link https://github.com/Krutoy242
 * @link https://github.com/ZZZank
 */

onEvent('item.right_click', (event) => {
    const player = event.player;
    if (
        // fake player not allowed
        player.fake ||
        // player must be sneaking
        !player.crouching
    ) {
        return;
    }
    const item = player.mainHandItem;
    const target = player.rayTrace(5).entity;
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

    tellr(player, {
        translate: 'chat.hand_over_your_items.send',
        with: [rawTextItem(item, 'white'), target.name.green()],
        color: 'dark_green'
    });
    tellr(target, {
        translate: 'chat.hand_over_your_items.receive',
        with: [rawTextItem(item, 'white'), player.name.green()],
        color: 'dark_green'
    });
    target.giveInHand(item);
    player.setHeldItem(InteractionHand.MAIN_HAND, null);
});
