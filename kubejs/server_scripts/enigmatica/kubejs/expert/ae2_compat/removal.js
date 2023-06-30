onEvent('recipes', (event) => {
    if (!isAE2Loaded) {
        return;
    }
    if (global.isExpertMode == false) {
        return;
    }

    itemsToRemoveAE.forEach((entry) => {
        event.remove({ output: entry });
        event.remove({ input: entry });
    });

    const recipeIDs = [
        'appliedenergistics2:network/blocks/controller',
        'appliedenergistics2:network/wireless_access_point'
    ];
    recipeIDs.forEach((recipesID) => {
        event.remove({ id: recipesID });
    });

});
