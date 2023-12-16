'use strict';
onEvent('player.logged_in', (event) => {
    const player = event.player;
    const startingItemsGameStage = 'starting_items';

    setMode(player);

    if (!player.stages.has(startingItemsGameStage)) {
        player.give('ftbquests:book');
        player.give(
            getRandomInList(['waystones:waystone', 'waystones:mossy_waystone', 'waystones:sandy_waystone'])
        );

        player.stages.add(startingItemsGameStage);
    }
});
