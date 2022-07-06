import { Apocolypse } from "./zombie-apocalypse"

describe('Apocalypse', () => {
  describe('initialize', () => {
    it('has dimensions n for the given input', () => {
      const apocalypse = new Apocolypse(4, {x: 3, y: 1}, [{x: 0, y: 1}, {x: 1, y: 2}, {x: 1, y: 1}], 'RDRU' )
      expect(apocalypse.gridDimensions).toEqual(4)
    })

    it('has zombie starting position equal to the input starting position', () => {
      const apocalypse = new Apocolypse(4, {x: 3, y: 1}, [{x: 0, y: 1}, {x: 1, y: 2}, {x: 1, y: 1}], 'RDRU' )
      expect(apocalypse.movingZombieLocation).toEqual({x: 3, y: 1})
    })

    it('has creature starting positions equal to the input starting positions', () => {
      const apocalypse = new Apocolypse(4, {x: 3, y: 1}, [{x: 0, y: 1}, {x: 1, y: 2}, {x: 1, y: 1}], 'RDRU' )
      expect(apocalypse.creatureLocations).toEqual([{x: 0, y: 1}, {x: 1, y: 2}, {x: 1, y: 1}])
    })
  })

  describe('Movement', () => {
    it('moves the zombie to the correct location, inside the given grid dimensions', () => {
      const apocalypse = new Apocolypse(4, {x: 3, y: 1}, [], 'RDRU' )
      apocalypse.evaluate()
      expect(apocalypse.movingZombieLocation).toEqual({x: 1, y: 1})
    })
  })
})
