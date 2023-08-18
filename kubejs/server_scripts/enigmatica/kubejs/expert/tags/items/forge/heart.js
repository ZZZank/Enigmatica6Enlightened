onEvent('item.tags', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    event.get('forge:heart').add('kubejs:zombie_heart');
    
});
