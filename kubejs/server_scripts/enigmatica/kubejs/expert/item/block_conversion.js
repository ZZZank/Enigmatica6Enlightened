'use strict';

const blockRightClickRecipes = [
    {
        target: 'astralsorcery:marble_raw',
        output: 'astralsorcery:marble_runed',
        holding: 'naturesaura:gold_leaf',
        consume: true
    }
];

onEvent('item.right_click', (e) => {
    const /** @type {Internal.PlayerJS} */ player = e.player;
    if (!player || player.fake || !player.mainHandItem) {
        return;
    }

    const mainHandItem = player.mainHandItem.id;
    for (let recipe of blockRightClickRecipes) {
        if (mainHandItem != recipe.holding) {
            continue;
        }
        let target = player.rayTrace(5).block;
        if (!target || target.id != recipe.target) {
            return;
        }
        target.set(recipe.output);
        if (recipe.consume) {
            player.mainHandItem.count--;
        }
        return;
    }
});
