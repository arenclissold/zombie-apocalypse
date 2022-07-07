type Location = [number, number]
type Instruction = 'U' | 'D' | 'L' | 'R'

export class Zombie {
  location: Location

  constructor(location: Location) {
    this.location = location
  }
}

export class Apocolypse {
  gridDimensions: number
  zombies: Zombie[]
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
    this.creatureLocations = creatureLocations
    this.instructions = instructions.split('')
    this.zombies = [new Zombie(zombieStart)]
  }

  createZombie(creatureLocation: Location): void {
    const creatureLocationCopy: Location = [...creatureLocation]
    this.zombies.push(new Zombie(creatureLocationCopy))
  }

  evaluate(): void {
    // iterate over zombies, a for loop must be used here as we are adding to the array while iterating
    let zombieIndex = 0
    for (let zombie of this.zombies) {
      this.instructions.forEach((instruction: Instruction) => {
        // move zombie
        switch (instruction) {
          case 'U':
            zombie.location[1] -= 1
            break;
          case 'D':
            zombie.location[1] += 1
            break;
          case 'L':
            zombie.location[0] -= 1
            break;
          case 'R':
            zombie.location[0] += 1
            break;
        }

        // check if zombie has gone out of bounds and correct location if it has
        if (zombie.location[0] < 0) {
          zombie.location[0] += this.gridDimensions
        } else if (zombie.location[1] < 0) {
          zombie.location[1] += this.gridDimensions
        } else if (zombie.location[0] > this.gridDimensions - 1) {
          zombie.location[0] -= this.gridDimensions
        } else if (zombie.location[1] > this.gridDimensions - 1) {
          zombie.location[1] -= this.gridDimensions
        }
        console.log(`Zombie ${zombieIndex} moved to: ${zombie.location}`)
        // check if in creature location
        if (this.creatureLocations.some((creatureLocation) => arraysEqual(creatureLocation, zombie.location))) {
          console.log(`Creature infected at ${zombie.location}`)
          this.createZombie(zombie.location)
          const filtered = this.creatureLocations.filter(creatureLocation => !arraysEqual(creatureLocation, zombie.location))
          this.creatureLocations = filtered
        }
      })
      zombieIndex++
    }
    console.log("Zombie positions:")
    this.zombies.forEach((zombie) => console.log(zombie.location))
    console.log("Creature positions:")
    if (this.creatureLocations.length) {
      this.creatureLocations.forEach((creatureLocation) => console.log(creatureLocation))
    } else {
      console.log("none")
    }
  }
}

function arraysEqual(a: Location, b: Location): boolean {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length !== b.length) return false;

  for (let i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}
