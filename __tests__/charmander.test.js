const {Charmander} = require('../classes/charmander')
const { FireType } = require('../classes/pokemon-types')


describe('Charmander', () => {
    test('Should be a FireType', () => {
        //Arrange
        const charmander = new Charmander()
        //Assert
        expect(charmander).toBeInstanceOf(FireType)
    })
    test('Default move should be ember', () => {
        //Arrange
        const charmander = new Charmander()
        //Assert
        expect(charmander.move).toBe("ember")
    })
    test('Default properties to be Charmander/44/17', () => {
        //Arrange
        const charmander = new Charmander()
        //Assert
        expect(charmander.name).toBe("Charmander")
        expect(charmander.hitPoints).toBe(44)
        expect(charmander.attackDamage).toBe(17)
    })
})