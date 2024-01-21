'use strict';

onEvent('item.tooltip', (event) => {
    const lootboxes = [
        'kubejs:common_lootbox',
        'kubejs:rare_lootbox',
        'kubejs:epic_lootbox',
        'kubejs:legendary_lootbox'
    ];

    lootboxes.forEach((lootbox) => {
        event.addAdvanced(lootbox, (self, isAdvanced, tooltips) => {
            if (self.hasNBT()) {
                let mod = self.nbt.mod;
                if (mod) {
                    tooltips.add(Text.of(mod).green());
                }
            }
        });
    });
});
