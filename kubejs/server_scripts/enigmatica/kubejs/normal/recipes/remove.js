'use strict';
onEvent('recipes', (event) => {
    if (global.isExpertMode) {
        return;
    }

    let outputRemovals = [
        'torchmaster:feral_flare_lantern',
        'torchmaster:megatorch',
        'quark:white_candle',
        'occultism:candle_white'
    ];

    let idRemovals = [];

    outputRemovals.forEach(function (removal) {
        event.remove({ output: removal });
    });

    idRemovals.forEach(function (removal) {
        event.remove({ id: removal });
    });
});
