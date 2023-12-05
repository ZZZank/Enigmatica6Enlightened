'use strict';

onEvent('jei.remove.categories', (event) => {
    // console.log('JEI RECIPE CATEGORIES: ' + event.getCategoryIds());

    let categories = [
        'masterfulmachinery:machine_structure_recipe_hint_right_click_block'
    ]
    for (let category of categories) {
        event.remove(category);
    }
});
