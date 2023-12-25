'use strict';

onEvent('recipes', (event) => {
    const id_prefix = 'enlightened6:recipe_hint_general/';
    const recipes = [
        {
            inputs: ['environmental:koi_bucket'],
            outputs: ['bloodmagic:slate_ampoule', 'aquaculture:fish_bones'],
            id: id_prefix + 'koi'
        }
    ];

    recipes.forEach((recipe) => {
        addGeneralRecipeHint(recipe, event);
    });
});

/**
 *
 * @param {{inputs:(string|{type?:string,data:{},chance?:number})[],outputs:(string|{type?:string,data:{},chance?:number})[],id:string}} recipe
 * @param {Internal.RecipeEventJS} event
 */
function addGeneralRecipeHint(recipe, event) {
    let proc = {
        type: 'masterfulmachinery:machine_process',
        structureId: 'recipe_hint_general_structure',
        controllerId: 'recipe_hint_general',
        outputs: recipe.outputs.map((output) => {
            if (typeof output != 'string') {
                if (!output.type) {
                    output.type = 'masterfulmachinery:items';
                }
                return output;
            }
            return {
                type: 'masterfulmachinery:items',
                data: toJsonWithCount(output)
            };
        }),
        inputs: recipe.inputs.map((input) => {
            if (typeof input != 'string') {
                if (!input.type) {
                    input.type = 'masterfulmachinery:items';
                }
                return input;
            }
            return {
                type: 'masterfulmachinery:items',
                data: toJsonWithCount(input)
            };
        }),
        ticks: 1
    };

    event.custom(proc).id(recipe.id);
}
