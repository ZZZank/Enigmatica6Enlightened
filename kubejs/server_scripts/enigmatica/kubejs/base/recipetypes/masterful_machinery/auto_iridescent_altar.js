'use strict';

onEvent('recipes', (event) => {
    const id_prefix = 'enigmatica:base/masterful_machinery/auto_iridescent_altar/';
    const recipes = [
    ];

    recipes.forEach((recipe) => {
        recipe.inputs = recipe.inputs.map((val) => toMMJson(val));
        recipe.outputs = recipe.outputs.map((val) => toMMJson(val));
        recipe.type = 'masterfulmachinery:machine_process';
        recipe.structureId = 'auto_iridescent_altar_structure';
        recipe.controllerId = 'auto_iridescent_altar';
        event.custom(recipe).id(recipe.id);
    });
});
