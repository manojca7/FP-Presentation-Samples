const findLength = s => s.length;
const dbl = x => x * 2;
const prop = key => obj => obj[key];
const compose = (f, g) => x => f(g(x));

const getNameLength = compose(findLength, prop('name'));
console.log(getNameLength({name: 'Manish'}));

const getDoubleOfNameLength = compose(dbl, getNameLength);
console.log(getDoubleOfNameLength({name : 'Manish'}));

