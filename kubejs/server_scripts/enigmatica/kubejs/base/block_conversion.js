'use strict';
{
    const id_prefix = 'enlightened6:right_click_block/';
    const recipes = [
        {
            target: 'mekanism:teleporter_frame',
            output: 'kubejs:conductive_frame',
            holding: 'redstone_arsenal:obsidian_rod',
            id: id_prefix + 'conductive_frame'
        },
        {
            target: 'astralsorcery:marble_raw',
            output: 'astralsorcery:marble_runed',
            holding: 'naturesaura:gold_leaf',
            id: id_prefix + `marble_runed`
        },
        {
            target: 'appliedenergistics2:crafting_unit',
            output: 'appliedenergistics2:crafting_accelerator',
            holding: 'appliedenergistics2:engineering_processor',
            id: id_prefix + `crafting_accelerator`
        },
        {
            target: 'appliedenergistics2:crafting_unit',
            output: 'appliedenergistics2:1k_crafting_storage',
            holding: 'appliedenergistics2:1k_cell_component',
            id: id_prefix + `1k_crafting_storage`
        },
        {
            target: 'appliedenergistics2:crafting_unit',
            output: 'appliedenergistics2:4k_crafting_storage',
            holding: 'appliedenergistics2:4k_cell_component',
            id: id_prefix + `4k_crafting_storage`
        },
        {
            target: 'appliedenergistics2:crafting_unit',
            output: 'appliedenergistics2:16k_crafting_storage',
            holding: 'appliedenergistics2:16k_cell_component',
            id: id_prefix + `16k_crafting_storage`
        },
        {
            target: 'appliedenergistics2:crafting_unit',
            output: 'appliedenergistics2:64k_crafting_storage',
            holding: 'appliedenergistics2:64k_cell_component',
            id: id_prefix + `64k_crafting_storage`
        }
    ];

    onEvent('block.right_click', (e) => {
        const /** @type {Internal.PlayerJS} */ player = e.player;
        if (!player || player.fake || player.mainHandItem.empty || !player.crouching) {
            return;
        }

        const mainHandItem = player.mainHandItem.id;
        for (let recipe of recipes) {
            if (mainHandItem != recipe.holding) {
                continue;
            }
            const target = player.rayTrace(3).block;
            if (!target || target.id != recipe.target) {
                continue;
            }
            e.cancel();
            target.set(recipe.output);
            player.mainHandItem.count -= 1;
            return;
        }
    });

    onEvent('recipes', (event) => {
        recipes.forEach((recipe) => {
            // create deploying
            event.recipes.create
                .deploying(recipe.output, [recipe.target, recipe.holding])
                .id(recipe.id + '/deploy');
            // hint
            event
                .custom({
                    type: 'masterfulmachinery:machine_process',
                    structureId: 'recipe_hint_right_click_block_structure',
                    controllerId: 'recipe_hint_right_click_block',
                    outputs: [
                        {
                            type: 'masterfulmachinery:items',
                            data: { item: recipe.output, count: 1 }
                        }
                    ],
                    inputs: [
                        {
                            type: 'masterfulmachinery:items',
                            data: { item: recipe.holding, count: 1 }
                        },
                        {
                            type: 'masterfulmachinery:items',
                            data: { item: 'create:brass_hand', count: 1 }
                        },
                        {
                            type: 'masterfulmachinery:items',
                            data: { item: recipe.target, count: 1 }
                        }
                    ],
                    ticks: 1
                })
                .id(recipe.id + '/hint');
        });
    });
}
