'use strict';
onEvent('recipes', (event) => {
    if (global.isNormalMode) {
        return;
    }
    const id_prefix = 'enigmatica:expert/pneumaticcraft/pressure_chamber/';
    const recipes = [
        {
            inputs: ['2x #forge:ingots/steel', '2x #forge:tar', '#forge:obsidian'],
            pressure: 2.0,
            results: ['4x pneumaticcraft:ingot_iron_compressed'],
            id: 'pneumaticcraft:pressure_chamber/compressed_iron_ingot'
        },
        {
            inputs: ['2x #forge:storage_blocks/steel', '18x #forge:tar', '9x #forge:obsidian'],
            pressure: 2.0,
            results: ['4x pneumaticcraft:compressed_iron_block'],
            id: 'pneumaticcraft:pressure_chamber/compressed_iron_block'
        },
        {
            inputs: ['4x minecraft:snow_block'],
            pressure: 1.5,
            results: ['betterendforge:dense_snow'],
            id: `${id_prefix}dense_snow`
        },
        {
            inputs: ['4x betterendforge:dense_snow'],
            pressure: 1.5,
            results: ['minecraft:ice'],
            id: 'pneumaticcraft:pressure_chamber/ice'
        },
        {
            inputs: ['powah:blank_card', '#mekanism:enriched/redstone', 'powah:ender_core'],
            pressure: 4.0,
            results: ['powah:binding_card'],
            id: 'powah:crafting/binding_card'
        },
        {
            inputs: ['#forge:alloys/ultimate', 'powah:dielectric_paste', 'rftoolsbase:infused_enderpearl'],
            pressure: 4.0,
            results: ['powah:aerial_pearl'],
            id: 'powah:crafting/aerial_pearl'
        },
        {
            inputs: [
                '#forge:wires/electrum',
                '2x appliedenergistics2:printed_calculation_processor',
                'powah:dielectric_paste',
                '#pneumaticcraft:plastic_sheets'
            ],
            pressure: 1.0,
            results: ['2x pneumaticcraft:transistor'],
            id: 'pneumaticcraft:pressure_chamber/transistor'
        },
        {
            inputs: [
                '#forge:wires/electrum',
                '#forge:plates/signalum',
                '#forge:plates/aluminum',
                'powah:dielectric_paste',
                '#pneumaticcraft:plastic_sheets'
            ],
            pressure: 1.0,
            results: ['2x pneumaticcraft:capacitor'],
            id: 'pneumaticcraft:pressure_chamber/capacitor'
        },
        {
            inputs: [
                'pneumaticcraft:unassembled_pcb',
                '2x pneumaticcraft:capacitor',
                '2x pneumaticcraft:transistor',
                'appliedenergistics2:calculation_processor',
                '#forge:wires/lead'
            ],
            pressure: 4.0,
            results: ['pneumaticcraft:printed_circuit_board'],
            id: `${id_prefix}printed_circuit_board`
        },
        {
            inputs: [
                '#forge:plates/copper',
                '6x fluxnetworks:flux_dust',
                '2x #pneumaticcraft:plastic_sheets'
            ],
            pressure: 1.5,
            results: ['6x pneumaticcraft:empty_pcb'],
            id: 'pneumaticcraft:pressure_chamber/empty_pcb'
        },
        {
            inputs: ['#forge:plates/invar', 'fluxnetworks:flux_dust', 'thermal:redstone_servo'],
            pressure: 1.0,
            results: ['pneumaticcraft:turbine_blade'],
            id: 'pneumaticcraft:pressure_chamber/turbine_blade'
        },
        {
            inputs: [
                '3x integrateddynamics:variable',
                'appliedenergistics2:formation_core',
                'fluxnetworks:flux_dust'
            ],
            pressure: 2.0,
            results: ['3x integrateddynamics:variable_transformer_output'],
            id: `${id_prefix}variable_transformer_output`
        },
        {
            inputs: [
                '3x integrateddynamics:variable',
                'appliedenergistics2:annihilation_core',
                'fluxnetworks:flux_dust'
            ],
            pressure: 2.0,
            results: ['3x integrateddynamics:variable_transformer_input'],
            id: `${id_prefix}variable_transformer_input`
        },
        {
            inputs: ['2x kubejs:memory_basic_empty', 'fluxnetworks:flux_dust'],
            pressure: 4.0,
            results: ['kubejs:memory_advanced_empty'],
            id: `${id_prefix}memory_advanced_empty`
        },
        {
            inputs: ['2x kubejs:memory_advanced_empty', 'fluxnetworks:flux_dust'],
            pressure: 4.0,
            results: ['kubejs:memory_elite_empty'],
            id: `${id_prefix}memory_elite_empty`
        },
        {
            inputs: ['2x kubejs:memory_elite_empty', 'fluxnetworks:flux_dust'],
            pressure: 4.0,
            results: ['kubejs:memory_ultimate_empty'],
            id: `${id_prefix}memory_ultimate_empty`
        },
        {
            inputs: ['3x #mekanism:alloys/reinforced', 'pneumaticcraft:turbine_rotor'],
            pressure: 4.0,
            results: ['mekanismgenerators:turbine_blade'],
            id: 'mekanismgenerators:turbine/blade'
        },
        {
            inputs: ['astralsorcery:celestial_crystal', '#forge:dusts/starmetal'],
            pressure: 4.5,
            results: ['3x kubejs:astrogro'],
            id: `${id_prefix}astrogro`
        },
        {
            inputs: [
                '27x immersiveengineering:blastbrick_reinforced',
                '10x immersiveengineering:light_engineering',
                '5x immersiveengineering:heavy_engineering',
                '5x #immersiveengineering:scaffoldings/steel',
                '6x #forge:storage_blocks/steel',
                '15x #forge:sheetmetals/steel',
                'minecraft:cauldron',
                'immersiveengineering:rs_engineering',
                'mekanism:cardboard_box'
            ],
            pressure: 4.5,
            results: ['kubejs:diy_arc_furnace'],
            id: `${id_prefix}diy_arc_furnace`
        },
        {
            inputs: [
                '11x #immersiveengineering:scaffoldings/steel',
                '2x immersiveengineering:light_engineering',
                '6x immersiveengineering:treated_fence',
                'immersiveengineering:rs_engineering',
                '2x immersiveengineering:heavy_engineering',
                '2x #forge:storage_blocks/steel',
                '4x #forge:sheetmetals/steel',
                '4x immersiveengineering:fluid_pipe',
                'mekanism:cardboard_box'
            ],
            pressure: 4.5,
            results: ['kubejs:diy_pumpjack'],
            id: `${id_prefix}diy_pumpjack`
        },
        {
            inputs: [
                '40x #immersiveengineering:scaffoldings/steel',
                '4x immersiveengineering:heavy_engineering',
                'immersiveengineering:rs_engineering',
                '60x #forge:sheetmetals/iron',
                '17x immersiveengineering:fluid_pipe',
                'mekanism:cardboard_box'
            ],
            pressure: 4.5,
            results: ['kubejs:diy_distillation_tower'],
            id: `${id_prefix}diy_distillation_tower`
        },
        {
            inputs: [
                '26x #immersiveengineering:scaffoldings/steel',
                '16x #forge:sheetmetals/steel',
                '3x immersiveengineering:radiator',
                '9x immersiveengineering:light_engineering',
                'immersiveengineering:rs_engineering',
                '4x immersiveengineering:heavy_engineering',
                '9x #forge:storage_blocks/steel',
                'mekanism:cardboard_box'
            ],
            pressure: 4.5,
            results: ['kubejs:diy_excavator'],
            id: `${id_prefix}diy_excavator`
        },
        {
            inputs: [
                'immersiveengineering:drill',
                'immersiveengineering:drillhead_steel',
                '10x immersiveengineering:biodiesel_bucket',
                'immersiveengineering:toolupgrade_drill_waterproof',
                'immersiveengineering:toolupgrade_drill_lube',
                '3x immersiveengineering:toolupgrade_drill_damage',
                'mekanism:cardboard_box'
            ],
            pressure: 4.5,
            results: ['kubejs:mining_gadget_kit'],
            id: `${id_prefix}mining_gadget_kit`
        },
        {
            inputs: [
                'thermal:flux_drill',
                'thermal:upgrade_augment_3',
                '3x thermal:area_radius_augment',
                'mekanism:cardboard_box'
            ],
            pressure: 4.5,
            results: ['kubejs:flux_bore_kit'],
            id: `${id_prefix}flux_bore_kit`
        },
        {
            inputs: [
                'minecraft:chest_minecart',
                '64x create:mechanical_drill',
                '12x minecraft:powered_rail',
                '12x minecraft:redstone_torch',
                '64x create:linear_chassis',
                '32x create:deployer',
                '2x create:mechanical_plough',
                '2x enderstorage:ender_chest',
                'mekanism:cardboard_box'
            ],
            pressure: 4.5,
            results: ['kubejs:diy_create_quarry'],
            id: `${id_prefix}diy_create_quarry`
        },
        {
            inputs: [
                'mekanism:mekasuit_helmet',
                '2x mekanism:module_energy_unit',
                '4x mekanism:module_vision_enhancement_unit',
                'mekanism:module_inhalation_purification_unit',
                'mekanism:module_nutritional_injection_unit',
                '4x mekanism:module_electrolytic_breathing_unit',
                'mekanism:module_laser_dissipation_unit',
                'mekanism:cardboard_box'
            ],
            pressure: 4.5,
            results: ['kubejs:diy_mekasuit_helmet'],
            id: `${id_prefix}diy_mekasuit_helmet`
        },
        {
            inputs: [
                'mekanism:mekasuit_bodyarmor',
                '2x mekanism:module_energy_unit',
                'mekanism:module_geiger_unit',
                'mekanism:module_gravitational_modulating_unit',
                'mekanism:module_dosimeter_unit',
                'mekanism:module_laser_dissipation_unit',
                'mekanism:cardboard_box'
            ],
            pressure: 4.5,
            results: ['kubejs:diy_mekasuit_bodyarmor'],
            id: `${id_prefix}diy_mekasuit_bodyarmor`
        },
        {
            inputs: [
                'mekanism:mekasuit_pants',
                '2x mekanism:module_energy_unit',
                '8x mekanismgenerators:module_geothermal_generator_unit',
                'mekanism:module_laser_dissipation_unit',
                'mekanism:cardboard_box'
            ],
            pressure: 4.5,
            results: ['kubejs:diy_mekasuit_pants'],
            id: `${id_prefix}diy_mekasuit_pants`
        },
        {
            inputs: [
                'mekanism:mekasuit_boots',
                '2x mekanism:module_energy_unit',
                '4x mekanism:module_hydraulic_propulsion_unit',
                'mekanism:module_laser_dissipation_unit',
                'mekanism:cardboard_box'
            ],
            pressure: 4.5,
            results: ['kubejs:diy_mekasuit_boots'],
            id: `${id_prefix}diy_mekasuit_boots`
        },
        {
            inputs: [
                'mekanism:meka_tool',
                '2x mekanism:module_energy_unit',
                '4x mekanism:module_attack_amplification_unit',
                '4x mekanism:module_vein_mining_unit',
                '4x mekanism:module_excavation_escalation_unit',
                'mekanism:module_teleportation_unit',
                'mekanism:cardboard_box'
            ],
            pressure: 4.5,
            results: ['kubejs:diy_meka_tool'],
            id: `${id_prefix}diy_meka_tool`
        },
        {
            inputs: [
                '4x minecraft:skeleton_skull',
                '4x minecraft:wither_skeleton_skull',
                '8x occultism:candle_white',
                '8x occultism:spirit_attuned_crystal',
                'occultism:golden_sacrificial_bowl',
                '12x occultism:sacrificial_bowl',
                'mekanism:cardboard_box'
            ],
            pressure: 4.5,
            results: ['kubejs:artisinal_ritual_kit'],
            id: `${id_prefix}artisinal_ritual_kit`
        },
        {
            inputs: [
                'occultism:chalk_white',
                'occultism:chalk_gold',
                'occultism:chalk_purple',
                'occultism:chalk_red',
                'mekanism:cardboard_box'
            ],
            pressure: 4.5,
            results: ['kubejs:artisinal_chalk_set'],
            id: `${id_prefix}artisinal_chalk_set`
        },
        {
            inputs: ['4x pneumaticcraft:transistor', '#forge:alloys/elite'],
            pressure: 4.5,
            results: ['16x kubejs:advanced_ram_chip'],
            id: `${id_prefix}advanced_ram_chip`
        },
        {
            inputs: [
                industrialforegoing.laser_lens.purple,
                'industrialforegoing:fluid_laser_base',
                '4x industrialforegoing:laser_drill',
                '4x industrialforegoing:speed_addon_2',
                '4x industrialforegoing:efficiency_addon_2',
                'mekanism:cardboard_box'
            ],
            pressure: 4.5,
            results: ['kubejs:fluid_drill_package'],
            id: `${id_prefix}fluid_drill_package`
        },
        {
            inputs: [
                '6x pneumaticcraft:pneumatic_cylinder',
                '10x mekanism:basic_logistical_transporter',
                '6x pneumaticcraft:reinforced_stone_slab',
                'pneumaticcraft:pneumatic_dynamo',
                '2x create:brass_hand',
                'mekanism:cardboard_box'
            ],
            pressure: 2.0,
            results: ['kubejs:assembly_io_package'],
            id: `${id_prefix}assembly_io_package`
        },
        {
            inputs: [
                '3x pneumaticcraft:pneumatic_cylinder',
                '5x mekanism:basic_logistical_transporter',
                '3x pneumaticcraft:reinforced_stone_slab',
                'pneumaticcraft:pneumatic_dynamo',
                '#powah:energizing_rod',
                'mekanism:cardboard_box'
            ],
            pressure: 2.0,
            results: ['kubejs:assembly_laser_package'],
            id: `${id_prefix}assembly_laser_package`
        },
        {
            inputs: [
                '3x pneumaticcraft:pneumatic_cylinder',
                '5x mekanism:basic_logistical_transporter',
                '3x pneumaticcraft:reinforced_stone_slab',
                'pneumaticcraft:pneumatic_dynamo',
                'pneumaticcraft:drill_bit_diamond',
                'mekanism:cardboard_box'
            ],
            pressure: 2.0,
            results: ['kubejs:assembly_drill_package'],
            id: `${id_prefix}assembly_drill_package`
        },
        {
            inputs: [
                '2x pneumaticcraft:pneumatic_cylinder',
                '2x pneumaticcraft:plastic',
                '4x pneumaticcraft:reinforced_stone_slab',
                '2x #forge:ingots/compressed_iron',
                'mekanism:cardboard_box'
            ],
            pressure: 2.0,
            results: ['kubejs:assembly_platform_package'],
            id: `${id_prefix}assembly_platform_package`
        },
        {
            inputs: [
                '3x pneumaticcraft:printed_circuit_board',
                '5x mekanism:basic_logistical_transporter',
                'rftoolsutility:screen',
                '3x pneumaticcraft:reinforced_stone_slab',
                'pneumaticcraft:pneumatic_dynamo',
                'mekanism:cardboard_box'
            ],
            pressure: 2.0,
            results: ['kubejs:assembly_controller_package'],
            id: `${id_prefix}assembly_controller_package`
        },
        {
            inputs: [
                'pneumaticcraft:pressure_chamber_valve',
                '2x pneumaticcraft:pressure_chamber_interface',
                '36x pneumaticcraft:pressure_chamber_glass',
                '59x pneumaticcraft:pressure_chamber_wall',
                '40x pneumaticcraft:speed_upgrade',
                '50x pneumaticcraft:volume_upgrade',
                '2x pneumaticcraft:regulator_tube_module',
                'pneumaticcraft:vacuum_pump',
                'mekanism:cardboard_box'
            ],
            pressure: 4.5,
            results: ['kubejs:diy_pressure_chamber'],
            id: `${id_prefix}diy_pressure_chamber`
        },
        {
            inputs: [
                'pneumaticcraft:drone',
                'pneumaticcraft:charging_station',
                'pneumaticcraft:programmer',
                '64x pneumaticcraft:programming_puzzle',
                '64x pneumaticcraft:programming_puzzle',
                'mekanism:cardboard_box'
            ],
            pressure: 4.5,
            results: ['kubejs:diy_drone_kit'],
            id: `${id_prefix}diy_drone_kit`
        },
        {
            inputs: [
                '16x modularrouters:item_router',
                '4x modularrouters:distributor_module',
                '4x modularrouters:sender_module_2',
                '4x modularrouters:puller_module_2',
                'modularrouters:vacuum_module',
                'modularrouters:player_module',
                'mekanism:cardboard_box'
            ],
            pressure: 4.5,
            results: ['kubejs:assorted_router_kit'],
            id: `${id_prefix}assorted_router_kit`
        },
        {
            inputs: [
                'naturesaura:animal_spawner',
                '4x naturesaura:ancient_planks',
                '16x naturesaura:infused_brick',
                '16x minecraft:hay_block',
                '64x naturesaura:birth_spirit',
                'mekanism:cardboard_box'
            ],
            pressure: 4.5,
            results: ['kubejs:altar_of_birthing_kit'],
            id: `${id_prefix}altar_of_birthing_kit`
        },
        {
            inputs: [
                'mekanism:resistive_heater',
                'pneumaticcraft:heat_pipe',
                'minecraft:blast_furnace',
                'create:flywheel',
                'create:furnace_engine',
                'mekanism:cardboard_box'
            ],
            pressure: 4.5,
            results: ['kubejs:diy_furnace_engine_kit'],
            id: `${id_prefix}diy_furnace_engine_kit`
        },
        {
            inputs: [
                '3x immersiveengineering:fluid_pipe',
                '4x immersiveengineering:light_engineering',
                'immersiveengineering:rs_engineering',
                '4x immersiveengineering:sheetmetal_iron',
                'immersiveengineering:steel_fence',
                '5x immersiveengineering:steel_scaffolding_standard',
                'mekanism:cardboard_box'
            ],
            pressure: 4.5,
            results: ['kubejs:diy_mixer'],
            id: `${id_prefix}diy_mixer`
        },
        {
            inputs: [
                '3x immersiveengineering:conveyor_basic',
                '2x immersiveengineering:fluid_pump',
                '2x immersiveengineering:light_engineering',
                'immersiveengineering:rs_engineering',
                '2x immersiveengineering:sheetmetal_steel',
                '3x immersiveengineering:steel_scaffolding_standard',
                'mekanism:cardboard_box'
            ],
            pressure: 4.5,
            results: ['kubejs:diy_bottling_machine'],
            id: `${id_prefix}diy_bottling_machine`
        },
        {
            inputs: [
                'tconstruct:ichor_slime_crystal',
                'appliedenergistics2:calculation_processor',
                'botania:corporea_spark'
            ],
            pressure: 2.0,
            results: ['appliedenergistics2:annihilation_core'],
            id: 'appliedenergistics2:materials/annihilationcore'
        },
        {
            inputs: [
                'tconstruct:sky_slime_crystal',
                'appliedenergistics2:calculation_processor',
                'botania:corporea_spark'
            ],
            pressure: 2.0,
            results: ['appliedenergistics2:formation_core'],
            id: 'appliedenergistics2:materials/formationcore'
        },
        {
            inputs: [
                '#forge:coins/tin',
                '#forge:gems/silicon',
                'appliedenergistics2:sky_dust',
                'fluxnetworks:flux_dust'
            ],
            pressure: 2.0,
            results: ['appliedenergistics2:printed_calculation_processor'],
            id: 'appliedenergistics2:inscriber/calculation_processor_print'
        },
        {
            inputs: [
                '#forge:coins/lumium',
                '#forge:gems/silicon',
                'appliedenergistics2:sky_dust',
                'fluxnetworks:flux_dust'
            ],
            pressure: 2.0,
            results: ['appliedenergistics2:printed_logic_processor'],
            id: 'appliedenergistics2:inscriber/logic_processor_print'
        },
        {
            inputs: [
                '#forge:coins/enderium',
                '#forge:gems/silicon',
                'appliedenergistics2:sky_dust',
                'fluxnetworks:flux_dust'
            ],
            pressure: 2.0,
            results: ['appliedenergistics2:printed_engineering_processor'],
            id: 'appliedenergistics2:inscriber/engineering_processor_print'
        }
    ];

    powahTiers.forEach(function (tier) {
        if (tier == 'starter') {
            return;
        }
        let capacitor = `powah:capacitor_${tier}`;

        if (tier == 'basic') {
            capacitor = `powah:capacitor_${tier}_large`;
        }
        // else if (tier == 'hardened') {
        //     let crystal = 'powah:steel_energized';
        // }

        // let lower_tiers = lowerTiers(powahTiers, tier);

        // Primary Craft
        recipes.push({
            inputs: ['powah:blank_card', 'powah:dielectric_paste', capacitor, 'powah:ender_core'],
            pressure: 4.0,
            results: [`powah:ender_gate_${tier}`],
            id: `powah:crafting/ender_gate_${tier}`
        });

        // Disassemble Craft
        if (tier != 'basic') {
            recipes.push({
                inputs: [`powah:reactor_${tier}`],
                pressure: -0.9,
                results: [
                    `powah:thermo_generator_${tier}`,
                    `powah:energy_cell_${tier}`,
                    `powah:furnator_${tier}`
                ],
                id: `${id_prefix}disassemble_reactor_${tier}`
            });
        }
    });

    recipes.forEach((recipe) => {
        let ingredients = [];
        recipe.inputs.forEach((input) => {
            let parsed = toJsonWithCount(input);
            parsed.type = 'pneumaticcraft:stacked_item';
            ingredients.push(parsed);
        });
        recipe.results = recipe.results.map((str) => Item.of(str).toResultJson())

        event
            .custom({
                type: 'pneumaticcraft:pressure_chamber',
                inputs: ingredients,
                pressure: recipe.pressure,
                results: recipe.results
            })
            .id(recipe.id);
    });
});
