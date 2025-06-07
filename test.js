const prius = {
  maker: 'Toyota',
  distance: 0,
  speed: 50
}

function describeCar (car, key) {
  const value = car[key]
  console.log('The', key, 'is', value)
}
describeCar(prius, 'maker')