// priority: 900
'use strict';

onEvent('recipes', (event) => {
    event
        .custom({
            type: 'thermal:rock_gen',
            adjacent: 'minecraft:water',
            below: 'pneumaticcraft:compressed_iron_block',
            result: {
                item: 'minecraft:cobblestone',
                count: 4
            }
        })
        .id(`enigmatica:base/unification/unify_stoneworks/buffed_cobble`);

    generatableCobblestone.forEach((material) => {
        var type = 'cobble';
        //console.log(`Recipe for Material: ${material}, Type: ${type}`);
        industrialforegoing_stoneworks(event, material, type);
        thermal_stoneworks(event, material);
    });

    generatableStone.forEach((material) => {
        var type = 'stone';
        //console.log(`Recipe for Material: ${material}, Type: ${type}`);
        industrialforegoing_stoneworks(event, material, type);
        thermal_stoneworks(event, material);
    });
});

//stoneworks functions
function industrialforegoing_stoneworks(event, material, type) {
    var waterConsume = 0;
    var lavaConsume = 0;

    if (type == 'stone') {
        waterConsume = 1000;
        lavaConsume = 0;
    }

    fallback_id(
        event.custom({
            output: {
                item: material,
                count: 1
            },
            waterNeed: 1000,
            lavaNeed: 1000,
            waterConsume: waterConsume,
            lavaConsume: lavaConsume,
            type: 'industrialforegoing:stonework_generate'
        }),
        `enigmatica:base/unification/unify_stoneworks/industrialforegoing_stoneworks/`
    );
}

function thermal_stoneworks(event, material) {
    fallback_id(
        event.custom({
            type: 'thermal:rock_gen',
            adjacent: 'minecraft:water',
            below: material,
            result: {
                item: material
            }
        }),
        `enigmatica:base/unification/unify_stoneworks/thermal_stoneworks/`
    );
}
