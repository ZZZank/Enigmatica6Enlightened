'use strict';
onEvent('item.tags', (event) => {
    var items = [
        'ars_nouveau:apprentice_robes',
        'ars_nouveau:archmage_robes',
        'ars_nouveau:novice_robes',
        'immersiveengineering:armor_faraday_chest',
        'immersiveengineering:armor_steel_chest',
        'mekanism:hazmat_gown',
        'mekanism:jetpack',
        'mekanism:jetpack_armored',
        'mekanism:mekasuit_bodyarmor',
        'naturesaura:infused_iron_chest',
        'naturesaura:sky_chest',
        'astralsorcery:mantle',
        'bloodmagic:livingplate',
        'create:copper_backtank'
    ];

    var exceptions = [
        'pneumaticcraft:jet_boots_upgrade_1',
        'atum:limestone_chest',
        'kubejs:pneumatic_chestplate_package',
        'kubejs:pneumatic_chestplate_assembly'
    ];

    var tags = ['forge:armor', 'forge:armor/chest'];

    tags.forEach((tag) => {
        event
            .get(tag)
            .add(items)
            .add(/_chestplate/)
            .add(/atum:.*_chest/)
            .add(/atum:body/)
            .remove(exceptions);
    });
});
