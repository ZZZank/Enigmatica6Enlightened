'use strict';

onEvent('player.logged_in', (event) => {
    let modids = ['refinedstorage', 'extrastorage', 'rsinfinitybooster'];

    modids.forEach((modid) => {
        let loaded = Platform.isLoaded(modid);
        if (loaded) {
            event.addGameStage(modid);
        } else {
            event.removeGameStage(modid);
        }
    });
});
