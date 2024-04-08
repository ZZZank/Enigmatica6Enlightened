'use strict';

declare function randomOf<T>(inputs: T[] | Internal.Collection<T>): T;

/**
 *
 * @param {T[]} arr the array to be splited into "pages"
 * @param {number} pageSize the max size of spilitted parts of `arr`
 * @returns {T[][]} the paged array containing spilitted parts
 */
declare function toPagedArray<T>(arr: T[], pageSize: number): T[][];

/**
 * Get the "biggest" element among provided entries, "big" is defined by `comparator`,
 * `comparator(a, b) > 0` means a>b
 * @param list provided entries
 * @param comparator If not specified, will use `(a, b) => a - b`
 * @returns the "biggest" entry
 */
declare function maxOf<T>(list: T[], comparator: (a: T, b: T) => 1 | -1 | 0): T;
declare function maxOf<T>(list: T[]): T;

type CMRecipeHint = {
    inputs: (string | Internal.ItemStackJS)[];
    catalyst: string | Internal.ItemStackJS;
    outputs: Internal.ItemStackJS_[];
    additional?: (a: Internal.CustomMachineJSRecipeBuilder) => void;
    id: string;
};

declare function addGeneralRecipeHint(
    recipe: CMRecipeHint,
    event: Internal.RecipeEventJS,
    additional: (a: Internal.CustomMachineJSRecipeBuilder) => void
): void;
declare function addGeneralRecipeHint(recipe: CMRecipeHint, event: Internal.RecipeEventJS): void;
