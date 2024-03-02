'use strict';

onEvent('recipes', (event) => {
    if (global.isNormalMode) {
        return;
    }
    const id_prefix = 'enlightened6:recipe_hint_general/';
    /**
     * @type {{inputs:(string|Internal.ItemStackJS)[],catalyst:''|string|Internal.ItemStackJS,
     * outputs:Internal.ItemStackJS_[],id:string}[]}
     */
    const recipes = [
        {
            inputs: ['kubejs:heavy_machinery_schematics'],
            catalyst: 'kubejs:heavy_machinery_schematics',
            outputs: [
                'immersiveengineering:assembler',
                'immersiveengineering:arc_furnace',
                'immersivepetroleum:cokerunit',
                'immersiveengineering:crusher',
                'immersivepetroleum:distillationtower',
                'immersiveengineering:lightning_rod',
                'immersivepetroleum:hydrotreater'
            ],
            id: id_prefix + 'heavy_machinery_schematics'
        },
        {
            inputs: ['kubejs:medium_machinery_schematics'],
            catalyst: 'kubejs:medium_machinery_schematics',
            outputs: [
                'immersiveengineering:squeezer',
                'immersiveengineering:refinery',
                'immersivepetroleum:pumpjack',
                'immersiveengineering:mixer',
                'immersiveengineering:metal_press',
                'immersiveengineering:fermenter',
                'immersiveengineering:excavator',
                'immersiveengineering:diesel_generator',
                'immersiveengineering:auto_workbench',
                'immersiveengineering:sawmill'
            ],
            id: id_prefix + 'medium_machinery_schematics'
        }
    ];

    recipes.forEach((recipe) => {
        addGeneralRecipeHint(recipe, event);
    });
});
