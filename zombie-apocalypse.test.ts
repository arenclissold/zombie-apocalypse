import { Apocolypse } from "./zombie-apocalypse"

describe('Apocalypse', () => {
  describe('Create grid', () => {
    it('has dimensions n for the given input', () => {
      const apocalypse = new Apocolypse(5)
      expect(apocalypse.gridDimensions).toEqual(5)
    })
  })
})
