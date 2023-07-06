onEvent('recipes', (event) => {
    if (!isAE2Loaded) {
        return;
    }
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/appliedenergistics2/shaped/';

    const recipes = [
        {
            output: 'appliedenergistics2:interface',
            patterns: ['EAE', 'DSC', 'EAE'],
            inputs: {
                S: 'create:empty_schematic',
                E: 'pneumaticcraft:ingot_iron_compressed',
                A: 'appliedenergistics2:engineering_processor',
                D: 'appliedenergistics2:annihilation_core',
                C: 'appliedenergistics2:formation_core'
            },
            id: 'appliedenergistics2:network/blocks/interfaces_interface'
        },
        {
            output: 'appliedenergistics2:energy_acceptor',
            patterns: ['SES', 'ECE', 'SES'],
            inputs: {
                S: 'tconstruct:slimesteel_ingot',
                E: 'mekanism:elite_universal_cable',
                C: 'powah:capacitor_basic_large'
            },
            id: 'appliedenergistics2:network/blocks/energy_energy_acceptor'
        },
        {
            output: 'appliedenergistics2:energy_cell',
            patterns: ['ACA', 'CQC', 'ACA'],
            inputs: {
                C: 'powah:capacitor_basic_large',
                A: 'astralsorcery:aquamarine',
                Q: 'appliedenergistics2:quartz_glass'
            },
            id: 'appliedenergistics2:network/blocks/energy_energy_cell'
        },
        {
            output: 'appliedenergistics2:drive',
            patterns: ['ENE', 'LSL', 'ENE'],
            inputs: {
                N: 'extrastorage:neural_processor',
                E: 'mekanism:elite_control_circuit',
                L: 'immersiveengineering:logic_unit',
                S: 'appliedenergistics2:sky_dust'
            },
            id: 'appliedenergistics2:network/blocks/storage_drive'
        },
        {
            output: 'appliedenergistics2:storage_bus',
            patterns: ['SC ', 'IB ', 'SD '],
            inputs: {
                B: '#xnet:connectors',
                C: 'appliedenergistics2:formation_core',
                I: 'appliedenergistics2:logic_processor',
                D: 'appliedenergistics2:annihilation_core',
                S: 'occultism:spirit_attuned_gem'
            },
            id: 'appliedenergistics2:network/parts/storage_bus'
        },
        {
            output: 'appliedenergistics2:import_bus',
            patterns: ['SD ', 'IC ', 'SD '],
            inputs: {
                D: 'appliedenergistics2:annihilation_core',
                I: 'appliedenergistics2:logic_processor',
                S: 'occultism:spirit_attuned_gem',
                C: '#xnet:connectors'
            },
            id: 'appliedenergistics2:network/parts/import_bus'
        },
        {
            output: 'appliedenergistics2:export_bus',
            patterns: ['SD ', 'IC ', 'SD '],
            inputs: {
                D: 'appliedenergistics2:formation_core',
                I: 'appliedenergistics2:logic_processor',
                S: 'occultism:spirit_attuned_gem',
                C: '#xnet:connectors'
            },
            id: 'appliedenergistics2:network/parts/export_bus'
        },
        {
            output: 'appliedenergistics2:spatial_pylon',
            patterns: ['QFQ', 'CTC', 'QFQ'],
            inputs: {
                T: 'bloodmagic:teleposer',
                C: 'botania:corporea_spark',
                F: 'appliedenergistics2:fluix_glass_cable',
                Q: 'appliedenergistics2:quartz_glass'
            },
            id: 'appliedenergistics2:network/blocks/spatial_io_pylon'
        },
        {
            output: 'appliedenergistics2:molecular_assembler',
            patterns: ['MQM', 'DWC', 'MQM'],
            inputs: {
                C: 'appliedenergistics2:formation_core',
                D: 'appliedenergistics2:annihilation_core',
                Q: 'appliedenergistics2:quartz_glass',
                W: '#forge:workbenches',
                M: 'create:mechanical_crafter'
            },
            id: 'appliedenergistics2:network/crafting/molecular_assembler'
        },
        {
            output: Item.of('appliedenergistics2:quantum_ring', 16),
            patterns: ['ETE', 'ACA', 'ERE'],
            inputs: {
                T: 'rftoolsutility:matter_transmitter',
                C: 'kubejs:cpu_core_as_81221',
                R: 'rftoolsutility:matter_receiver',
                A: 'betterendforge:aeternium_ingot',
                E: '#forge:gears/enderium'
            },
            id: 'appliedenergistics2:network/blocks/quantum_ring'
        },
        {
            output: Item.of('appliedenergistics2:fluix_glass_cable', 8),
            patterns: ['ADA', 'BCB', 'ADA'],
            inputs: {
                A: 'occultism:spirit_attuned_gem',
                B: 'immersiveengineering:connector_bundled',
                C: 'immersiveengineering:wirecoil_redstone',
                D: 'prettypipes:pipe'
            },
            id: 'appliedenergistics2:network/cables/glass_fluix'
        },
        {
            output: Item.of('appliedenergistics2:fluix_glass_cable', 8),
            patterns: ['DBD', 'ACA', 'DBD'],
            inputs: {
                A: 'occultism:spirit_attuned_gem',
                B: 'immersiveengineering:connector_bundled',
                C: 'immersiveengineering:wirecoil_redstone',
                D: 'integrateddynamics:cable'
            },
            id: `${id_prefix}fluix_cable_alt`
        },
        {
            output: 'appliedenergistics2:quartz_block',
            patterns: ['AA ', 'AA ', '   '],
            inputs: {
                A: '#forge:gems/aquamarine'
            },
            id: 'appliedenergistics2:decorative/certus_quartz_block'
        }
    ];
    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.patterns, recipe.inputs).id(recipe.id);
    });
});
