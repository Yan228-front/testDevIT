function get(val, path) {
  const keys = path.split(".");
  for (const key of keys) {
    if (val === null || val === undefined) break;
    val = val[key];
  }
  return val;
}

let arr = [
  { a: { b: [{ c: 4 }, { c: 5 }] } },
  { a: { b: [{ c: 6 }, { c: 7 }] } },
];

let obj = { a: { b: { c: 5 } } };

console.log(get(obj, "a.b", null));
console.log(get(arr, "0.a.b.1.c", null));
