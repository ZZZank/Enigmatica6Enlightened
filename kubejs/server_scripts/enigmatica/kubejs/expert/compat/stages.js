'use strict';

onEvent('player.logged_in', (event) => {
    let stages = ['refinedstorage', 'extrastorage', 'rsinfinitybooster'];

    stages.forEach((stage) => {
        if (Platform.isLoaded(stage) && !event.player.stages.has(stage)) {
            event.player.stages.add(stage);
        }else if (!Platform.isLoaded(stage) && event.player.stages.has(stage)) {
            event.player.stages.remove(stage);
        }
    });
});
