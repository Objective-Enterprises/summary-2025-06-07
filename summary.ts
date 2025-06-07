interface Car {
  maker: string
  distance: number
  speed: number
}

type CarKey = keyof Car

function describe <T extends CarKey> (car: Car, key: T) {
  const value = car[key]
  console.log('The', key, 'is', value)
  return key
}
const result = describe(
  {
    maker: 'Toyota',
    distance: 0,
    speed: 50,
  },
  'maker'
)

const x = Math.random()