
onEvent('recipes', (event) => {
    if (!Platform.getMods().containsKey("appliedenergistics2")) {
        return;
    }
    if (global.isExpertMode == false) {
        return;
    }
    itemsAE.forEach((entry) => {
        event.remove({ output: entry });
        event.remove({ input: entry });
    });

});
