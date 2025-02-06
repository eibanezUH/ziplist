function zipList(list1: unknown[], list2: unknown[]): unknown[] {
  const result = [];
  const maxLength = Math.max(list1.length, list2.length);
  if (list1.length === list2.length) {
    for (let i = 0; i < maxLength; i++) {
      if (i < list1.length) {
        result.push(list1[i]);
      }
      if (i < list2.length) {
        result.push(list2[i]);
      }
    }
  }
  return result;
}

function zipListTheFunctionalWay(list1: unknown[], list2: unknown[]): unknown[] {
  return list1.reduce<unknown[]>((acc, curr, i) => acc.concat(curr, list2[i]), []);
}

console.log(zipList([1, 2, 3], ['a', 'b', 'c']));
console.log(zipListTheFunctionalWay([1, 2, 3], ['a', 'b', 'c']));
