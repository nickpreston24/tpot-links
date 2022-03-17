export class UniqueArray extends Array {
  constructor(...args: any[]) {
    super(...new Set(args));
  }
  push(...args: any[]) {
    for (const a of args) if (!this.includes(a)) super.push(a);
    return this.length;
  }
  unshift(...args: any[]) {
    for (const a of args.reverse()) if (!this.includes(a)) super.unshift(a);
    return this.length;
  }
  concat(...args: any[]) {
    var r = new UniqueArray(...this);
    for (const a of args) r.push(...a);
    return r;
  }
}

export const unique = (array: [], field = "") => {
  return array.reduce((accumulator, current) => {
    if (!accumulator.includes(current[field])) {
      accumulator.push(current[field]);
    }
    return accumulator;
  }, []);
};

export const deepCount = (arr = []): number => {
  return arr.reduce((acc, val) => {
    return acc + (Array.isArray(val) ? deepCount(val) : 0);
  }, arr.length);
};

// export function deepCount(obj: any, level: number, r: any) {
//   if (!obj) return 0;
//   level = level || 0;
//   return Object.keys(obj).reduce(function (acc, key) {
//     acc[level] = (acc[level] || 0) + 1;
//     typeof obj[key] === "object" && deepCount(obj[key], level + 1, acc);
//     return acc;
//   }, r || []);
// }

const emptyValues = new Set(["", null, undefined]);

/**
 * Gets an array of empty non-zero values in an object
 */
export const countEmpty = (obj: object) =>
  Object.values(obj).reduce((acc: any, curr) => acc + emptyValues.has(curr), 0);

export const falsies = (obj: object) =>
  Object.values(obj).reduce((acc: any, curr) => acc + !curr, 0);

declare global {
  interface Array<T> {
    take(count: any): Array<T>;
    remove(o: T): Array<T>;
    first(o: T): Array<T>;
    last(o: T): Array<T>;
    flatten(arr: Array<T>): Array<T>;
  }
}

Array.prototype.take = function (count = 0) {
  return this.slice(0, count);
};

Array.prototype.remove = function (o) {
  // code to remove "o"
  return this;
};

Array.prototype.first = function () {
  return this[0];
};
Array.prototype.last = function () {
  return this[this.length - 1];
};

export function concat(...args: any[]) {
  return args.reduce((acc, val) => [...acc, ...val]);
}

Array.prototype.flatten = function <T>(arr: Array<T> = []): Array<T> {
  return arr.reduce((acc, value) => acc.concat(value), new Array<T>());
};

// const nums = [1, 2, 3, 5, 6, 7]
// console.log('take', nums.take(3))
// console.log('last', nums.last(3))
// console.log('first', nums.first(3))
