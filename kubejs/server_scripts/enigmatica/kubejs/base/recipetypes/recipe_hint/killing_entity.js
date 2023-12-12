onEvent('recipes', (event) => {
    const id_prefix = 'enlightened6:killing_entity/';
    const recipes = [
        {
            target: 'minecraft:ravager_spawn_egg',
            output: ['quark:ravager_hide'],
            id: id_prefix + 'ravager'
        },
        {
            target: 'minecraft:wither_skeleton_spawn_egg',
            output: [
                'minecraft:wither_skeleton_skull',
                'architects_palette:withered_bone',
                'wstweaks:fragment'
            ],
            id: id_prefix + 'wither_skeleton'
        },
        {
            target: 'minecraft:elder_guardian_spawn_egg',
            output: ['upgrade_aquatic:elder_guardian_spine', 'upgrade_aquatic:elder_eye'],
            id: id_prefix + 'elder_guardian'
        },
        {
            target: 'minecraft:guardian_spawn_egg',
            output: ['upgrade_aquatic:guardian_spine'],
            id: id_prefix + 'guardian'
        },
        {
            target: 'minecraft:pig_spawn_egg',
            weapon: '#farmersdelight:tools/knives',
            output: ['farmersdelight:ham'],
            id: id_prefix + 'pig'
        },
        {
            target: 'minecraft:hoglin_spawn_egg',
            weapon: '#farmersdelight:tools/knives',
            output: ['farmersdelight:ham', 'nethers_delight:hoglin_hide'],
            id: id_prefix + 'hoglin'
        },
        {
            target: 'upgrade_aquatic:nautilus_spawn_egg',
            output: ['minecraft:nautilus_shell'],
            id: id_prefix + 'nautilus'
        },
        {
            target: 'ars_nouveau:ritual_wilden_summon',
            output: ['ars_nouveau:wilden_tribute'],
            id: id_prefix + 'wilden_summon'
        },
        {
            target: 'betterendforge:silk_moth_nest',
            output: ['betterendforge:silk_fiber'],
            id: id_prefix + 'silk_moth'
        },
        {
            target: 'meetyourfight:haunted_bell',
            output: ['meetyourfight:phantoplasm'],
            id: id_prefix + 'phantoplasm'
        },
        {
            target: 'meetyourfight:fossil_bait',
            output: ['meetyourfight:mossy_tooth'],
            id: id_prefix + 'mossy_tooth'
        },
        {
            target: 'meetyourfight:devils_ante',
            output: ['meetyourfight:fortunes_favor'],
            id: id_prefix + 'fortunes_favor'
        },
        {
            target: 'environmental:koi_bucket',
            output: ['environmental:koi'],
            id: id_prefix + 'koi'
        }
    ];

    recipes.forEach((recipe) => {
        let proc = {
            type: 'masterfulmachinery:machine_process',
            structureId: 'killing_entity_structure',
            controllerId: 'killing_entity',
            outputs: recipe.output.map((output) => {
                return {
                    type: 'masterfulmachinery:items',
                    data: toJsonWithCount(output)
                };
            }),
            inputs: [
                {
                    type: 'masterfulmachinery:items',
                    data: recipe.weapon ? toJsonWithCount(recipe.weapon) : { tag: 'forge:weapons', count: 1 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: toJsonWithCount(recipe.target)
                }
            ],
            ticks: 1
        };
        event.custom(proc).id(recipe.id);
    });
});
