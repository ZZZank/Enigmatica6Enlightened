'use strict';

onEvent('jei.remove.categories', (event) => {
    // console.log('JEI RECIPE CATEGORIES: ' + event.getCategoryIds());

    let categories = [
        'occultism:miner',
        'masterfulmachinery:machine_structure_recipe_hint_general',
        'masterfulmachinery:machine_structure_recipe_hint_right_click_block',
        'masterfulmachinery:machine_structure_killing_entity'
    ];

    categories.forEach((category) => {
        event.remove(category);
    });
});
