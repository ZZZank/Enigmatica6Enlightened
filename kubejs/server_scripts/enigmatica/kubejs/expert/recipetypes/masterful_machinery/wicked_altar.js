'use strict';
onEvent('recipes', (event) => {
    if (global.isNormalMode) {
        return;
    }
    const id_prefix = 'enigmatica:expert/masterful_machinery/wicked_altar/';
    /**
     * if type is not specified, it will be 'masterfulmachinery:items'
     */
    const recipes = [
        {
            outputs: [{ data: { item: 'kubejs:wicked_weave', count: 2 } }],
            inputs: [
                { data: { item: 'atum:linen_cloth', count: 2 } },
                { data: { item: 'ars_nouveau:mana_berry', count: 1 } },
                { data: { item: 'ars_nouveau:mana_bloom', count: 1 } },
                {
                    type: 'masterfulmachinery:fluids',
                    data: { fluid: 'bloodmagic:life_essence_fluid', amount: 500 }
                }
            ],
            ticks: 100,
            id: `${id_prefix}wicked_weave`
        },
        {
            outputs: [{ data: { item: 'bloodmagic:sacrificialdagger', count: 1 } }],
            inputs: [
                {
                    data: { item: 'undergarden:utheric_sword', count: 1 }
                },
                {
                    data: { item: 'appliedenergistics2:charged_certus_quartz_crystal', count: 2 }
                },
                { data: { item: 'minecraft:fermented_spider_eye', count: 2 } },
                { data: { item: 'minecraft:ghast_tear', count: 1 } },
                { data: { item: 'redstone_arsenal:flux_gem', count: 1 } },
                {
                    type: 'masterfulmachinery:fluids',
                    data: { fluid: 'bloodmagic:life_essence_fluid', amount: 1000 }
                }
            ],
            ticks: 100,
            id: 'bloodmagic:sacrificial_dagger'
        },
        {
            outputs: [{ data: { item: 'redstone_arsenal:flux_gem', count: 4 } }],
            inputs: [
                {
                    data: { item: 'occultism:spirit_attuned_gem', count: 4 }
                },
                { data: { item: 'redstone_arsenal:flux_dust', count: 8 } },
                { data: { item: 'atum:nepthys_godshard', count: 1 } },
                {
                    type: 'masterfulmachinery:fluids',
                    data: { fluid: 'bloodmagic:life_essence_fluid', amount: 4000 }
                }
            ],
            ticks: 400,
            id: `${id_prefix}flux_gem`
        },
        {
            outputs: [{ data: { item: 'alexsmobs:dimensional_carver', count: 1 } }],
            inputs: [
                { data: { item: 'redstone_arsenal:flux_gem', count: 1 } },
                { data: { item: 'tconstruct:hepatizon_ingot', count: 3 } },
                { data: { tag: 'forge:ingots/netherite', count: 2 } },
                {
                    data: { item: 'alexsmobs:void_worm_mandible', count: 2 }
                },
                { data: { item: 'alexsmobs:void_worm_eye', count: 1 } },
                {
                    type: 'masterfulmachinery:fluids',
                    perTick: true,
                    data: { fluid: 'bloodmagic:life_essence_fluid', amount: 5000 }
                }
            ],
            ticks: 500,
            id: 'alexsmobs:dimensional_carver'
        },
        {
            outputs: [{ data: { item: 'botania:blood_pendant', count: 1 } }],
            inputs: [
                { data: { item: 'ars_nouveau:dull_trinket', count: 1 } },
                { data: { item: 'alexsmobs:emu_feather', count: 4 } },
                { data: { tag: 'forge:inlays/pewter', count: 2 } },
                {
                    data: { item: 'appliedenergistics2:charged_certus_quartz_crystal', count: 2 }
                },
                { data: { item: 'ars_nouveau:potion_flask_amplify', count: 1 } },
                {
                    type: 'masterfulmachinery:fluids',
                    data: { fluid: 'bloodmagic:life_essence_fluid', amount: 10000 }
                }
            ],
            ticks: 1000,
            id: `${id_prefix}void_amulet`
        },
        {
            outputs: [
                {
                    data: { item: 'bloodmagic:componentframeparts', count: 1 }
                }
            ],
            inputs: [
                { data: { tag: 'forge:gears/osmium', count: 1 } },
                {
                    data: { item: 'tconstruct:ender_slime_crystal', count: 1 }
                },
                { data: { tag: 'forge:nuggets/utherium', count: 4 } },
                {
                    type: 'masterfulmachinery:fluids',
                    data: { fluid: 'bloodmagic:life_essence_fluid', amount: 1000 }
                }
            ],
            ticks: 100,
            id: `${id_prefix}componentframeparts`
        },
        {
            outputs: [
                {
                    data: { item: 'bloodmagic:itemrouterfilterexact', count: 1 }
                }
            ],
            inputs: [
                {
                    data: { item: 'bloodmagic:componentframeparts', count: 1 }
                },
                {
                    data: { item: 'atum:red_stained_crystal_glass_pane', count: 1 }
                },
                { data: { tag: 'forge:nuggets/signalum', count: 1 } },
                {
                    type: 'masterfulmachinery:fluids',
                    data: { fluid: 'bloodmagic:life_essence_fluid', amount: 1000 }
                }
            ],
            ticks: 100,
            id: `${id_prefix}itemrouterfilterexact`
        },
        {
            outputs: [
                {
                    data: { item: 'bloodmagic:itemrouterfilteroredict', count: 1 }
                }
            ],
            inputs: [
                {
                    data: { item: 'bloodmagic:componentframeparts', count: 1 }
                },
                {
                    data: { item: 'atum:lime_stained_crystal_glass_pane', count: 1 }
                },
                { data: { tag: 'forge:chunks', count: 1 } },
                {
                    type: 'masterfulmachinery:fluids',
                    data: { fluid: 'bloodmagic:life_essence_fluid', amount: 1000 }
                }
            ],
            ticks: 100,
            id: `${id_prefix}itemrouterfilteroredict`
        },
        {
            outputs: [
                {
                    data: { item: 'bloodmagic:itemrouterfilterenchant', count: 1 }
                }
            ],
            inputs: [
                {
                    data: { item: 'bloodmagic:componentframeparts', count: 1 }
                },
                {
                    data: { item: 'atum:green_stained_crystal_glass_pane', count: 1 }
                },
                { data: { item: 'minecraft:enchanted_book', count: 1 } },
                {
                    type: 'masterfulmachinery:fluids',
                    data: { fluid: 'bloodmagic:life_essence_fluid', amount: 1000 }
                }
            ],
            ticks: 100,
            id: `${id_prefix}itemrouterfilterenchant`
        },
        {
            outputs: [
                {
                    data: { item: 'bloodmagic:itemrouterfiltermoditems', count: 1 }
                }
            ],
            inputs: [
                {
                    data: { item: 'bloodmagic:componentframeparts', count: 1 }
                },
                {
                    data: { item: 'atum:yellow_stained_crystal_glass_pane', count: 1 }
                },
                { data: { item: 'naturesaura:crimson_meal', count: 1 } },
                {
                    type: 'masterfulmachinery:fluids',
                    data: { fluid: 'bloodmagic:life_essence_fluid', amount: 1000 }
                }
            ],
            ticks: 100,
            id: `${id_prefix}itemrouterfiltermoditems`
        },
        {
            outputs: [
                {
                    data: { item: 'bloodmagic:itemrouterfiltercomposite', count: 1 }
                }
            ],
            inputs: [
                {
                    data: { item: 'bloodmagic:componentframeparts', count: 1 }
                },
                {
                    data: { item: 'atum:white_stained_crystal_glass_pane', count: 1 }
                },
                { data: { tag: 'forge:nuggets/silicon_bronze', count: 1 } },
                {
                    type: 'masterfulmachinery:fluids',
                    data: { fluid: 'bloodmagic:life_essence_fluid', amount: 1000 }
                }
            ],
            ticks: 100,
            id: `${id_prefix}itemrouterfiltercomposite`
        },
        {
            outputs: [{ data: { item: 'bloodmagic:noderouter', count: 1 } }],
            inputs: [
                { data: { item: 'upgrade_aquatic:elder_eye', count: 1 } },
                {
                    data: { item: 'occultism:spirit_attuned_gem', count: 2 }
                },
                { data: { tag: 'forge:rods/prismarine', count: 2 } },
                {
                    data: { item: 'resourcefulbees:tainted_honeycomb', count: 1 }
                },
                {
                    type: 'masterfulmachinery:fluids',
                    data: { fluid: 'bloodmagic:life_essence_fluid', amount: 50000 }
                }
            ],
            ticks: 1000,
            id: `${id_prefix}noderouter`
        },
        {
            outputs: [{ data: { item: 'bloodmagic:itemroutingnode', count: 2 } }],
            inputs: [
                { data: { item: 'botania:corporea_spark', count: 2 } },
                {
                    data: { item: 'occultism:spirit_attuned_gem', count: 2 }
                },
                {
                    data: { item: 'architects_palette:moonstone', count: 1 }
                },
                {
                    type: 'masterfulmachinery:fluids',
                    data: { fluid: 'bloodmagic:life_essence_fluid', amount: 500 }
                }
            ],
            ticks: 50,
            id: `${id_prefix}itemroutingnode`
        },
        {
            outputs: [{ data: { item: 'bloodmagic:inputroutingnode', count: 1 } }],
            inputs: [
                { data: { item: 'bloodmagic:itemroutingnode', count: 1 } },
                { data: { tag: 'forge:nuggets/lumium', count: 1 } },
                { data: { tag: 'forge:dusts/fluorite', count: 1 } },
                {
                    type: 'masterfulmachinery:fluids',
                    data: { fluid: 'bloodmagic:life_essence_fluid', amount: 500 }
                }
            ],
            ticks: 50,
            id: `${id_prefix}inputroutingnode`
        },
        {
            outputs: [{ data: { item: 'bloodmagic:outputroutingnode', count: 1 } }],
            inputs: [
                { data: { item: 'bloodmagic:itemroutingnode', count: 1 } },
                { data: { tag: 'forge:nuggets/signalum', count: 1 } },
                { data: { tag: 'forge:dusts/fluorite', count: 1 } },
                {
                    type: 'masterfulmachinery:fluids',
                    data: { fluid: 'bloodmagic:life_essence_fluid', amount: 500 }
                }
            ],
            ticks: 50,
            id: `${id_prefix}outputroutingnode`
        },
        {
            outputs: [{ data: { item: 'redstone_arsenal:flux_dust', count: 8 } }],
            inputs: [
                { data: { tag: 'forge:dusts/ender_pearl', count: 8 } },
                {
                    type: 'masterfulmachinery:fluids',
                    data: { fluid: 'bloodmagic:life_essence_fluid', amount: 80 }
                }
            ],
            ticks: 10,
            id: `${id_prefix}flux_dust`
        },
        {
            outputs: [{ data: { item: 'minecraft:golden_apple', count: 4 } }],
            inputs: [
                { data: { item: 'minecraft:apple', count: 4 } },
                { data: { tag: 'forge:dusts/gold', count: 1 } },
                {
                    type: 'masterfulmachinery:fluids',
                    data: { fluid: 'bloodmagic:life_essence_fluid', amount: 150 }
                }
            ],
            ticks: 10,
            id: `${id_prefix}golden_apple`
        },
        {
            outputs: [{ data: { item: 'minecraft:golden_carrot', count: 4 } }],
            inputs: [
                { data: { item: 'minecraft:carrot', count: 4 } },
                { data: { tag: 'forge:dusts/gold', count: 1 } },
                {
                    type: 'masterfulmachinery:fluids',
                    data: { fluid: 'bloodmagic:life_essence_fluid', amount: 150 }
                }
            ],
            ticks: 10,
            id: `${id_prefix}golden_carrot`
        },
        {
            outputs: [
                {
                    data: { item: 'minecraft:glistering_melon_slice', count: 4 }
                }
            ],
            inputs: [
                { data: { item: 'minecraft:melon_slice', count: 4 } },
                { data: { tag: 'forge:dusts/gold', count: 1 } },
                {
                    type: 'masterfulmachinery:fluids',
                    data: { fluid: 'bloodmagic:life_essence_fluid', amount: 150 }
                }
            ],
            ticks: 10,
            id: `${id_prefix}glistering_melon_slice`
        },
        {
            outputs: [{ data: { item: 'bloodmagic:mastercore', count: 1 } }],
            inputs: [
                { data: { item: 'botania:corporea_spark', count: 3 } },
                {
                    data: { tag: 'forge:storage_blocks/electrum', count: 1 }
                },
                { data: { item: 'glassential:glass_ghostly', count: 6 } },
                {
                    type: 'masterfulmachinery:fluids',
                    data: { fluid: 'bloodmagic:life_essence_fluid', amount: 2000 }
                }
            ],
            ticks: 50,
            id: `${id_prefix}mastercore`
        },
        {
            outputs: [{ data: { item: 'bloodmagic:syntheticpoint', count: 2 } }],
            inputs: [
                {
                    data: { item: 'undergarden:masticator_scales', count: 4 }
                },
                { data: { tag: 'atum:godshards/montu', count: 1 } },
                { data: { tag: 'forge:ingots/utherium', count: 4 } },
                {
                    type: 'masterfulmachinery:fluids',
                    data: { fluid: 'bloodmagic:life_essence_fluid', amount: 1000 }
                }
            ],
            ticks: 50,
            id: `${id_prefix}syntheticpoint`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'masterfulmachinery:machine_process';
        recipe.structureId = 'wicked_altar_structure';
        recipe.controllerId = 'wicked_altar';
        recipe.inputs.forEach((input) => {
            if (!input.type) {
                input.type = 'masterfulmachinery:items';
            }
        });
        recipe.outputs.forEach((output) => {
            if (!output.type) {
                output.type = 'masterfulmachinery:items';
            }
        });

        event.custom(recipe).id(recipe.id);
    });
});
