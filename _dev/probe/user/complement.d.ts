
declare function randomOf<T>(inputs: T[]|Internal.Collection<T>): T;
/**
 *
 * @param {T[]} arr the array to be splited into "pages"
 * @param {number} pageSize the max size of spilitted parts of `arr`
 * @returns {T[][]} the paged array containing spilitted parts
 */
declare function toPagedArray<T>(arr: T[], pageSize: number): T[][];
/**
 * @param comparator If not specified, will use `(a, b) => a - b`
 */
declare function maxOf<T>(list: T[], comparator: ((a:T,b:T)=>1|-1|0)|null): T

