'use strict'

var Container = function (x) {
    this._value = x;
};

Container.of = function (x) {
    return new Container(x);
};

Container.prototype.isNothing = function () {
    return (this._value === null || this._value === undefined);
}

Container.prototype.map = function (f) {
    return this.isNothing() ? new Container(this._value) : new Container(f(this._value));
};


const getStrLength = s => s.length;
const dbl = n => n * 2;

const trace = key => val => {
    console.log(key, val);
    return val;
};

Container.of('Manish').map(getStrLength).map(dbl).map(trace('Final Output-->'));
// will not print, since it's undefined so map does not get called.
Container.of(undefined).map(getStrLength).map(dbl).map(trace('Final Output-->'));