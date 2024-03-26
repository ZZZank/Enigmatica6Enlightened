'use strict';
onEvent('entity.loot_tables', (event) => {
    if (global.isNormalMode) {
        return;
    }

    event.modifyEntity('minecraft:zombie', (table) => {
        table.addPool((pool) => {
            pool.addItem('kubejs:zombie_heart').killedByPlayer().randomChanceWithLooting(0.1, 0.05);
        });
    });

    event.modifyEntity('minecraft:drowned', (table) => {
        table.addPool((pool) => {
            pool.addItem('alexsmobs:soul_heart').killedByPlayer().randomChanceWithLooting(0.1, 0.05);
        });
    });
});