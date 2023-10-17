// priority: 900
'use strict';

onEvent('recipes', (event) => {
    buildWoodVariants.forEach((variant) => {
        var sawDust = 'emendatusenigmatica:wood_dust',
            treeBark = 'farmersdelight:tree_bark';

        create_cutting(event, variant, sawDust, treeBark);
        immersiveengineering_sawing(event, variant, sawDust, treeBark);
        mekanism_sawing(event, variant, sawDust);
        thermal_sawing(event, variant, sawDust);
    });
});

function create_cutting(event, variant, sawDust, treeBark) {
    data = {
        recipes: [
            {
                input: variant.logBlock,
                output: variant.logBlockStripped,
                secondaryOutput: treeBark,
                count: 1,
                time: 50
            },
            {
                input: variant.woodBlock,
                output: variant.woodBlockStripped,
                secondaryOutput: treeBark,
                count: 1,
                time: 50
            },
            {
                input: variant.logBlockStripped,
                output: variant.plankBlock,
                secondaryOutput: sawDust,
                count: 6,
                time: 100
            },
            {
                input: variant.woodBlockStripped,
                output: variant.plankBlock,
                secondaryOutput: sawDust,
                count: 6,
                time: 100
            }
        ]
    };

    data.recipes.forEach((recipe) => {
        fallback_id(
            event.recipes.create.cutting({
                type: 'create:cutting',
                ingredients: [
                    {
                        item: recipe.input
                    }
                ],
                results: [
                    {
                        item: recipe.output,
                        count: recipe.count
                    },
                    {
                        item: recipe.secondaryOutput,
                        count: 1
                    }
                ],
                processingTime: recipe.time
            }),
            `enigmatica:base/unification/unify_sawables/create_cutting/`
        );
    });
}

function immersiveengineering_sawing(event, variant, sawDust, treeBark) {
    fallback_id(
        event.recipes.immersiveengineering
            .sawmill(Item.of(variant.plankBlock, 6), variant.logBlockStripped, [
                {
                    stripping: false,
                    output: sawDust
                }
            ])
            .energy(800),
        `enigmatica:base/unification/unify_sawables/immersiveengineering_sawing/`
    );

    fallback_id(
        event.recipes.immersiveengineering
            .sawmill(
                Item.of(variant.plankBlock, 6),
                [variant.logBlock, variant.woodBlock],
                [
                    {
                        stripping: true,
                        output: treeBark
                    },
                    {
                        stripping: false,
                        output: sawDust
                    }
                ],
                variant.logBlockStripped
            )
            .energy(1600),
        `enigmatica:base/unification/unify_sawables/immersiveengineering_sawing/`
    );
}

function mekanism_sawing(event, variant, sawDust) {
    if (variant.modId == 'minecraft') {
        event.remove({
            output: variant.plankBlock,
            mod: 'mekanism',
            type: 'mekanism:sawing'
        });
    }

    if (variant.logBlock == 'byg:withering_oak_log') {
        return;
    }

    var data = {
        recipes: [
            {
                input: variant.logBlock,
                output: variant.plankBlock
            },
            {
                input: variant.woodBlock,
                output: variant.plankBlock
            },
            {
                input: variant.logBlockStripped,
                output: variant.plankBlock
            },
            {
                input: variant.woodBlockStripped,
                output: variant.plankBlock
            }
        ]
    };

    data.recipes.forEach((recipe) => {
        fallback_id(
            event.recipes.mekanism.sawing(
                Item.of(recipe.output, 6),
                recipe.input,
                Item.of(sawDust).chance(0.25)
            ),
            `enigmatica:base/unification/unify_sawables/mekanism_sawing/`
        );
    });
}

function thermal_sawing(event, variant, sawDust) {
    // mod blacklist
    if (
        variant.modId == 'minecraft' ||
        variant.modId == 'byg' ||
        variant.modId == 'autumnity' ||
        variant.modId == 'upgrade_aquatic'
    ) {
        return;
    }

    var data = {
        recipes: [
            {
                input: variant.logBlock,
                output: variant.plankBlock
            },
            {
                input: variant.woodBlock,
                output: variant.plankBlock
            },
            {
                input: variant.logBlockStripped,
                output: variant.plankBlock
            },
            {
                input: variant.woodBlockStripped,
                output: variant.plankBlock
            }
        ]
    };

    data.recipes.forEach((recipe) => {
        fallback_id(
            event.recipes.thermal
                .sawmill([Item.of(recipe.output, 6), Item.of(sawDust).chance(1.25)], recipe.input)
                .energy(1000),
            `enigmatica:base/unification/unify_sawables/thermal_sawing/`
        );
    });
}
