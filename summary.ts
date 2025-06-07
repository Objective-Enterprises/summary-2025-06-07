interface Car {
  maker: string
  distance: number
  speed: number
}






type Vehicle = Omit<Car, 'maker' | 'distance'>


function combine (a: number, b: number) {
  return [a, b]
}

type Combined = ReturnType<typeof combine>