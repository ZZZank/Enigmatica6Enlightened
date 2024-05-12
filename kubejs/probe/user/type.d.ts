'use strict';

type ShapedRecipeJSType = {
    output: Internal.ItemStackJS_,
    pattern: string[],
    key: { [x in string]: Internal.IngredientJS_ },
    id: string
}

type ShapedlessRecipeJSType = {
    output: Internal.ItemStackJS_,
    inputs: Internal.IngredientJS_[],
    id: string
}