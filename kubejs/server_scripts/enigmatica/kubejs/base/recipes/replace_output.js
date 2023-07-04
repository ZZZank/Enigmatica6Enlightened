onEvent('recipes', (event) => {
    const recipes = [
        { filter: {}, toReplace: 'thermal:cinnabar', replaceWith: '#forge:gems/cinnabar' },
        { filter: {}, toReplace: 'thermal:sulfur', replaceWith: '#forge:gems/sulfur' },
        { filter: {}, toReplace: 'thermal:apatite', replaceWith: '#forge:gems/apatite' },
        { filter: {}, toReplace: 'thermal:niter', replaceWith: '#forge:gems/niter' },
        { filter: {}, toReplace: 'thermal:bitumen', replaceWith: '#forge:gems/bitumen' },
        { filter: {}, toReplace: 'thermal:coal_coke', replaceWith: '#forge:gems/coal_coke' },
        { filter: {}, toReplace: 'thermal:sawdust', replaceWith: 'emendatusenigmatica:wood_dust' },
        { filter: {}, toReplace: 'appliedenergistics2:silicon', replaceWith: '#forge:gems/silicon' },
        { filter: {}, toReplace: 'create:dough', replaceWith: 'farmersdelight:wheat_dough' },
        { filter: {}, toReplace: 'thermal:rubber', replaceWith: 'industrialforegoing:dryrubber' },
        { filter: {}, toReplace: 'immersiveengineering:slag', replaceWith: 'thermal:slag' },
        {
            filter: { mod: 'dustrial_decor' },
            toReplace: 'minecraft:iron_ingot',
            replaceWith: 'dustrial_decor:rusty_iron_ingot'
        },
        {
            filter: { mod: 'dustrial_decor' },
            toReplace: 'minecraft:iron_nugget',
            replaceWith: 'dustrial_decor:rusty_iron_nugget'
        },
        { filter: {}, toReplace: 'create:bar_of_chocolate', replaceWith: 'neapolitan:chocolate_bar' },
    ];

    recipes.forEach((recipe) => {
        event.replaceOutput(recipe.filter, recipe.toReplace, recipe.replaceWith);
    });
    sharedDies.forEach((die) => {
        event.replaceOutput(
            {},
            `thermal:press_${die.thermalName}_die`,
            `immersiveengineering:mold_${die.immersiveEngineeringName}`
        );
    });
});
