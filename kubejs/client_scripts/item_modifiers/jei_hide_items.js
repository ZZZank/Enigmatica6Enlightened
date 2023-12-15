'use strict';
onEvent('jei.hide.items', (event) => {
    for (let item of disabledItems) {
        itemsToHide.push(item)
    }

    materialsToUnify.forEach((material) => {
        if (material == 'iesnium' || material == 'graphite' || material == 'hop_graphite') {
            return;
        }
        itemsToHide.push(
            'occultism:' + material + '_ingot',
            'occultism:' + material + '_ore',
            'occultism:' + material + '_dust',
            'occultism:' + material + '_nugget',
            'occultism:' + material + '_block',
            'immersiveengineering:ingot_' + material,
            'immersiveengineering:dust_' + material,
            'immersiveengineering:nugget_' + material,
            'immersiveengineering:stick_' + material,
            'mekanism:nugget_' + material,
            'mekanism:dust_' + material,
            'mekanism:ingot_' + material,
            'mekanism:block_' + material,
            'thermal:' + material + '_block'
        );
    });

    itemsToHide.forEach((disabledItem) => {
        if (!Item.of(disabledItem).empty) {
            event.hide(disabledItem);
        }
    });
});
