
onEvent('jei.hide.items', (event) => {
    if (!Platform.getMods().containsKey("appliedenergistics2")) {
        return;
    }
    if (global.isExpertMode == false) {
        return;
    }
    
    itemsToRemoveAE.forEach((entry) => {
        event.hide(entry);
    });

});
