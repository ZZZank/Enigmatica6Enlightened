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
    ].map((recipe) => {
        return {
            holding: Ingredient.of(recipe.holding),
            target: Ingredient.of(recipe.target),
            output: recipe.output,
            id: recipe.id
        };
    });

    onEvent('block.right_click', (e) => {
        const player = e.player;
        if (!player || player.fake || player.mainHandItem.empty || !player.crouching) {
            return;
        }

        const mainHandItem = player.mainHandItem.id;
        for (let recipe of recipes) {
            if (!recipe.holding.test(mainHandItem)) {
                continue;
            }
            const target = e.block;
            if (!recipe.target.test(target.id)) {
                continue;
            }
            e.cancel();
            // e.server.runCommandSilent(`playsound ping:bloop block ` + player.name);
            e.server.runCommandSilent(`particle minecraft:explosion ${target.x} ${target.y} ${target.z}`);
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
                            data: toJsonWithCount(recipe.output)
                        }
                    ],
                    inputs: [
                        {
                            type: 'masterfulmachinery:items',
                            data: toJsonWithCount(recipe.holding)
                        },
                        {
                            type: 'masterfulmachinery:items',
                            data: { item: 'create:brass_hand', count: 1 }
                        },
                        {
                            type: 'masterfulmachinery:items',
                            data: toJsonWithCount(recipe.target)
                        }
                    ],
                    ticks: 1
                })
                .id(recipe.id + '/hint');
        });
    });
}
