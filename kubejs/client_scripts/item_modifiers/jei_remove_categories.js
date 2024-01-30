'use strict';

onEvent('jei.remove.categories', (event) => {
    // console.log('JEI RECIPE CATEGORIES: ' + event.getCategoryIds());

    let categories = [
        'occultism:miner'
    ];

    event.remove(categories);
});
