onEvent('recipes', (event) => {
    if (!isAE2Loaded) {
        return;
    }
    if (global.isExpertMode == false) {
        return;
    }

    const id_prefix = 'enigmatica:expert/ae2_compat/basic_res/';
    const recipes = [
        { toReplace: 'minecraft:iron_ingot', replaceWith: 'pneumaticcraft:ingot_iron_compressed' },
        { toReplace: '#appliedenergistics2:crystals/fluix', replaceWith: 'occultism:spirit_attuned_gem' },
        { toReplace: '#appliedenergistics2:crystals/certus', replaceWith: 'astralsorcery:aquamarine' },
        { toReplace: 'appliedenergistics2:fluix_dust', replaceWith: 'botania:corporea_spark' },
        { toReplace: 'appliedenergistics2:certus_quartz_dust', replaceWith: 'botania:quartz_mana' },
        { toReplace: 'appliedenergistics2:ender_dust', replaceWith: 'emendatusenigmatica:ender_dust' },
    ];
    recipes.forEach((recipe) => {
        event.replaceInput({ mod: 'appliedenergistics2' }, recipe.toReplace, recipe.replaceWith);
    });

    const dusts = [
        { toReplace: 'appliedenergistics2:nether_quartz_dust', replaceWith: 'emendatusenigmatica:quartz_dust' },
        { toReplace: 'appliedenergistics2:iron_dust', replaceWith: 'emendatusenigmatica:iron_dust' },
        { toReplace: 'appliedenergistics2:gold_dust', replaceWith: 'emendatusenigmatica:gold_dust' }
    ];
    dusts.forEach((entry) => {
        event.replaceInput(entry.toReplace, entry.replaceWith);
    });

    event.recipes.create
        .compacting('appliedenergistics2:fluix_pearl', [
            'minecraft:ender_pearl',
            'occultism:spirit_attuned_gem',
            'occultism:spirit_attuned_gem',
            'kubejs:dimensional_storage_crystal'
        ])
        .heated()
        .id('appliedenergistics2:misc/fluixpearl');

    event
        .custom({
            type: 'occultism:spirit_fire',
            ingredient: Ingredient.of('quark:black_crystal').toJson(),
            result: Ingredient.of('appliedenergistics2:sky_stone_block').toJson()
        })
        .id(id_prefix + 'sky_stone');
});
