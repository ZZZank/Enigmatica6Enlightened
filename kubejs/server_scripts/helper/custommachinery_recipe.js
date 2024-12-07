// priority: 1005
'use strict';

/**
 * @param {$CustomMachineJSRecipeBuilder_} builder
 * @param {CMRecipeHint} recipe
 */
const addCMRecipe = (builder, recipe) => {
    //pre-processing for chance display
    if (typeof recipe.catalyst != 'string') {
        recipe.catalyst = withChanceInName(recipe.catalyst);
    }
    recipe.inputs = recipe.inputs.map((input) =>
        typeof input == 'string' ? input : withChanceInName(input)
    );
    recipe.outputs = recipe.outputs.map((output) => withChanceInName(Item.of(output)));
    //catalyst
    if (!recipe.catalyst) {
        builder.requireItem(Item.of('itemfilters:always_true'), 'catalyst');
    } else if (typeof recipe.catalyst == 'string') {
        let parsed = toJsonWithCount(recipe.catalyst);
        if (parsed.tag) {
            builder.requireItemTag(parsed.tag, parsed.count, 'catalyst');
        } else {
            builder.requireItem(Item.of(parsed.item, parsed.count), 'catalyst');
        }
    } else {
        builder.requireItem(recipe.catalyst);
    }
    //inputs
    for (let input of recipe.inputs) {
        if (typeof input == 'string') {
            let parsed = toJsonWithCount(input);
            if (parsed.tag) {
                builder.requireItemTag(parsed.tag, parsed.count);
            } else {
                builder.requireItem(Item.of(parsed.item, parsed.count));
            }
        } else {
            builder.requireItem(input);
        }
    }
    //outputs
    for (let output of recipe.outputs) {
        builder.produceItem(output);
    }
    //id
    builder.id(recipe.id);
    if (recipe.additional !== undefined) {
        recipe.additional(builder);
    }
};

function addGeneralRecipeHint(recipe, event, additional) {
    const builder = event.recipes.custommachinery.custom_machine('enlightened6:recipe_hint_general', 1).jei();
    addCMRecipe(builder, recipe);
}

/**
 * Gets a ItemStackJS with its `chance` property displayed in its name, or itself if
 * its chance is not specified.
 *
 * `chance` will be displayed in `{name} {chance}%` format
 * @param {Internal.ItemStackJS} item
 */
const withChanceInName = (item) => {
    const chance = item.getChance();
    if (!chance) {
        return item;
    }
    return item.withName(item.name.append(text.of(' ' + (chance * 100).toPrecision(3) + '%').gray()));
};
