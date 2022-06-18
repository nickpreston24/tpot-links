/* Should give an error when the specified key is not the correct type.
 */
export function prop<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

// Array.prototype.flat = (arr: []) => arr.reduce((acc, value) => acc.concat(value), [])

declare global {
  interface Array<T> {
    remove(elem: T): Array<T>;
  }
}

if (!Array.prototype.remove) {
  Array.prototype.remove = function <T>(this: T[], elem: T): T[] {
    // console.log('hello from remove', this)
    let next = this.filter((e) => e !== elem);
    next.push(6 as any);
    // console.log(this);
    return next;
  };
}

const testarray = [1, 2, 3, 4, 5];
testarray.remove(3); //.remove(2);
//   console.log('TESTARRAY', testarray)

/**
 * Checks the type of an object casted to said type.
 * Usage:
 * const idOfType = identity as { (x: MyType): MyType };
 */
export const identity = <T>(x: T) => x;

// console.log('devmode', devmode);

/**Random Int */
export const random = {
  Boolean: () => Math.random() > 0.5,
  Float: (limit = 1) => {
    let float = parseFloat((Math.random() * limit).toFixed(2));
    return float;
  },
  Int: (limit: number) => Math.ceil(Math.random() * limit),
  Name: (prefix: string, postFix: string, limit = 100) =>
    `${prefix} ${random.Int(limit)} ${postFix}`,
  Paragraph: () => lorems[random.Int(lorems.length + 1)],
  Shuffle: (array: []) => {
    if (array == null) array = [];
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  },
};

const lorems = [
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, veniam voluptatem. Aliquam impedit eaque eveniet eligendi id quia nostrum accusamus, excepturi dolor, alias animi? Assumenda necessitatibus error nesciunt blanditiis nihil.",
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro ad, voluptate culpa esse, unde minima incidunt asperiores nostrum reprehenderit sapiente nulla natus dolore tenetur non cum facere perspiciatis tempore consequuntur!",
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto magni quaerat impedit provident odio dolorum non obcaecati eos deserunt eaque aut sequi aliquam officia porro eius minima, iste nulla doloribus!",
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta sapiente distinctio culpa sed voluptatibus voluptates rem dolore molestias placeat! A exercitationem maxime est sapiente accusamus perferendis qui odio maiores at!",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque eveniet modi, ex veniam architecto repellendus pariatur magnam expedita fugit necessitatibus accusamus culpa laudantium repudiandae ea, natus quis vitae laborum aliquid?",
];
