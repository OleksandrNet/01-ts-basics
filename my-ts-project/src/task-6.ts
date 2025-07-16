console.log(`________________Task 6_________________`);

function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}

const num = getFirstElement<number>([1, 2, 3]); // 1
const str = getFirstElement<string>(["a", "b", "c"]); // "a"
const bln = getFirstElement<boolean>([true, false, true]); // true

console.log(num, str, bln);
