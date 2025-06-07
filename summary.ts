interface Car {
  maker: string
  distance: number
  speed: number
}

const car: Car = {
  maker: 'Toyota',
  distance: 0,
  speed: 50
}

class Boat {
  private password = '1234'
  private seats: number
  private sailCount = 0
  speed: number

  constructor (speed: number) {
    this.seats = 2
    this.speed = speed
  }

  private congratulate () {
    console.log('You sailed this boat more than 10 times!')
  }

  sail () {
    this.sailCount += 1
    if (this.sailCount > 10) {
      this.congratulate()
    }
  }
}

const boat = new Boat(100)
// boat.congratulate()
// boat.sailCount = 100
boat.sail()
boat.sail()
boat.sail()