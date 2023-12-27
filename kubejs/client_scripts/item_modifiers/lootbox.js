'use strict';

onEvent('item.tooltip', (event) => {
    let lootboxes = [
        'kubejs:common_lootbox',
        'kubejs:rare_lootbox',
        'kubejs:epic_lootbox',
        'kubejs:legendary_lootbox'
    ];

    lootboxes.forEach((lootbox) => {
        event.addAdvanced(lootbox, {
            accept: (self, isAdvanced, tooltips) => {
                try {
                    tooltips.add(self.nbt.mod.toString());
                } catch (e) {}
            }
        });
    });
});
