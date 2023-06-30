onEvent('recipes', (event) => {
    if (!isAE2Loaded) {
        return;
    }
    if (global.isExpertMode == false) {
        return;
    }

    //Disable an item completely. 
    itemsToRemoveAE.forEach((entry) => {
        event.remove({ output: entry });
        event.remove({ input: entry });
    });

    //Remove a recipe by id
    const recipeIDs = [
        'appliedenergistics2:network/blocks/controller',
        'appliedenergistics2:network/wireless_access_point'
    ];
    recipeIDs.forEach((recipesID) => {
        event.remove({ id: recipesID });
    });

    //Remove recipes by their output
    recipeOutputs=[
        'appliedenergistics2:fluix_pearl'
    ]
    recipeOutputs.forEach((recipeOutput) => {
        event.remove({ output: recipeOutput });
    });
});
