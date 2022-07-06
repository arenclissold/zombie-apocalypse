interface Location {
  x: number;
  y: number;
}
type Instruction = 'U' | 'D' | 'L' | 'R'

export class Apocolypse {
  gridDimensions: number
  movingZombieLocation: Location
  creatureLocations: Location[]
  instructions: Instruction[]

  constructor(
    gridDimensions: number,
    zombieStart: Location,
    creatureLocations: Location[],
    instructions: any
  )
  {
    this.gridDimensions = gridDimensions
    this.movingZombieLocation = zombieStart
    this.creatureLocations = creatureLocations
    this.instructions = instructions.split('')
  }

  createZombie(): void {

  }

  evaluate(): void {
    this.instructions.forEach((instruction: Instruction) => {
      // move zombie
      switch (instruction) {
        case 'U':
          this.movingZombieLocation.y += 1
          break;
        case 'D':
          this.movingZombieLocation.y -= 1
          break;
        case 'L':
          this.movingZombieLocation.x -= 1
          break;
        case 'R':
          this.movingZombieLocation.x += 1
          break;
      }

      // check if zombie has gone out of bounds and correct location if it has
      if (this.movingZombieLocation.x < 0) {
        this.movingZombieLocation.x += this.gridDimensions
      } else if (this.movingZombieLocation.y < 0) {
        this.movingZombieLocation.y += this.gridDimensions
      } else if (this.movingZombieLocation.x > this.gridDimensions) {
        this.movingZombieLocation.x -= this.gridDimensions
      } else if (this.movingZombieLocation.y > this.gridDimensions) {
        this.movingZombieLocation.y -= this.gridDimensions
      }
      // check if in creature location
      if (this.creatureLocations.includes(this.movingZombieLocation)) {

      }
    })
  }
}
