'use strict';
onEvent('item.tags', (event) => {
    let items = [
        'immersiveengineering:axe_steel',
        'bloodmagic:soulaxe',
        'atum:montus_strike',
        'atum:shus_exile'
    ];
    let exceptions = [
        'betterendforge:aeternium_axe_head',
        'betterendforge:thallasium_axe_head',
        'betterendforge:terminite_axe_head'
    ];

    let tags = ['forge:tools', 'forge:tools/axe'];

    tags.forEach((tag) => {
        event
            .get(tag)
            .add(items)
            .add(/_axe$/)
            .add(/_paxel/)
            .add(/_aiot/)
            .remove(exceptions);
    });
});
