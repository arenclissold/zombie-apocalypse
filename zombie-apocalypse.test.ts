import { Apocolypse } from "./zombie-apocalypse"

describe('Apocalypse', () => {
  describe('initialize', () => {
    it('has dimensions n for the given input', () => {
      const apocalypse = new Apocolypse(4, [3, 1], [], '' )
      expect(apocalypse.gridDimensions).toEqual(4)
    })

    it('has zombie starting position equal to the input starting position', () => {
      const apocalypse = new Apocolypse(4, [3, 1], [], '' )
      expect(apocalypse.zombies[0].location).toEqual([3, 1])
    })

    it('has creature starting positions equal to the input starting positions', () => {
      const apocalypse = new Apocolypse(4, [3, 1], [[0, 1], [1, 2], [1, 1]], '' )
      expect(apocalypse.creatureLocations).toEqual([[0, 1], [1, 2], [1, 1]])
    })
  })

  describe('Movement', () => {
    it('moves the zombie to the correct location, inside the given grid dimensions', () => {
      const apocalypse = new Apocolypse(4, [3, 1], [], 'RDRU' )
      apocalypse.evaluate()
      expect(apocalypse.zombies[0].location).toEqual([1, 1])
    })

    it('creates zombies for creatures that are passed through', () => {
      const apocalypse = new Apocolypse(4, [3, 1], [[0, 1], [1, 2], [1, 1]], 'RDRU' )
      apocalypse.evaluate()
      expect(apocalypse.zombies.length).toEqual(4)
    })

    it('creatures are removed from creatureLocations once turned into a zombie', () => {
      const apocalypse = new Apocolypse(4, [3, 1], [[0, 1], [1, 2], [1, 1]], 'RDRU' )
      apocalypse.evaluate()
      expect(apocalypse.creatureLocations.length).toEqual(0)
    })

    it('new zombies move to their correct locations', () => {
      const apocalypse = new Apocolypse(4, [3, 1], [[0, 1], [1, 2], [1, 1]], 'RDRU' )
      apocalypse.evaluate()
      expect(apocalypse.zombies[1].location).toEqual([2, 1])
      expect(apocalypse.zombies[2].location).toEqual([3, 2])
      expect(apocalypse.zombies[3].location).toEqual([3, 1])
    })
  })
})
