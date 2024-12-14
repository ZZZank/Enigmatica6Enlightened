'use strict';

block_conversion: {
    const $ItemStackJS = java('packages/dev/latvian/kubejs/item/$ItemStackJS');
    const id_prefix = 'enlightened6:right_click_block/';
    /** @type {{[x: Special.Block]: {holding:InstanceType<$ItemStackJS>, output: InstanceType<$ItemStackJS>, additional?:(e:$BlockRightClickEventJS_)=>void}[]}} */
    const compiledRecipes = global['block_conversion']['compiled'];

    onEvent('block.right_click', (event) => {
        const { player, item, hand } = event;
        if (!player || player.fake || !player.crouching || item.empty || hand != Hand.MAIN_HAND) {
            return;
        }

        const target = event.block;
        const recipes = compiledRecipes[target.id];
        if (!recipes) {
            return;
        }

        for (let recipe of recipes) {
            if (!recipe.holding.test(item)) {
                continue;
            }
            console.log('got it');
            player.playSound('ping:bloop');
            event.server.runCommandSilent(`particle minecraft:explosion ${target.x} ${target.y} ${target.z}`);

            target.set(air);
            player.mainHandItem.count -= 1;

            let drop = event.world.createEntity('minecraft:item');
            // @ts-ignore
            drop.item = recipe.output;
            drop.setPosition(target);
            drop.setMotionY(0.2);
            drop.spawn();

            if (recipe.additional) {
                recipe.additional(event);
            }

            event.cancel();
            return;
        }
    });

    onEvent('recipes', (event) => {
        const { deploying } = event.recipes.create;
        /**
         * @type {{target:Special.Block,output:$ItemStackJS_,holding:$ItemStackJS_,id:string,
         * additional?:(e:$BlockRightClickEventJS_)=>void}[]}
         */
        const recipes = global['block_conversion']['raw_recipes'];
        recipes.forEach((recipe) => {
            deploying(recipe.output, [recipe.target, recipe.holding]).id(id_prefix + recipe.id + '/deploy');
        });
    });
}
