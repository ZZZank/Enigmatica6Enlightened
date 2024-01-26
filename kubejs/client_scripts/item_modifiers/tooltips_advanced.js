'use strict';

onEvent('item.tooltip', (event) => {
    /**
     * @type {{target:Internal.IngredientJS_,execute:(arg0: Internal.ItemStackJS, arg1: boolean, arg2: Internal.List<any>) => void}[]}
     * @param target Item(s) you want to add/modify tooltip(s) for
     * @param execute What to do for targeted item(s)
     */
    const recipes = [
        {
            target: [
                'kubejs:common_lootbox',
                'kubejs:rare_lootbox',
                'kubejs:epic_lootbox',
                'kubejs:legendary_lootbox'
            ],
            execute: (item, isAdvanced, tooltipList) => {
                if (item.hasNBT()) {
                    // @ts-ignore
                    let mod = item.nbt.mod;
                    if (mod) {
                        tooltipList.add(Text.of(mod).green());
                    }
                }
            }
        }
    ];

    for (let recipe of recipes) {
        event.addAdvanced(recipe.target, recipe.execute);
    }
});
