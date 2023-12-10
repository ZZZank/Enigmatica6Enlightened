'use strict';
onEvent('recipes', (event) => {
    if (global.isNormalMode) {
        return;
    }

    const id_prefix = 'enigmatica:expert/masterful_machinery/enigmatic_tree_of_life/';
    const recipes = [
        {
            outputs: [
                '2x kubejs:botanical_mastery_shard',
            ],
            inputs: [
                '4x mythicbotany:mana_collector',
                '16x botania:spark',
                '8x botania:spark_upgrade_recessive',
                '4x botania:mana_ring_greater',
                '8x botania:fabulous_pool',
                '1x botania:kekimurus',
                '1x botania:shulk_me_not',
                '1x botania:rosa_arcana',
                '1x botania:dandelifeon',
                {
                    type: 'masterfulmachinery:botania_mana',
                    consumeInstantly: true,
                    data: { amount: 500 * 60 }
                }
            ],
            ticks: 60,
            id: `${id_prefix}botanical_mastery_shard`
        },
        {
            outputs: [
                '1x kubejs:astronomy_mastery_shard',
            ],
            inputs: [
                '1x astralsorcery:observatory',
                '1x #astralsorcery:crystals/attuned',
                '1x astralsorcery:mantle',
                '1x astralsorcery:marble_raw',
                '1x thermal:device_rock_gen',
                '1x create:mechanical_saw',
                '1x #astralsorcery:stars/irradiant',

                {
                    type: 'masterfulmachinery:fluids',
                    perTick: true,
                    data: { fluid: 'astralsorcery:liquid_starlight', amount: 1024 }
                },
                {
                    type: 'masterfulmachinery:botania_mana',
                    consumeInstantly: true,
                    data: { amount: 500 * 60 }
                }
            ],
            ticks: 60,
            id: `${id_prefix}astronomy_mastery_shard`
        },
        {
            outputs: [
                { type: 'masterfulmachinery:items', data: '1x kubejs:alchemy_mastery_shard' }
            ],
            inputs: [
                '1x kubejs:diy_mixer',
                '1x kubejs:diy_bottling_machine',
                '1x kubejs:stim_pack',
                '5x naturesaura:death_ring',
                '5x naturesaura:pet_reviver',

                {
                    type: 'masterfulmachinery:botania_mana',
                    consumeInstantly: true,
                    data: { amount: 500 * 60 }
                }
            ],
            ticks: 60,
            id: `${id_prefix}alchemy_mastery_shard`
        },
        {
            outputs: [
                { type: 'masterfulmachinery:items', data: '5x kubejs:ritual_mastery_shard' }
            ],
            inputs: [
                '1x bloodmagic:altar',
                '4x bloodmagic:largebloodstonebrick',
                '4x minecraft:sea_lantern',
                '4x minecraft:beacon',
                '48x bloodmagic:chargingrune',
                '20x bloodmagic:accelerationrune',
                '8x bloodmagic:dislocationrune',
                '16x bloodmagic:altarcapacityrune',
                '16x bloodmagic:bettercapacityrune',
                '1x bloodmagic:masterritualstone',
                '36x bloodmagic:ritualstone',
                '1x bloodmagic:ritualdivinerdusk',
                '1x bloodmagic:ritualtinkerer',
                '10x kubejs:artisinal_ritual_kit',
                '10x kubejs:artisinal_chalk_set',
                {
                    type: 'masterfulmachinery:fluids',
                    perTick: true,
                    data: { fluid: 'bloodmagic:life_essence_fluid', amount: 1024 }
                },
                {
                    type: 'masterfulmachinery:botania_mana',
                    consumeInstantly: true,
                    data: { amount: 500 * 60 }
                }
            ],
            ticks: 60,
            id: `${id_prefix}ritual_mastery_shard`
        },
        {
            outputs: [
                { type: 'masterfulmachinery:items', data: '1x kubejs:aura_mastery_shard' }
            ],
            inputs: [
                '1x naturesaura:aura_trove',
                '1x naturesaura:firework_generator',
                '1x kubejs:big_box_o_boom',
                '1x naturesaura:generator_limit_remover',
                '1x naturesaura:projectile_generator',
                '1x kubejs:mimirs_memory_box',
                '1x kubejs:altar_of_birthing_kit',
                '8x naturesaura:aura_detector',
                '1x naturesaura:mover_cart',
                '64x minecraft:powered_rail',
                '32x minecraft:rail',
                '8x minecraft:activator_rail',
                {
                    type: 'masterfulmachinery:botania_mana',
                    consumeInstantly: true,
                    data: { amount: 500 * 60 }
                }
            ],
            ticks: 60,
            id: `${id_prefix}aura_mastery_shard`
        },
        {
            outputs: [
                '2x kubejs:engineering_mastery_shard',
            ],
            inputs: [
                '64x pneumaticcraft:advanced_pressure_tube',
                '1x pneumaticcraft:advanced_liquid_compressor',
                '4x create:rotation_speed_controller',
                '4x create:large_cogwheel',
                '64x create:shaft',
                '32x create:encased_chain_drive',

                '1x kubejs:diy_arc_furnace',
                '1x kubejs:imaharas_indelible_electrodes',
                '1x kubejs:diy_pumpjack',
                '1x kubejs:diy_distillation_tower',
                '1x kubejs:diy_pressure_chamber',
                '1x kubejs:diy_furnace_engine_kit',
                {
                    type: 'masterfulmachinery:fluids',
                    perTick: true,
                    data: { fluid: 'pneumaticcraft:lubricant', amount: 1024 }
                },
                {
                    type: 'masterfulmachinery:botania_mana',
                    consumeInstantly: true,
                    data: { amount: 500 * 60 }
                }
            ],
            ticks: 60,
            id: `${id_prefix}engineering_mastery_shard`
        },
        {
            outputs: [
                '50x kubejs:energistics_mastery_shard',
            ],
            inputs: [
                '1x mekanismgenerators:fusion_reactor_controller',
                '36x mekanismgenerators:fusion_reactor_frame',
                '5x mekanismgenerators:fusion_reactor_port',
                '24x mekanismgenerators:reactor_glass',
                '5x mekanismgenerators:electromagnetic_coil',
                '224x mekanism:pressure_disperser',
                '1x mekanismgenerators:rotational_complex',
                '293x mekanismgenerators:saturating_condenser',
                '598x mekanism:structural_glass',
                '417x mekanismgenerators:turbine_casing',
                '10x mekanismgenerators:turbine_rotor',
                '20x mekanismgenerators:turbine_blade',
                '2x mekanismgenerators:turbine_valve',
                '585x mekanismgenerators:turbine_vent',
                '64x mekanism:induction_casing',
                '2x mekanism:induction_port',
                '1x mekanism:ultimate_induction_provider',
                '8x mekanism:ultimate_induction_cell',
                '1x fluxnetworks:flux_controller',
                '50x fluxnetworks:flux_point',
                '2x fluxnetworks:flux_plug',
                {
                    type: 'masterfulmachinery:fluids',
                    perTick: true,
                    data: { fluid: 'mekanismgenerators:tritium', amount: 25600 }
                },
                {
                    type: 'masterfulmachinery:fluids',
                    perTick: true,
                    data: { fluid: 'mekanismgenerators:deuterium', amount: 25600 }
                },
                {
                    type: 'masterfulmachinery:botania_mana',
                    consumeInstantly: true,
                    data: { amount: 500 * 1500 }
                }
            ],
            ticks: 1500,
            id: `${id_prefix}energistics_mastery_shard`
        },
        {
            outputs: [
                '1x kubejs:dimensional_mastery_shard',
            ],
            inputs: [
                '2x aeadditions:item_storage_cell_1024',
                '2x aeadditions:fluid_storage_cell_1024',
                '4x mekanism:quantum_entangloporter',
                '1x aeinfinitybooster:dimension_card',
                '64x appliedenergistics2:quantum_ring',
                '8x appliedenergistics2:quantum_link',
                '2x appliedenergistics2:quantum_entangled_singularity',
                '5x mekanism:teleporter',
                '1x mekanism:portable_teleporter',

                {
                    type: 'masterfulmachinery:botania_mana',
                    consumeInstantly: true,
                    data: { amount: 500 * 60 }
                }
            ],
            ticks: 60,
            id: `${id_prefix}dimensional_mastery_shard`
        },
        {
            outputs: [
                { type: 'masterfulmachinery:items', data: '5x kubejs:battle_mastery_shard' }
            ],
            inputs: [
                '1x kubejs:diy_mekasuit_helmet',
                '1x kubejs:diy_mekasuit_bodyarmor',
                '1x kubejs:diy_mekasuit_pants',
                '1x kubejs:diy_mekasuit_boots',
                '1x kubejs:diy_meka_tool',

                {
                    type: 'masterfulmachinery:botania_mana',
                    consumeInstantly: true,
                    data: { amount: 500 * 60 }
                }
            ],
            ticks: 60,
            id: `${id_prefix}battle_mastery_shard`
        },
        {
            outputs: [
                '2x kubejs:excavation_mastery_shard',
            ],
            inputs: [
                '1x industrialforegoing:fluid_laser_base',
                '1x industrialforegoing:ore_laser_base',
                '8x industrialforegoing:laser_drill',
                '1x occultism:dimensional_mineshaft',
                '1x kubejs:miner_marid_irradiated',
                '1x kubejs:diy_excavator',
                '1x immersiveengineering:survey_tools',
                '1x kubejs:mining_gadget_kit',
                '1x kubejs:flux_bore_kit',
                '1x kubejs:diy_create_quarry',
                {
                    type: 'masterfulmachinery:botania_mana',
                    consumeInstantly: true,
                    data: { amount: 500 * 60 }
                }
            ],
            ticks: 60,
            id: `${id_prefix}excavation_mastery_shard`
        },
        {
            outputs: [
                '1x kubejs:culinary_mastery_shard',
            ],
            inputs: [
                '1x kubejs:engineering_student_meals',
                '1x kubejs:box_of_thankful_dinners',
                {
                    type: 'masterfulmachinery:botania_mana',
                    consumeInstantly: true,
                    data: { amount: 500 * 60 }
                }
            ],
            ticks: 60,
            id: `${id_prefix}culinary_mastery_shard`
        },
        {
            outputs: [
                '1x kubejs:automation_mastery_shard',
            ],
            inputs: [
                '1x appliedenergistics2:controller',
                '32x appliedenergistics2:molecular_assembler',
                '4x appliedenergistics2:interface',
                '1x appliedenergistics2:pattern_terminal',
                '64x appliedenergistics2:blank_pattern',
                '64x appliedenergistics2:fluix_smart_cable',
                '8x create:deployer',
                '8x create:mechanical_arm',
                '8x create:content_observer',
                '8x create:stockpile_switch',
                '1x botania:auto_crafting_halo',
                '2x naturesaura:field_creator',
                '1x naturesaura:placer',
                '4x entangled:block',
                '4x pneumaticcraft:universal_sensor',
                '1x kubejs:diy_drone_kit',
                '1x kubejs:assorted_router_kit',
                {
                    type: 'masterfulmachinery:botania_mana',
                    consumeInstantly: true,
                    data: { amount: 500 * 60 }
                }
            ],
            ticks: 60,
            id: `${id_prefix}automation_mastery_shard`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.inputs.forEach((val, i) => {
            if (val instanceof string) {
                // '32x kubejs:rough_machine_frame'
                recipe.inputs[i] = {
                    type: 'masterfulmachinery:items',
                    data: toJsonWithCount(val)
                }
            } else if (val.type == 'masterfulmachinery:items') {
                /*
                {
                    type: 'masterfulmachinery:items',
                    chance: 1.0,
                    data: '2x mekanism:solar_neutron_activator'
                }
                 */
                recipe.inputs[i].data = toJsonWithCount(val.data)
            }
        })
        recipe.outputs.forEach((val, i) => {
            if (val instanceof string) {
                recipe.outputs[i] = {
                    type: 'masterfulmachinery:items',
                    data: toJsonWithCount(val)
                }
            } else if (val.type == 'masterfulmachinery:items') {
                recipe.outputs[i].data = toJsonWithCount(val.data)
            }
        })
        recipe.type = 'masterfulmachinery:machine_process';
        recipe.structureId = 'enigmatic_tree_of_life_structure';
        recipe.controllerId = 'enigmatic_tree_of_life';
        event.custom(recipe).id(recipe.id);
    });
});
