'use strict';

onEvent('recipes', (event) => {
    const id_prefix = 'enigmatica:base/create/sequenced_assembly/';

    /**
     * @type {{outputs: Internal.ItemStackJS_[], input: Internal.IngredientJS_, transitional: Internal.ItemStackJS_, loops: number, id: string,
     * sequence: ({type: 'deploying',with: Internal.IngredientJS_} | {type: 'filling',with: Internal.FluidStackJS} | {type: 'pressing'} | {type: 'cutting',cuttingTime: number})[]
     * }[]}
     */
    const sim = [
        {
            input: 'minecraft:enchanted_golden_apple',
            outputs: ['artifacts:everlasting_beef'],
            transitional: 'minecraft:enchanted_golden_apple',
            loops: 50,
            sequence: [
                {
                    type: 'deploying',
                    with: ['minecraft:beef']
                },
                {
                    type: 'deploying',
                    with: ['minecraft:beef']
                },
                {
                    type: 'filling',
                    with: Fluid.of('create:potion', 100, {
                        Bottle: 'LINGERING',
                        Potion: 'minecraft:strong_regeneration'
                    })
                },
                {
                    type: 'deploying',
                    with: ['minecraft:beef']
                },
                {
                    type: 'deploying',
                    with: ['minecraft:beef']
                },
                {
                    type: 'pressing'
                }
            ],
            id: `${id_prefix}everlasting_beef`
        }
    ];

    sim.forEach((recipe) => {
        const seq = recipe.sequence.map((process) => {
            if (process.type == 'cutting') {
                return event.recipes.create
                    .cutting(recipe.transitional, recipe.transitional)
                    .processingTime(process.cuttingTime);
            } else if (process.type == 'deploying') {
                return event.recipes.create.deploying(recipe.transitional, [
                    recipe.transitional,
                    process.with
                ]);
            } else if (process.type == 'pressing') {
                return event.recipes.create.pressing(recipe.transitional, recipe.transitional);
            } else if (process.type == 'filling') {
                return event.recipes.create.filling(recipe.transitional, [recipe.transitional, process.with]);
            } else {
                throw 'Invalid process type';
            }
        });
        event.recipes.create
            .sequenced_assembly(recipe.outputs, recipe.input, seq)
            .loops(recipe.loops)
            .transitionalItem(recipe.transitional)
            .id(recipe.id);
    });
    const recipes = [
        /*{
            input: 'input_item_here',
            output: [
                Item.of('6x create:large_cogwheel').withChance(32.0), //withChance sets a weight for the output, default is 1 without it
                Item.of('secondary_outputs').withChance(2.0),
,               'more_secondaries_with_weight_1'
            ],
            transitionalItem: 'transitional_item_here', //required, but can be same as input item apparently
            loops: 1, //required
            sequence: [
                {
                    type: 'sequence_type_here',  //options are deploying, cutting, filling, pressing
                    input: 'input_items_fluids_or_array_here',
                    output: 'output_item_here',
                    processingTime: 50 // for cutting recipes
                }
            ],
            id: 'recipe_id_here'
        }*/
        {
            input: 'mekanism:cardboard_box',
            outputs: ['kubejs:engineering_student_meals'],
            transitionalItem: 'kubejs:partial_engineering_student_meals',
            loops: 60,
            sequence: [
                {
                    type: 'deploying',
                    input: ['kubejs:partial_engineering_student_meals', 'create:builders_tea'],
                    output: 'kubejs:partial_engineering_student_meals'
                },
                {
                    type: 'deploying',
                    input: ['kubejs:partial_engineering_student_meals', 'create:builders_tea'],
                    output: 'kubejs:partial_engineering_student_meals'
                },
                {
                    type: 'deploying',
                    input: ['kubejs:partial_engineering_student_meals', 'sushigocrafting:salmon_maki'],
                    output: 'kubejs:partial_engineering_student_meals'
                },
                {
                    type: 'deploying',
                    input: ['kubejs:partial_engineering_student_meals', 'neapolitan:adzuki_cake'],
                    output: 'kubejs:partial_engineering_student_meals'
                },
                {
                    type: 'deploying',
                    input: ['kubejs:partial_engineering_student_meals', 'neapolitan:mint_milkshake'],
                    output: 'kubejs:partial_engineering_student_meals'
                },
                {
                    type: 'deploying',
                    input: ['kubejs:partial_engineering_student_meals', 'minecraft:enchanted_golden_apple'],
                    output: 'kubejs:partial_engineering_student_meals'
                }
            ],
            id: `${id_prefix}engineering_student_meals`
        },
        {
            input: 'mekanism:cardboard_box',
            outputs: ['kubejs:building_materials'],
            transitionalItem: 'kubejs:partial_building_materials',
            loops: 500,
            sequence: [
                {
                    type: 'deploying',
                    input: ['kubejs:partial_building_materials', '#forge:treated_wood'],
                    output: 'kubejs:partial_building_materials'
                },
                {
                    type: 'deploying',
                    input: ['kubejs:partial_building_materials', '#forge:treated_wood'],
                    output: 'kubejs:partial_building_materials'
                },
                {
                    type: 'deploying',
                    input: ['kubejs:partial_building_materials', '#forge:treated_wood'],
                    output: 'kubejs:partial_building_materials'
                },
                {
                    type: 'deploying',
                    input: ['kubejs:partial_building_materials', '#forge:treated_wood'],
                    output: 'kubejs:partial_building_materials'
                },
                {
                    type: 'deploying',
                    input: ['kubejs:partial_building_materials', 'create:copper_shingles'],
                    output: 'kubejs:partial_building_materials'
                },
                {
                    type: 'deploying',
                    input: ['kubejs:partial_building_materials', 'quark:framed_glass'],
                    output: 'kubejs:partial_building_materials'
                }
            ],
            id: `${id_prefix}building_materials`
        },
        {
            input: 'mekanism:cardboard_box',
            outputs: ['kubejs:landscaping_materials'],
            transitionalItem: 'kubejs:partial_landscaping_materials',
            loops: 250,
            sequence: [
                {
                    type: 'deploying',
                    input: ['kubejs:partial_landscaping_materials', 'quark:turf'],
                    output: 'kubejs:partial_landscaping_materials'
                },
                {
                    type: 'deploying',
                    input: ['kubejs:partial_landscaping_materials', 'quark:turf'],
                    output: 'kubejs:partial_landscaping_materials'
                },
                {
                    type: 'deploying',
                    input: ['kubejs:partial_landscaping_materials', 'quark:turf'],
                    output: 'kubejs:partial_landscaping_materials'
                },
                {
                    type: 'deploying',
                    input: ['kubejs:partial_landscaping_materials', 'quark:turf'],
                    output: 'kubejs:partial_landscaping_materials'
                },
                {
                    type: 'deploying',
                    input: ['kubejs:partial_landscaping_materials', '#minecraft:small_flowers'],
                    output: 'kubejs:partial_landscaping_materials'
                },
                {
                    type: 'deploying',
                    input: ['kubejs:partial_landscaping_materials', '#minecraft:leaves'],
                    output: 'kubejs:partial_landscaping_materials'
                }
            ],
            id: `${id_prefix}landscaping_materials`
        },
        {
            input: 'mekanism:cardboard_box',
            outputs: ['kubejs:construction_tools'],
            transitionalItem: 'kubejs:partial_construction_tools',
            loops: 5,
            sequence: [
                {
                    type: 'deploying',
                    input: ['kubejs:partial_construction_tools', 'pneumaticcraft:jackhammer'],
                    output: 'kubejs:partial_construction_tools'
                },
                {
                    type: 'deploying',
                    input: ['kubejs:partial_construction_tools', 'pneumaticcraft:drill_bit_compressed_iron'],
                    output: 'kubejs:partial_construction_tools'
                },
                {
                    type: 'deploying',
                    input: ['kubejs:partial_construction_tools', 'pneumaticcraft:bandage'],
                    output: 'kubejs:partial_construction_tools'
                },
                {
                    type: 'deploying',
                    input: ['kubejs:partial_construction_tools', 'pneumaticcraft:bandage'],
                    output: 'kubejs:partial_construction_tools'
                },
                {
                    type: 'deploying',
                    input: ['kubejs:partial_construction_tools', 'pneumaticcraft:bandage'],
                    output: 'kubejs:partial_construction_tools'
                },
                {
                    type: 'deploying',
                    input: ['kubejs:partial_construction_tools', 'pneumaticcraft:bandage'],
                    output: 'kubejs:partial_construction_tools'
                }
            ],
            id: `${id_prefix}construction_tools`
        },
        {
            input: 'mekanism:cardboard_box',
            outputs: ['kubejs:foundation_materials'],
            transitionalItem: 'kubejs:partial_foundation_materials',
            loops: 500,
            sequence: [
                {
                    type: 'deploying',
                    input: ['kubejs:partial_foundation_materials', 'immersiveengineering:concrete'],
                    output: 'kubejs:partial_foundation_materials'
                },
                {
                    type: 'deploying',
                    input: ['kubejs:partial_foundation_materials', 'immersiveengineering:concrete'],
                    output: 'kubejs:partial_foundation_materials'
                },
                {
                    type: 'deploying',
                    input: ['kubejs:partial_foundation_materials', 'immersiveengineering:concrete'],
                    output: 'kubejs:partial_foundation_materials'
                },
                {
                    type: 'deploying',
                    input: [
                        'kubejs:partial_foundation_materials',
                        '#immersiveengineering:scaffoldings/steel'
                    ],
                    output: 'kubejs:partial_foundation_materials'
                },
                {
                    type: 'deploying',
                    input: ['kubejs:partial_foundation_materials', 'engineersdecor:clinker_brick_block'],
                    output: 'kubejs:partial_foundation_materials'
                },
                {
                    type: 'deploying',
                    input: ['kubejs:partial_foundation_materials', 'engineersdecor:clinker_brick_block'],
                    output: 'kubejs:partial_foundation_materials'
                }
            ],
            id: `${id_prefix}foundation_materials`
        },
        {
            input: 'mekanism:cardboard_box',
            outputs: ['kubejs:computer_package'],
            transitionalItem: 'kubejs:partial_computer_package',
            loops: 5,
            sequence: [
                {
                    type: 'deploying',
                    input: ['kubejs:partial_computer_package', 'rftoolsbase:tablet'],
                    output: 'kubejs:partial_computer_package'
                },
                {
                    type: 'deploying',
                    input: ['kubejs:partial_computer_package', 'rftoolsbase:tablet'],
                    output: 'kubejs:partial_computer_package'
                },
                {
                    type: 'deploying',
                    input: ['kubejs:partial_computer_package', 'rftoolsbase:tablet'],
                    output: 'kubejs:partial_computer_package'
                },
                {
                    type: 'deploying',
                    input: ['kubejs:partial_computer_package', 'rftoolsbase:tablet'],
                    output: 'kubejs:partial_computer_package'
                }
            ],
            id: `${id_prefix}computer_package`
        },
        {
            input: 'mekanism:cardboard_box',
            outputs: ['kubejs:big_box_o_boom'],
            transitionalItem: 'kubejs:partial_big_box_o_boom',
            loops: 64,
            sequence: [
                {
                    type: 'deploying',
                    input: ['kubejs:partial_big_box_o_boom', 'minecraft:firework_rocket'],
                    output: 'kubejs:partial_big_box_o_boom'
                },
                {
                    type: 'deploying',
                    input: ['kubejs:partial_big_box_o_boom', 'minecraft:firework_rocket'],
                    output: 'kubejs:partial_big_box_o_boom'
                },
                {
                    type: 'deploying',
                    input: ['kubejs:partial_big_box_o_boom', 'minecraft:firework_rocket'],
                    output: 'kubejs:partial_big_box_o_boom'
                },
                {
                    type: 'deploying',
                    input: ['kubejs:partial_big_box_o_boom', 'minecraft:firework_rocket'],
                    output: 'kubejs:partial_big_box_o_boom'
                }
            ],
            id: `${id_prefix}big_box_o_boom`
        },
        {
            input: 'mekanism:cardboard_box',
            outputs: ['kubejs:mimirs_memory_box'],
            transitionalItem: 'kubejs:partial_mimirs_memory_box',
            loops: 64,
            sequence: [
                {
                    type: 'deploying',
                    input: ['kubejs:partial_mimirs_memory_box', 'minecraft:experience_bottle'],
                    output: 'kubejs:partial_mimirs_memory_box'
                },
                {
                    type: 'deploying',
                    input: ['kubejs:partial_mimirs_memory_box', 'minecraft:experience_bottle'],
                    output: 'kubejs:partial_mimirs_memory_box'
                },
                {
                    type: 'deploying',
                    input: ['kubejs:partial_mimirs_memory_box', 'minecraft:experience_bottle'],
                    output: 'kubejs:partial_mimirs_memory_box'
                },
                {
                    type: 'deploying',
                    input: ['kubejs:partial_mimirs_memory_box', 'minecraft:experience_bottle'],
                    output: 'kubejs:partial_mimirs_memory_box'
                }
            ],
            id: `${id_prefix}mimirs_memory_box`
        },
        {
            input: 'mekanism:cardboard_box',
            outputs: ['kubejs:box_of_thankful_dinners'],
            transitionalItem: 'kubejs:partial_box_of_thankful_dinners',
            loops: 60,
            sequence: [
                {
                    type: 'deploying',
                    input: ['kubejs:partial_box_of_thankful_dinners', 'farmersdelight:roast_chicken'],
                    output: 'kubejs:partial_box_of_thankful_dinners'
                },
                {
                    type: 'deploying',
                    input: ['kubejs:partial_box_of_thankful_dinners', 'farmersdelight:stuffed_pumpkin'],
                    output: 'kubejs:partial_box_of_thankful_dinners'
                },
                {
                    type: 'deploying',
                    input: ['kubejs:partial_box_of_thankful_dinners', 'neapolitan:adzuki_curry'],
                    output: 'kubejs:partial_box_of_thankful_dinners'
                },
                {
                    type: 'deploying',
                    input: ['kubejs:partial_box_of_thankful_dinners', 'create:honeyed_apple'],
                    output: 'kubejs:partial_box_of_thankful_dinners'
                },
                {
                    type: 'deploying',
                    input: ['kubejs:partial_box_of_thankful_dinners', 'minecraft:pumpkin_pie'],
                    output: 'kubejs:partial_box_of_thankful_dinners'
                },
                {
                    type: 'deploying',
                    input: ['kubejs:partial_box_of_thankful_dinners', 'farmersdelight:apple_cider'],
                    output: 'kubejs:partial_box_of_thankful_dinners'
                }
            ],
            id: `${id_prefix}box_of_thankful_dinners`
        },
        {
            input: 'mekanism:cardboard_box',
            outputs: ['kubejs:stim_pack'],
            transitionalItem: 'kubejs:partial_stim_pack',
            loops: 30,
            sequence: [
                {
                    type: 'deploying',
                    input: [
                        'kubejs:partial_stim_pack',
                        Item.of('botania:incense_stick', '{brewKey:"botania:emptiness"}')
                    ],
                    output: 'kubejs:partial_stim_pack'
                },
                {
                    type: 'deploying',
                    input: [
                        'kubejs:partial_stim_pack',
                        [
                            Item.of(
                                'ars_nouveau:potion_flask',
                                '{count:8,CustomPotionEffects:[{Ambient:0b,CurativeItems:[{id:"minecraft:milk_bucket",Count:1b}],ShowIcon:1b,ShowParticles:1b,Duration:9600,Id:1b,Amplifier:0b}],Potion:"minecraft:strong_regeneration"}'
                            ),
                            Item.of(
                                'ars_nouveau:potion_flask',
                                '{count:8,CustomPotionEffects:[{Ambient:0b,CurativeItems:[{id:"minecraft:milk_bucket",Count:1b}],ShowIcon:1b,ShowParticles:1b,Duration:450,Id:10b,Amplifier:1b}],Potion:"minecraft:long_swiftness"}'
                            )
                        ]
                    ],
                    output: 'kubejs:partial_stim_pack'
                },
                {
                    type: 'deploying',
                    input: [
                        'kubejs:partial_stim_pack',
                        [
                            Item.of(
                                'ars_nouveau:potion_flask',
                                '{count:8,CustomPotionEffects:[{Ambient:0b,CurativeItems:[{id:"minecraft:milk_bucket",Count:1b}],ShowIcon:1b,ShowParticles:1b,Duration:1800,Id:11b,Amplifier:1b}],Potion:"apotheosis:long_absorption"}'
                            ),
                            Item.of(
                                'ars_nouveau:potion_flask',
                                '{count:8,CustomPotionEffects:[{Ambient:0b,CurativeItems:[{id:"minecraft:milk_bucket",Count:1b}],ShowIcon:1b,ShowParticles:1b,Duration:3600,Id:22b,Amplifier:1b}],Potion:"apotheosis:strong_resistance"}'
                            )
                        ]
                    ],
                    output: 'kubejs:partial_stim_pack'
                },
                {
                    type: 'deploying',
                    input: ['kubejs:partial_stim_pack', 'atum:linen_bandage'],
                    output: 'kubejs:partial_stim_pack'
                },
                {
                    type: 'deploying',
                    input: ['kubejs:partial_stim_pack', 'atum:linen_bandage'],
                    output: 'kubejs:partial_stim_pack'
                },
                {
                    type: 'deploying',
                    input: ['kubejs:partial_stim_pack', 'atum:linen_bandage'],
                    output: 'kubejs:partial_stim_pack'
                }
            ],
            id: `${id_prefix}stim_pack`
        },

        {
            input: 'create:andesite_alloy',
            outputs: [Item.of('12x create:cogwheel')],
            transitionalItem: 'create:incomplete_cogwheel',
            loops: 4,
            sequence: [
                {
                    type: 'deploying',
                    input: ['create:incomplete_cogwheel', '#minecraft:wooden_buttons'],
                    output: 'create:incomplete_cogwheel'
                },
                {
                    type: 'cutting',
                    input: 'create:incomplete_cogwheel',
                    output: 'create:incomplete_cogwheel',
                    processingTime: 50
                }
            ],
            id: 'create:sequenced_assembly/cogwheel'
        },
        {
            input: 'create:andesite_alloy',
            outputs: [Item.of('6x create:large_cogwheel')],
            transitionalItem: 'create:incomplete_large_cogwheel',
            loops: 3,
            sequence: [
                {
                    type: 'deploying',
                    input: ['create:incomplete_large_cogwheel', '#minecraft:planks'],
                    output: 'create:incomplete_large_cogwheel'
                },
                {
                    type: 'deploying',
                    input: ['create:incomplete_large_cogwheel', '#minecraft:wooden_buttons'],
                    output: 'create:incomplete_large_cogwheel'
                },
                {
                    type: 'cutting',
                    input: 'create:incomplete_large_cogwheel',
                    output: 'create:incomplete_large_cogwheel',
                    processingTime: 50
                }
            ],
            id: 'create:sequenced_assembly/large_cogwheel'
        },
        {
            input: '#forge:plates/gold',
            outputs: ['create:precision_mechanism'],
            transitionalItem: 'create:incomplete_precision_mechanism',
            loops: 5,
            sequence: [
                {
                    type: 'deploying',
                    input: ['create:incomplete_precision_mechanism', 'create:cogwheel'],
                    output: 'create:incomplete_precision_mechanism'
                },
                {
                    type: 'deploying',
                    input: ['create:incomplete_precision_mechanism', 'create:large_cogwheel'],
                    output: 'create:incomplete_precision_mechanism'
                },
                {
                    type: 'deploying',
                    input: ['create:incomplete_precision_mechanism', '#forge:nuggets/iron'],
                    output: 'create:incomplete_precision_mechanism'
                }
            ],
            id: 'create:precision_mechanism'
        }
    ];

    recipes.forEach((recipe) => {
        const sequence = [];

        recipe.sequence.forEach((step) => {
            if (step.type == 'deploying') {
                sequence.push(event.recipes.create.deploying(step.output, step.input));
            } else if (step.type == 'cutting') {
                sequence.push(
                    event.recipes.create.cutting(step.output, step.input).processingTime(step.processingTime)
                );
            } else if (step.type == 'filling') {
                sequence.push(event.recipes.create.filling(step.output, step.input));
            } else if (step.type == 'pressing') {
                sequence.push(event.recipes.create.pressing(step.output, step.input));
            }
        });

        const re = event.recipes.create
            .sequenced_assembly(recipe.outputs, recipe.input, sequence)
            .loops(recipe.loops)
            .transitionalItem(recipe.transitionalItem);
        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});
