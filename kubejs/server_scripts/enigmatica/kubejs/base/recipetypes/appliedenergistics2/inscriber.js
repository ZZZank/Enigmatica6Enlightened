'use strict';

onEvent('recipes', (event) => {
    const id_prefix = 'appliedenergistics2:base/inscriber/';

    /**
     * @param mode 'press': consume all items, 'inscribe': only consume item in the middle
     * @type {{mode:'press'|'inscribe',result:string,
     * ingredients:{top:string,middle:string,bottom:string},id:string}[]}
     */
    const recipes = [
        // {
        //     mode: 'press',
        //     result: 'appliedenergistics2:logic_processor',
        //     ingredients: {
        //         top: 'appliedenergistics2:printed_logic_processor',
        //         middle: '#forge:dusts/iron',
        //         bottom: 'appliedenergistics2:printed_silicon'
        //     },
        //     id: 'appliedenergistics2:inscriber/cool'
        // }
    ];

    recipes.forEach((recipe) => {
        const parsed = {
            type: 'appliedenergistics2:inscriber',
            mode: recipe.mode,
            ingredients: {},
            result: toJsonWithCount(recipe.result)
        };
        for (let key in recipe.ingredients) {
            parsed.ingredients[key] = toJsonWithCount(recipe.ingredients[key]);
        }
        event.custom(parsed).id(recipe.id);
    });
});
