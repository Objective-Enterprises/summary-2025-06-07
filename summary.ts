interface Vehicle {
  distance: number
  speed: number
}

interface Car extends Vehicle {
  maker: string
}

interface Airplane extends Vehicle {
  altitude: number
  seat: 200
}

const car: Car = {
  maker: 'Toyota',
  distance: 0,
  speed: 50
}

class Boat implements Vehicle {
  distance: number
  private seats: number
  speed: number

  constructor (speed: number) {
    this.distance = 0
    this.seats = 2
    this.speed = speed
  }
}

const boat = new Boat(100)

function travel (vehicle: Vehicle) {
}
travel(boat)