'use strict';

const blockRightClickRecipesBase = [
    {
        target: 'appliedenergistics2:crafting_unit',
        output: 'appliedenergistics2:crafting_accelerator',
        holding: 'appliedenergistics2:engineering_processor',
        consume: true
    },
    {
        target: 'appliedenergistics2:crafting_unit',
        output: 'appliedenergistics2:1k_crafting_storage',
        holding: 'appliedenergistics2:1k_cell_component',
        consume: true
    },
    {
        target: 'appliedenergistics2:crafting_unit',
        output: 'appliedenergistics2:4k_crafting_storage',
        holding: 'appliedenergistics2:4k_cell_component',
        consume: true
    },
    {
        target: 'appliedenergistics2:crafting_unit',
        output: 'appliedenergistics2:16k_crafting_storage',
        holding: 'appliedenergistics2:16k_cell_component',
        consume: true
    },
    {
        target: 'appliedenergistics2:crafting_unit',
        output: 'appliedenergistics2:64k_crafting_storage',
        holding: 'appliedenergistics2:64k_cell_component',
        consume: true
    }
];

onEvent('block.right_click', (e) => {
    const /** @type {Internal.PlayerJS} */ player = e.player;
    if (!player || player.fake || player.mainHandItem.empty) {
        return;
    }

    const mainHandItem = player.mainHandItem.id;
    for (let recipe of blockRightClickRecipesBase) {
        if (mainHandItem != recipe.holding) {
            continue;
        }
        const target = player.rayTrace(5).block;
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
