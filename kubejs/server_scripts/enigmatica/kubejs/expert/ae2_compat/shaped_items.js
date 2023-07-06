onEvent('recipes', (event) => {
    if (!isAE2Loaded) {
        return;
    }
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/ae2/shaped_items/';

    const recipes = [
        {
            output: 'appliedenergistics2:2_cubed_spatial_cell_component',
            patterns: ['GFG', 'FAF', ' S '],
            inputs: {
                G: 'minecraft:glowstone_dust',
                A: 'appliedenergistics2:engineering_processor',
                F: 'appliedenergistics2:fluix_pearl',
                S: 'occultism:spirit_attuned_gem'
            },
            id: 'appliedenergistics2:network/cells/spatial_components'
        },
        {
            output: 'appliedenergistics2:memory_card',
            patterns: ['   ', 'VMQ', 'GGG'],
            inputs: {
                V: 'integrateddynamics:variable',
                M: 'kubejs:memory_basic_filled',
                Q: 'pneumaticcraft:ingot_iron_compressed',
                G: 'minecraft:gold_ingot'
            },
            id: 'appliedenergistics2:tools/network_memory_card'
        },
        {
            output: 'appliedenergistics2:blank_pattern',
            patterns: ['QGQ', 'GAG', 'RSR'],
            inputs: {
                S: 'create:empty_schematic',
                Q: 'appliedenergistics2:quartz_glass',
                G: 'minecraft:glowstone_dust',
                R: 'pneumaticcraft:ingot_iron_compressed',
                A: '#forge:gems/aquamarine'
            },
            id: 'appliedenergistics2:network/crafting/patterns_blank'
        },
        {
            output: '4x appliedenergistics2:speed_card',
            patterns: ['AGA', 'GLG', 'AGA'],
            inputs: {
                A: 'appliedenergistics2:advanced_card',
                G: 'pneumaticcraft:glycerol',
                L: {
                    type: 'pneumaticcraft:fluid',
                    tag: 'forge:lubricant',
                    amount: 1000
                }
            },
            id: 'appliedenergistics2:materials/cardspeed'
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.patterns, recipe.inputs).id(recipe.id);
    });
});
