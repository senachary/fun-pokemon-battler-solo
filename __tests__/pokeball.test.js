const { Pokeball } = require("../classes/pokeball.js");
const { Charmander } = require("../classes/charmander.js");

describe("Pokeball class", () => {
  test("Create the Pokeball class", () => {
    //Arrange
    const testBall = new Pokeball();
    //assert
    expect(testBall).toBeInstanceOf(Pokeball);
  });
  test("Default state of Pokeball is empty", () => {
    //Arrange
    const testBall = new Pokeball();
    //assert
    expect(testBall.capturedPokemon).toBe(null);
  });
  test("Create methods on Pokeball", () => {
    //Arrange
    const testBall = new Pokeball();
    //assert
    expect(Object.getPrototypeOf(testBall)).toHaveProperty("throw");
    expect(Object.getPrototypeOf(testBall)).toHaveProperty("isEmpty");
    expect(Object.getPrototypeOf(testBall)).toHaveProperty("contains");
  });
  describe("throw()", () => {
    test("Takes Pokemon as an arg. If pokeball empty will capture", () => {
      //Arrange
      const testBall = new Pokeball();
      const testCharmander = new Charmander();

      //Assert
      expect(testBall.capturedPokemon).toBe(null);
      testBall.throw(testCharmander);
      expect(testBall.capturedPokemon).toBe(testCharmander);
    });
      test('Should log a capture phrase', () => {
          //Arrange
        const testBall = new Pokeball();
          const testCharmander = new Charmander();
          const logSpy = jest.spyOn(console, 'log')
          //Act
          testBall.throw(testCharmander);
          //Assert
          expect(logSpy).toHaveBeenCalledWith("You caught Charmander!")
          logSpy.mockRestore()
      })
      test('If invoked with no arg, return stored Pokemon', () => {
          //Arrange
          const testBall = new Pokeball();
          const testCharmander = new Charmander();
          //Act
          testBall.throw(testCharmander) //capture Charmander
          const storedPokemon = testBall.capturedPokemon
          //Assert
          expect(testBall.throw()).toBe(storedPokemon)
      })
      test('Should log a stored Pokemon phrase when thrown', () => {
        //Arrange
        const testBall = new Pokeball();
        const testCharmander = new Charmander();
        const logSpy = jest.spyOn(console, 'log')
        //Act
        testBall.throw(testCharmander) //capture Charmander
          //const storedPokemon = testBall.capturedPokemon
          testBall.throw()
        //Assert
          expect(logSpy).toHaveBeenCalledWith("GO Charmander!!")
          logSpy.mockRestore()
      })
      test('Should log phrase to indicate if Pokeball is empty and thrown without capturing', () => {
        //Arrange
        const testBall = new Pokeball();
       
        const logSpy = jest.spyOn(console, 'log')
        //Act
        testBall.throw() //no capture made and Pokeball is empty
        //Assert
          expect(logSpy).toHaveBeenCalledWith("You don't have a Pokemon!")
          logSpy.mockRestore()
    })
      
  });
});
