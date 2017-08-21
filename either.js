const Right = x =>
(
    {
        map: f => Right(f(x)),
        inspect: () => `Right ${x}`,
        fold: (f, g) => g(x)
    }
);

const Left = x =>
(
    {
        map: f => Left(x),
        inspect: () => `Left ${x}`,
        fold: (f, g) => f(x)
    }
);

const findLength = s => {    
    return (s != null) ? Right(s.length) : Left(s);
};
const dbl = x => x * 2;
const prop = key => obj => obj[key];
const compose = (f, g) => x => f(g(x));

const getNameLength = compose(findLength, prop('name'));

const showError = e => 'Please supply an object containing property name';
const sayThanks = v => 'Thanks your name contains half of ' + v + ' characters';

console.log(getNameLength({name: 'Manish'}).map(dbl).fold(showError, sayThanks));
console.log(getNameLength({}).map(dbl).fold(showError, sayThanks));


