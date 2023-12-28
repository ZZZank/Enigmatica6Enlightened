'use strict';

onEvent('recipes', (event) => {
    const id_prefix = 'enlightened6:recipe_hint_general/';
    const recipes = [
        {
            inputs: ['minecraft:bucket', 'ars_nouveau:mana_jar'],
            outputs: ['ars_nouveau:bucket_of_mana'],
            id: id_prefix + 'bucket_of_mana'
        },
        {
            inputs: [
                'minecraft:ender_pearl',
                'appliedenergistics2:singularity',
                '#enlightened6:explosives/base'
            ],
            outputs: ['2x appliedenergistics2:quantum_entangled_singularity'],
            id: id_prefix + 'quantum_entangled_singularity'
        }
    ];

    recipes.forEach((recipe) => {
        addGeneralRecipeHint(recipe, event);
    });
});
