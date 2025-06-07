class Motorcycle <T> {
  distance: number
  speed: number
  rider: string
  data: T

  constructor (speed: number, rider: string, data: T) {
    this.speed = speed
    this.rider = rider
    this.data = data
    this.distance =0
  }

  report (): T {
    // console.log('The safety rating is:', this.data.safetyRating)
    return this.data
  }
}

const first = new Motorcycle(100, 'Dorothy', 'Very safe')
console.log(first.data)

const second = new Motorcycle<{ safetyRating: number }>(
  50,
  'Zelda',
  { safetyRating: 5 }
  // 'Very safe'
)
console.log(second.data.safetyRating)
const result = second.report()