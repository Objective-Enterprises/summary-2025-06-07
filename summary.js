"use strict";
// const prius = {
//   maker: 'Toyota',
//   distance: 0,
//   speed: 50
// }
const x = 'speed';
const civic = {
    maker: 'Honda',
    distance: 100,
    speed: 20
};
function describeCar(car, key) {
    const value = car[key];
    console.log('The', key, 'is', value);
}
describeCar(civic, 'maker');
