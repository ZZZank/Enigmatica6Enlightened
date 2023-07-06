onEvent('recipes', (event) => {
    if (!isAE2Loaded) {
        return;
    }
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/ae2/shapeless/';

    // {
    //     output:"output",
    //     ingerdients:[
    //         "ingerdient1",
    //         "ingerdient2"
    //     ],
    //     id:"recipe_id"
    // }
    const recipes = [
        {
            output: 'appliedenergistics2:fluid_interface',
            ingerdients: [
                'appliedenergistics2:interface',
                'minecraft:green_dye',
                'appliedenergistics2:engineering_processor',
                'minecraft:bucket'
            ],
            id: 'appliedenergistics2:network/blocks/fluid_interfaces_interface'
        },
        {
            output: 'appliedenergistics2:fluid_storage_bus',
            ingerdients: [
                'appliedenergistics2:storage_bus',
                'minecraft:green_dye',
                'minecraft:bucket'
            ],
            id: 'appliedenergistics2:network/parts/storage_bus_fluid'
        },
        {
            output: 'appliedenergistics2:fluid_import_bus',
            ingerdients: [
                'appliedenergistics2:import_bus',
                'minecraft:green_dye',
                'minecraft:bucket'
            ],
            id: 'appliedenergistics2:network/parts/import_bus_fluid'
        },
        {
            output: 'appliedenergistics2:fluid_export_bus',
            ingerdients: [
                'appliedenergistics2:export_bus',
                'minecraft:green_dye',
                'minecraft:bucket'
            ],
            id: 'appliedenergistics2:network/parts/export_bus_fluid'
        },
        {
            output: '4x occultism:spirit_attuned_gem',
            ingerdients: [
                'appliedenergistics2:fluix_block'
            ],
            id: 'appliedenergistics2:misc/deconstruction_fluix_block'
        },
        {
            output: '4x astralsorcery:aquamarine',
            ingerdients: [
                'appliedenergistics2:quartz_block'
            ],
            id: 'appliedenergistics2:misc/deconstruction_certus_quartz_block'
        },
        {
            output: 'appliedenergistics2:ender_dust',
            ingerdients: [
                'emendatusenigmatica:ender_dust'
            ],
            id: `${id_prefix}ender_dust_ee_to_ae`
        }
    ];

    recipes.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.ingerdients).id(recipe.id);
    });
});
