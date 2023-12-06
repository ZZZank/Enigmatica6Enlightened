onEvent('recipes', (event) => {
    const id_prefix = 'enlightened6:killing_entity/';
    const recipes = [
        {
            target: 'minecraft:pig_spawn_egg',
            weapon: { tag: 'farmersdelight:tools/knives', count: 1 },
            output: 'farmersdelight:ham',
            id: id_prefix + 'ham_pig'
        },
        {
            target: 'minecraft:hoglin_spawn_egg',
            weapon: { tag: 'farmersdelight:tools/knives', count: 1 },
            output: 'farmersdelight:ham',
            id: id_prefix + 'ham_hoglin'
        },
        {
            target: 'upgrade_aquatic:nautilus_spawn_egg',
            output: 'minecraft:nautilus_shell',
            id: id_prefix + 'nautilus_shell'
        },
        {
            target: 'betterendforge:silk_moth_nest',
            output: 'betterendforge:silk_fiber',
            id: id_prefix + 'silk_fiber'
        },
        {
            target: 'meetyourfight:haunted_bell',
            output: 'meetyourfight:phantoplasm',
            id: id_prefix + 'phantoplasm'
        },
        {
            target: 'meetyourfight:fossil_bait',
            output: 'meetyourfight:mossy_tooth',
            id: id_prefix + 'mossy_tooth'
        },
        {
            target: 'meetyourfight:devils_ante',
            output: 'meetyourfight:fortunes_favor',
            id: id_prefix + 'fortunes_favor'
        }
    ];

    recipes.forEach((recipe) => {
        event
            .custom({
                type: 'masterfulmachinery:machine_process',
                structureId: 'killing_entity_structure',
                controllerId: 'killing_entity',
                outputs: [
                    {
                        type: 'masterfulmachinery:items',
                        data: { item: recipe.output, count: 1 }
                    }
                ],
                inputs: [
                    {
                        type: 'masterfulmachinery:items',
                        data: recipe.weapon ? recipe.weapon : { tag: 'forge:weapons', count: 1 }
                    },
                    {
                        type: 'masterfulmachinery:items',
                        data: { item: recipe.target, count: 1 }
                    }
                ],
                ticks: 1
            })
            .id(recipe.id);
    });
});
