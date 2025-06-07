// const prius = {
//   maker: 'Toyota',
//   distance: 0,
//   speed: 50
// }

// type Car = typeof prius

interface Car {
  maker: string
  distance: number
  speed: number
}

type CarKey = keyof Car // 'maker' | 'distance' | 'speed'
const x: CarKey = 'speed'

const civic: Car = {
  maker: 'Honda',
  distance: 100,
  speed: 20
}

function describeCar (car: Car, key: CarKey) {
  const value = car[key]
  console.log('The', key, 'is', value)
}
describeCar(civic, 'maker')