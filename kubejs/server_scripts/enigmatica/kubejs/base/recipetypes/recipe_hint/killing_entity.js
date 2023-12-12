onEvent('recipes', (event) => {
    const id_prefix = 'enlightened6:killing_entity/';
    const recipes = [
        {
            target: 'minecraft:pig_spawn_egg',
            weapon: '#farmersdelight:tools/knives',
            output: ['farmersdelight:ham'],
            id: id_prefix + 'ham_pig'
        },
        {
            target: 'minecraft:hoglin_spawn_egg',
            weapon: '#farmersdelight:tools/knives',
            output: ['farmersdelight:ham'],
            id: id_prefix + 'ham_hoglin'
        },
        {
            target: 'upgrade_aquatic:nautilus_spawn_egg',
            output: ['minecraft:nautilus_shell'],
            id: id_prefix + 'nautilus_shell'
        },
        {
            target: 'ars_nouveau:ritual_wilden_summon',
            output: ['ars_nouveau:wilden_tribute'],
            id: id_prefix + 'wilden_tribute'
        },
        {
            target: 'betterendforge:silk_moth_nest',
            output: ['betterendforge:silk_fiber'],
            id: id_prefix + 'silk_fiber'
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
            outputs: recipe.output.map((output) => toJsonWithCount(output)),
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
