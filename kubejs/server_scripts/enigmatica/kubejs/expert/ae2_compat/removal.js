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
        'appliedenergistics2:decorative/fluix_block_pure',
        'appliedenergistics2:decorative/certus_quartz_block_pure'
    ];
    recipeIDs.forEach((recipesID) => {
        event.remove({ id: recipesID });
    });

    //Remove recipes by their output
    const recipeOutputs = [
        //blank for now
    ];
    recipeOutputs.forEach((recipeOutput) => {
        event.remove({ output: recipeOutput });
    });
});
