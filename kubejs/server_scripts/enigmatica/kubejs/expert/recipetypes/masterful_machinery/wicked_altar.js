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
            outputs: ['2x kubejs:wicked_weave'],
            inputs: [
                '2x atum:linen_cloth',
                '1x ars_nouveau:mana_berry',
                '1x ars_nouveau:mana_bloom',
                {
                    type: 'masterfulmachinery:fluids',
                    data: { fluid: 'bloodmagic:life_essence_fluid', amount: 500 }
                }
            ],
            ticks: 100,
            id: `${id_prefix}wicked_weave`
        },
        {
            outputs: ['1x bloodmagic:sacrificialdagger'],
            inputs: [
                '1x undergarden:utheric_sword',
                '2x appliedenergistics2:charged_certus_quartz_crystal',
                '2x minecraft:fermented_spider_eye',
                '1x minecraft:ghast_tear',
                '1x redstone_arsenal:flux_gem',
                {
                    type: 'masterfulmachinery:fluids',
                    data: { fluid: 'bloodmagic:life_essence_fluid', amount: 1000 }
                }
            ],
            ticks: 100,
            id: 'bloodmagic:sacrificial_dagger'
        },
        {
            outputs: ['4x redstone_arsenal:flux_gem'],
            inputs: [
                '4x occultism:spirit_attuned_gem',
                '8x redstone_arsenal:flux_dust',
                '1x atum:nepthys_godshard',
                {
                    type: 'masterfulmachinery:fluids',
                    data: { fluid: 'bloodmagic:life_essence_fluid', amount: 4000 }
                }
            ],
            ticks: 400,
            id: `${id_prefix}flux_gem`
        },
        {
            outputs: ['1x alexsmobs:dimensional_carver'],
            inputs: [
                '1x redstone_arsenal:flux_gem',
                '3x tconstruct:hepatizon_ingot',
                '2x #forge:ingots/netherite',
                '2x alexsmobs:void_worm_mandible',
                '1x alexsmobs:void_worm_eye',
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
            outputs: ['1x botania:blood_pendant'],
            inputs: [
                '1x ars_nouveau:dull_trinket',
                '4x alexsmobs:emu_feather',
                '2x #forge:inlays/pewter',
                '2x appliedenergistics2:charged_certus_quartz_crystal',
                '1x ars_nouveau:potion_flask_amplify',
                {
                    type: 'masterfulmachinery:fluids',
                    data: { fluid: 'bloodmagic:life_essence_fluid', amount: 10000 }
                }
            ],
            ticks: 1000,
            id: `${id_prefix}void_amulet`
        },
        {
            outputs: ['1x bloodmagic:componentframeparts'],
            inputs: [
                '1x #forge:gears/osmium',
                '1x tconstruct:ender_slime_crystal',
                '4x #forge:nuggets/utherium',
                {
                    type: 'masterfulmachinery:fluids',
                    data: { fluid: 'bloodmagic:life_essence_fluid', amount: 1000 }
                }
            ],
            ticks: 100,
            id: `${id_prefix}componentframeparts`
        },
        {
            outputs: ['1x bloodmagic:itemrouterfilterexact'],
            inputs: [
                '1x bloodmagic:componentframeparts',
                '1x atum:red_stained_crystal_glass_pane',
                '1x #forge:nuggets/signalum',
                {
                    type: 'masterfulmachinery:fluids',
                    data: { fluid: 'bloodmagic:life_essence_fluid', amount: 1000 }
                }
            ],
            ticks: 100,
            id: `${id_prefix}itemrouterfilterexact`
        },
        {
            outputs: ['1x bloodmagic:itemrouterfilteroredict'],
            inputs: [
                '1x bloodmagic:componentframeparts',
                '1x atum:lime_stained_crystal_glass_pane',
                '1x #forge:chunks',
                {
                    type: 'masterfulmachinery:fluids',
                    data: { fluid: 'bloodmagic:life_essence_fluid', amount: 1000 }
                }
            ],
            ticks: 100,
            id: `${id_prefix}itemrouterfilteroredict`
        },
        {
            outputs: ['1x bloodmagic:itemrouterfilterenchant'],
            inputs: [
                '1x bloodmagic:componentframeparts',
                '1x atum:green_stained_crystal_glass_pane',
                '1x minecraft:enchanted_book',
                {
                    type: 'masterfulmachinery:fluids',
                    data: { fluid: 'bloodmagic:life_essence_fluid', amount: 1000 }
                }
            ],
            ticks: 100,
            id: `${id_prefix}itemrouterfilterenchant`
        },
        {
            outputs: ['1x bloodmagic:itemrouterfiltermoditems'],
            inputs: [
                '1x bloodmagic:componentframeparts',
                '1x atum:yellow_stained_crystal_glass_pane',
                '1x naturesaura:crimson_meal',
                {
                    type: 'masterfulmachinery:fluids',
                    data: { fluid: 'bloodmagic:life_essence_fluid', amount: 1000 }
                }
            ],
            ticks: 100,
            id: `${id_prefix}itemrouterfiltermoditems`
        },
        {
            outputs: ['1x bloodmagic:itemrouterfiltercomposite'],
            inputs: [
                '1x bloodmagic:componentframeparts',
                '1x atum:white_stained_crystal_glass_pane',
                '1x #forge:nuggets/silicon_bronze',
                {
                    type: 'masterfulmachinery:fluids',
                    data: { fluid: 'bloodmagic:life_essence_fluid', amount: 1000 }
                }
            ],
            ticks: 100,
            id: `${id_prefix}itemrouterfiltercomposite`
        },
        {
            outputs: ['1x bloodmagic:noderouter'],
            inputs: [
                '1x upgrade_aquatic:elder_eye',
                '2x occultism:spirit_attuned_gem',
                '2x #forge:rods/prismarine',
                '1x resourcefulbees:tainted_honeycomb',
                {
                    type: 'masterfulmachinery:fluids',
                    data: { fluid: 'bloodmagic:life_essence_fluid', amount: 50000 }
                }
            ],
            ticks: 1000,
            id: `${id_prefix}noderouter`
        },
        {
            outputs: ['2x bloodmagic:itemroutingnode'],
            inputs: [
                '2x botania:corporea_spark',
                '2x occultism:spirit_attuned_gem',
                '1x architects_palette:moonstone',
                {
                    type: 'masterfulmachinery:fluids',
                    data: { fluid: 'bloodmagic:life_essence_fluid', amount: 500 }
                }
            ],
            ticks: 50,
            id: `${id_prefix}itemroutingnode`
        },
        {
            outputs: ['1x bloodmagic:inputroutingnode'],
            inputs: [
                '1x bloodmagic:itemroutingnode',
                '1x #forge:nuggets/lumium',
                '1x #forge:dusts/fluorite',
                {
                    type: 'masterfulmachinery:fluids',
                    data: { fluid: 'bloodmagic:life_essence_fluid', amount: 500 }
                }
            ],
            ticks: 50,
            id: `${id_prefix}inputroutingnode`
        },
        {
            outputs: ['1x bloodmagic:outputroutingnode'],
            inputs: [
                '1x bloodmagic:itemroutingnode',
                '1x #forge:nuggets/signalum',
                '1x #forge:dusts/fluorite',
                {
                    type: 'masterfulmachinery:fluids',
                    data: { fluid: 'bloodmagic:life_essence_fluid', amount: 500 }
                }
            ],
            ticks: 50,
            id: `${id_prefix}outputroutingnode`
        },
        {
            outputs: ['8x redstone_arsenal:flux_dust'],
            inputs: [
                '8x #forge:dusts/ender_pearl',
                {
                    type: 'masterfulmachinery:fluids',
                    data: { fluid: 'bloodmagic:life_essence_fluid', amount: 80 }
                }
            ],
            ticks: 10,
            id: `${id_prefix}flux_dust`
        },
        {
            outputs: ['4x minecraft:golden_apple'],
            inputs: [
                '4x minecraft:apple',
                '1x #forge:dusts/gold',
                {
                    type: 'masterfulmachinery:fluids',
                    data: { fluid: 'bloodmagic:life_essence_fluid', amount: 150 }
                }
            ],
            ticks: 10,
            id: `${id_prefix}golden_apple`
        },
        {
            outputs: ['4x minecraft:golden_carrot'],
            inputs: [
                '4x minecraft:carrot',
                '1x #forge:dusts/gold',
                {
                    type: 'masterfulmachinery:fluids',
                    data: { fluid: 'bloodmagic:life_essence_fluid', amount: 150 }
                }
            ],
            ticks: 10,
            id: `${id_prefix}golden_carrot`
        },
        {
            outputs: ['4x minecraft:glistering_melon_slice'],
            inputs: [
                '4x minecraft:melon_slice',
                '1x #forge:dusts/gold',
                {
                    type: 'masterfulmachinery:fluids',
                    data: { fluid: 'bloodmagic:life_essence_fluid', amount: 150 }
                }
            ],
            ticks: 10,
            id: `${id_prefix}glistering_melon_slice`
        },
        {
            outputs: ['1x bloodmagic:mastercore'],
            inputs: [
                '3x botania:corporea_spark',
                '1x #forge:storage_blocks/electrum',
                '6x glassential:glass_ghostly',
                {
                    type: 'masterfulmachinery:fluids',
                    data: { fluid: 'bloodmagic:life_essence_fluid', amount: 2000 }
                }
            ],
            ticks: 50,
            id: `${id_prefix}mastercore`
        },
        {
            outputs: ['2x bloodmagic:syntheticpoint'],
            inputs: [
                '4x undergarden:masticator_scales',
                '1x #atum:godshards/montu',
                '4x #forge:ingots/utherium',
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
        recipe.inputs = recipe.inputs.map((val) => {
            if (typeof val == 'string') {
                // '32x kubejs:rough_machine_frame'
                return {
                    type: 'masterfulmachinery:items',
                    data: toJsonWithCount(val)
                };
            } else if (val.type == 'masterfulmachinery:items') {
                /*
                {
                    type: 'masterfulmachinery:items',
                    chance: 1.0,
                    data: '2x mekanism:solar_neutron_activator'
                }
                 */
                val.data = toJsonWithCount(val.data);
            }
            return val;
        });
        recipe.outputs = recipe.outputs.map((val) => {
            if (typeof val == 'string') {
                return {
                    type: 'masterfulmachinery:items',
                    data: toJsonWithCount(val)
                };
            } else if (val.type == 'masterfulmachinery:items') {
                val.data = toJsonWithCount(val.data);
            }
            return val;
        });
        recipe.type = 'masterfulmachinery:machine_process';
        recipe.structureId = 'wicked_altar_structure';
        recipe.controllerId = 'wicked_altar';
        event.custom(recipe).id(recipe.id);
    });
});
