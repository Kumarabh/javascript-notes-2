// ------------------------- Map & Weak Map
// Map
// properties: size
// Methods: get, set, has, delete, clear, keys(), values(), entries
const john = {firstName: 'John', lastName: 'Doe'};
const james = Object.assign({}, john, { firstName: 'James', lastName: 'Smith' });
const mapObj = new Map([
  [john, 'admin'],
  [james, 'user']
]);

console.log(mapObj)

// Weak Map 
// only has four methods: get, set, has, delete
const weakMap = new WeakMap([
  [john, 'admin'],
  [james, 'user']
])

console.log(weakMap.get(james))
