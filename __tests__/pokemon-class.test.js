const { Pokemon } = require("../classes/pokemon-class.js");

describe("Pokemon class", () => {
  describe("Pokemon class properties", () => {
    test("Create a Pokemon object from a Pokemon class", () => {
      //Arrange
      const testPokemon = new Pokemon();
      //Act
      //Assert
      expect(testPokemon).toBeInstanceOf(Pokemon);
    });
    test("Create a Pokemon with the correct properties", () => {
      //Arrange
      const testPokemon = new Pokemon("somePokemon", 44, 17, "lightning");
      //Act
      expect(testPokemon).toHaveProperty("name", "somePokemon");
      expect(testPokemon).toHaveProperty("hitPoints", 44);
      expect(testPokemon).toHaveProperty("attackDamage", 17);
      expect(testPokemon).toHaveProperty("move", "lightning");
    });
    test("Create a Pokemon with and default move if none input", () => {
      //Arrange
      const testPokemon = new Pokemon("anotherPokemon", 20, 15);
      //Act
      expect(testPokemon).toHaveProperty("name", "anotherPokemon");
      expect(testPokemon).toHaveProperty("hitPoints", 20);
      expect(testPokemon).toHaveProperty("attackDamage", 15);
      expect(testPokemon).toHaveProperty("move", "tackle");
    });
  });
  describe("Pokemon class methods", () => {
    test("Pokemon class has the correct methods", () => {
      //Arrange
      const testPokemon = new Pokemon();
      //Act
      //Assert
      expect(testPokemon).toHaveProperty("takeDamage");
      expect(testPokemon).toHaveProperty("useMove");
      expect(testPokemon).toHaveProperty("hasFainted");
    });
    test("Pokemon class methods belong to the prototype object", () => {
      //Arrange
      const testPokemon = new Pokemon();
      //Act
      //Assert
      expect(Object.getPrototypeOf(testPokemon)).toHaveProperty("takeDamage");
      expect(Object.getPrototypeOf(testPokemon)).toHaveProperty("useMove");
      expect(Object.getPrototypeOf(testPokemon)).toHaveProperty("hasFainted");
    });
    describe("takeDamage()", () => {
      test("Reduce hitPoints by a value given", () => {
        //Arrange
        const testPokemon = new Pokemon("Pika", 50, 15);
        //Act
        testPokemon.takeDamage(10);
        const expectedOutput = 40;
        //Assert
        expect(testPokemon.hitPoints).toBe(expectedOutput);
      });
    });
    describe("useMove()", () => {
      test("useMove returns the attackDame", () => {
        //Arrange
        const testPokemon = new Pokemon("Pika", 50, 15);
        //Assert
        expect(testPokemon.useMove()).toBe(15);
      });
      test("useMove logs an attack phrase to console", () => {
        //Arrange
        const testPokemon = new Pokemon("Pika", 50, 15);
        const logSpy = jest.spyOn(console, "log");
        //Act
        testPokemon.useMove();
        //Assert
        expect(logSpy).toHaveBeenCalledTimes(1);
        expect(logSpy).toHaveBeenCalledWith("Pika used Pika's move");
        logSpy.mockRestore();
      });
    });
      describe('hasFainted()', () => {
          test('Should return false whilst hitPoints > 0', () => {
            //Arrange
              const testPokemon = new Pokemon('test', 50, 15)
            //Arrange
            expect(testPokemon.hasFainted()).toBe(false)
          })
          test('Should return true whilst hitPoints = 0', () => {
            //Arrange
              const testPokemon = new Pokemon('test', 0, 15)
            //Arrange
            expect(testPokemon.hasFainted()).toBe(true)
        })
    })
  });
});
