'use strict';
onEvent('item.right_click', (e) => {
    const /** @type {Internal.PlayerJS} */ player = e.player;
    if (player.fake || player.offHandItem.id != 'minecraft:stick' || !player.creativeMode) {
        return;
    }

    let str = Ingredient.of(player.mainHandItem).toJson().toString();
    player.tell(str);
});
