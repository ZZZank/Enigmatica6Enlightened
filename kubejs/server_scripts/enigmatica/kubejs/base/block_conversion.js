'use strict';

block_conversion: {
    const id_prefix = 'enlightened6:right_click_block/';
    /**
     * @type {{target:string,output:Internal.ItemStackJS_,holding:string,
     * additional?:(e:Internal.BlockRightClickEventJS)=>void,id:string}[]}
     */
    const recipes = [
        {
            target: 'redstone_arsenal:flux_gem_block',
            output: '4x bloodmagic:largebloodstonebrick',
            holding: 'bloodmagic:weakbloodshard',
            id: 'largebloodstonebrick'
        },
        {
            target: 'mekanism:teleporter_frame',
            output: 'kubejs:conductive_frame',
            holding: 'immersiveengineering:dust_hop_graphite',
            id: 'conductive_frame'
        },
        {
            target: 'astralsorcery:marble_raw',
            output: 'astralsorcery:marble_runed',
            holding: 'naturesaura:gold_leaf',
            id: `marble_runed`
        },
        {
            target: 'appliedenergistics2:crafting_unit',
            output: 'appliedenergistics2:crafting_accelerator',
            holding: 'appliedenergistics2:engineering_processor',
            id: `crafting_accelerator`
        },
        {
            target: 'appliedenergistics2:crafting_unit',
            output: 'appliedenergistics2:1k_crafting_storage',
            holding: 'appliedenergistics2:1k_cell_component',
            id: `1k_crafting_storage`
        },
        {
            target: 'appliedenergistics2:crafting_unit',
            output: 'appliedenergistics2:4k_crafting_storage',
            holding: 'appliedenergistics2:4k_cell_component',
            id: `4k_crafting_storage`
        },
        {
            target: 'appliedenergistics2:crafting_unit',
            output: 'appliedenergistics2:16k_crafting_storage',
            holding: 'appliedenergistics2:16k_cell_component',
            id: `16k_crafting_storage`
        },
        {
            target: 'appliedenergistics2:crafting_unit',
            output: 'appliedenergistics2:64k_crafting_storage',
            holding: 'appliedenergistics2:64k_cell_component',
            id: `64k_crafting_storage`
        },
        {
            target: 'minecraft:conduit',
            output: Item.of('minecraft:trident', {
                nullptrType: 1,
                Damage: 225,
                display: {
                    Name: '[{ "translate": "item.en6e.null_pointer" }]',
                    Lore: ['[{ "translate": "lore.en6e.null_pointer" }]']
                },
                'quark:RuneAttached': true,
                'quark:RuneColor': { id: 'quark:gray_rune', Count: 1 }
            }).enchant('minecraft:vanishing_curse', 1),
            holding: 'pneumaticcraft:nuke_virus',
            id: 'null_pointer'
        },
        {
            target: 'minecraft:conduit',
            output: Item.of('minecraft:trident', {
                nullptrType: 1,
                Damage: 225,
                display: {
                    Name: '[{ "translate": "item.en6e.null_pointer" }]',
                    Lore: ['[{ "translate": "lore.en6e.null_pointer" }]']
                },
                'quark:RuneAttached': true,
                'quark:RuneColor': { id: 'quark:gray_rune', Count: 1 }
            }).enchant('minecraft:vanishing_curse', 1),
            holding: 'pneumaticcraft:stop_worm',
            id: 'null_pointer_alt'
        }
    ];

    onEvent('block.right_click', (event) => {
        const player = event.player;
        if (!player || player.fake || player.mainHandItem.empty || !player.crouching) {
            return;
        }

        const mainHandItem = player.mainHandItem.id;
        const target = event.block;
        for (let recipe of recipes) {
            if (mainHandItem != recipe.holding || target.id != recipe.target) {
                continue;
            }
            player.playSound('ping:bloop');
            event.server.runCommandSilent(`particle minecraft:explosion ${target.x} ${target.y} ${target.z}`);
            const output = Item.of(recipe.output);
            if (output.count == 1 && output.isBlock()) {
                target.set(output.id, output.nbt);
            } else {
                target.set(air);
                const drop = event.world.createEntity('minecraft:item');
                // @ts-ignore
                drop.item = output;
                drop.setPosition(target);
                drop.setMotionY(0.2);
                drop.spawn();
            }
            player.mainHandItem.count -= 1;
            event.cancel();
            return;
        }
    });

    onEvent('recipes', (event) => {
        recipes.forEach((recipe) => {
            // create deploying
            event.recipes.create
                .deploying(recipe.output, [recipe.target, recipe.holding])
                .id(id_prefix + recipe.id + '/deploy');
            // hint
            const builder = event.recipes.custommachinery
                .custom_machine('enlightened6:in_world_interaction', 1)
                .jei();
            addCMRecipe(builder, {
                inputs: [recipe.target],
                catalyst: recipe.holding,
                outputs: [recipe.output],
                id: id_prefix + recipe.id + '/hint'
            });
        });
    });
}
