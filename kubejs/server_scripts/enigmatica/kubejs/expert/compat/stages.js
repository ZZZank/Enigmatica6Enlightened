'use strict';

onEvent('player.logged_in', (event) => {
    let modids = ['refinedstorage', 'extrastorage', 'rsinfinitybooster'];

    modids.forEach((modid) => {
        let loaded = Platform.isLoaded(modid);
        let hasStage = event.hasGameStage(modid);
        if (loaded && !hasStage) {
            event.addGameStage(modid);
        } else if (!loaded && hasStage) {
            event.removeGameStage(modid);
        }
    });
});
