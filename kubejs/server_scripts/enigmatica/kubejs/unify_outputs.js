// priority: 900
'use strict';
/*
    This scripts unifies the output of recipes.

    It uses three arrays that define what to unify into what. 
    You can find those arrays in the constants/materials.js script

    The functions used can be found in the functions.js script, 
    in the same directory as this script is in.

    You may use this script and modify it as you see fit, as
    long as you do not claim to have made it. Attribution is
    appreciated, but not required.
*/
onEvent('recipes', (event) => {
    materialsToUnify.forEach((material) => {
        typesToUnify.forEach((type) => {
            if (!entryIsBlacklisted(material, type)) {
                const tagString = `#forge:${type}s/${material}`;
                const tag = Ingredient.of(tagString);
                if (tag.getCount() > 1) {
                    event.replaceOutput(tagString, getPreferredItemInTag(tag));
                }
            }
        });
    });
});
