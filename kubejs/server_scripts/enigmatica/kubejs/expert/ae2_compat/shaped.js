onEvent('recipes', (event) => {
    if (!isAE2Loaded) {
        return;
    }
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/ae2_compat/shaped/';

    const recipesIDs = [
        'appliedenergistics2:network/blocks/controller',
        'appliedenergistics2:network/wireless_access_point'
    ];
    recipesIDs.forEach((recipesID) => {
        event.remove({ id: recipesID });
    });

    const recipes = [
        {
            output: 'appliedenergistics2:fluid_interface',
            patterns: ['IA ', 'GB ', '   '],
            inputs: {
                I: 'appliedenergistics2:interface',
                G: 'minecraft:green_dye',
                A: 'refinedstorage:advanced_processor',
                B: 'minecraft:bucket'
            },
            id: 'appliedenergistics2:network/blocks/fluid_interfaces_interface'
        },
        {
            output: 'appliedenergistics2:interface',
            patterns: ['EAE', 'DSC', 'EAE'],
            inputs: {
                S: 'create:empty_schematic',
                E: 'refinedstorage:quartz_enriched_iron',
                A: 'refinedstorage:advanced_processor',
                D: 'refinedstorage:destruction_core',
                C: 'refinedstorage:construction_core'
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
                C: 'refinedstorage:construction_core',
                I: 'refinedstorage:improved_processor',
                D: 'refinedstorage:destruction_core',
                S: 'occultism:spirit_attuned_gem'
            },
            id: 'appliedenergistics2:network/parts/storage_bus'
        },
        {
            output: 'appliedenergistics2:import_bus',
            patterns: ['SD ', 'IC ', 'SD '],
            inputs: {
                D: 'refinedstorage:destruction_core',
                I: 'refinedstorage:improved_processor',
                S: 'occultism:spirit_attuned_gem',
                C: '#xnet:connectors'
            },
            id: 'appliedenergistics2:network/parts/import_bus'
        },
        {
            output: 'appliedenergistics2:export_bus',
            patterns: ['SD ', 'IC ', 'SD '],
            inputs: {
                D: 'refinedstorage:construction_core',
                I: 'refinedstorage:improved_processor',
                S: 'occultism:spirit_attuned_gem',
                C: '#xnet:connectors'
            },
            id: 'appliedenergistics2:network/parts/export_bus'
        },
        {
            output: 'appliedenergistics2:fluid_storage_bus',
            patterns: ['SB ', 'G  ', '   '],
            inputs: {
                S: 'appliedenergistics2:storage_bus',
                G: 'minecraft:green_dye',
                B: 'minecraft:bucket'
            },
            id: 'appliedenergistics2:network/parts/storage_bus_fluid'
        },
        {
            output: 'appliedenergistics2:fluid_import_bus',
            patterns: ['IB ', 'G  ', '   '],
            inputs: {
                I: 'appliedenergistics2:import_bus',
                G: 'minecraft:green_dye',
                B: 'minecraft:bucket'
            },
            id: 'appliedenergistics2:network/parts/import_bus_fluid'
        },
        {
            output: 'appliedenergistics2:fluid_export_bus',
            patterns: ['EB ', 'G  ', '   '],
            inputs: {
                E: 'appliedenergistics2:export_bus',
                G: 'minecraft:green_dye',
                B: 'minecraft:bucket'
            },
            id: 'appliedenergistics2:network/parts/export_bus_fluid'
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
                C: 'refinedstorage:construction_core',
                D: 'refinedstorage:destruction_core',
                Q: 'appliedenergistics2:quartz_glass',
                W: '#forge:workbenches',
                M: 'create:mechanical_crafter'
            },
            id: 'appliedenergistics2:network/crafting/molecular_assembler'
        },
        {
            output: '2x appliedenergistics2:quantum_link',
            patterns: ['ETE', 'ACA', 'ERE'],
            inputs: {
                T: 'rftoolsutility:matter_transmitter',
                C: 'kubejs:cpu_core_as_81221',
                R: 'rftoolsutility:matter_receiver',
                A: 'betterendforge:aeternium_ingot',
                E: '#forge:gears/enderium'
            },
            id: 'appliedenergistics2:network/blocks/quantum_link'
        },
        {
            output: '8x appliedenergistics2:fluix_glass_cable',
            patterns: ['CCC', 'CSC', 'CCC'],
            inputs: {
                C: 'refinedstorage:cable',
                S: 'appliedenergistics2:sky_dust'
            },
            id: 'appliedenergistics2:network/cables/glass_fluix'
        }
    ];
    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.patterns, recipe.inputs).id(id_prefix + recipe.output);
    });
});
