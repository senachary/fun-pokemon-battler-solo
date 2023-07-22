const {
  FireType,
  WaterType,
  GrassType,
  NormalType,
} = require("../classes/pokemon-types");

describe("4 types that extend from the Pokemon base class", () => {
  describe("Base Class", () => {
    test("Types extend from Pokemon", () => {
      //Arrange
      const testFire = new FireType();
      const testWater = new WaterType();
      const testGrass = new GrassType();
      const testNormal = new NormalType();
      //Assert
      expect(testFire).toBeInstanceOf(FireType);
      expect(testWater).toBeInstanceOf(WaterType);
      expect(testGrass).toBeInstanceOf(GrassType);
      expect(testNormal).toBeInstanceOf(NormalType);
    });
    describe("Fire Base", () => {
      test("Should have all properties extended from Pokemon", () => {
        //Arrange
        const testFire = new FireType("anyFire", 100, 20);
        //Assert
        expect(testFire).toHaveProperty("name", "anyFire");
        expect(testFire).toHaveProperty("hitPoints", 100);
        expect(testFire).toHaveProperty("attackDamage", 20);
        expect(testFire).toHaveProperty("move", "tackle");
      });
      test("Should have move updated if specified", () => {
        //Arrange
        const testFire = new FireType("anyFire", 100, 20, "ember");
        //Assert
        expect(testFire).toHaveProperty("move", "ember");
      });
      test("Should have all methods extended from Pokemon", () => {
        //Arrange
        const testFire = new FireType("anyFire", 100, 20);
        //Assert
        expect(Object.getPrototypeOf(testFire)).toHaveProperty("takeDamage");
        expect(Object.getPrototypeOf(testFire)).toHaveProperty("useMove");
        expect(Object.getPrototypeOf(testFire)).toHaveProperty("hasFainted");
      });
      test("Should have a type property", () => {
        //Arrange
        const testFire = new FireType("anyFire", 100, 20);
        //Assert
        expect(testFire).toHaveProperty("type", "fire");
      });
    });
    describe("Water Base", () => {
      test("Should have all properties extended from Pokemon", () => {
        //Arrange
        const testWater = new WaterType("anyWater", 100, 20);
        //Assert
        expect(testWater).toHaveProperty("name", "anyWater");
        expect(testWater).toHaveProperty("hitPoints", 100);
        expect(testWater).toHaveProperty("attackDamage", 20);
        expect(testWater).toHaveProperty("move", "tackle");
      });
      test("Should have move updated if specified", () => {
        //Arrange
        const testWater = new WaterType("anyWater", 100, 20, "swim");
        //Assert
        expect(testWater).toHaveProperty("move", "swim");
      });
      test("Should have all methods extended from Pokemon", () => {
        //Arrange
        const testWater = new WaterType("anyWater", 100, 20);
        //Assert
        expect(Object.getPrototypeOf(testWater)).toHaveProperty("takeDamage");
        expect(Object.getPrototypeOf(testWater)).toHaveProperty("useMove");
        expect(Object.getPrototypeOf(testWater)).toHaveProperty("hasFainted");
      });
      test("Should have a type property", () => {
        //Arrange
        const testWater = new WaterType("anyWater", 100, 20);
        //Assert
        expect(testWater).toHaveProperty("type", "water");
      });
    });
    describe("Grass Base", () => {
      test("Should have all properties extended from Pokemon", () => {
        //Arrange
        const testGrass = new GrassType("anyGrass", 100, 20);
        //Assert
        expect(testGrass).toHaveProperty("name", "anyGrass");
        expect(testGrass).toHaveProperty("hitPoints", 100);
        expect(testGrass).toHaveProperty("attackDamage", 20);
        expect(testGrass).toHaveProperty("move", "tackle");
      });
      test("Should have move updated if specified", () => {
        //Arrange
        const testGrass = new GrassType("anyGrass", 100, 20, "swim");
        //Assert
        expect(testGrass).toHaveProperty("move", "swim");
      });
      test("Should have all methods extended from Pokemon", () => {
        //Arrange
        const testGrass = new GrassType("anyGrass", 100, 20);
        //Assert
        expect(Object.getPrototypeOf(testGrass)).toHaveProperty("takeDamage");
        expect(Object.getPrototypeOf(testGrass)).toHaveProperty("useMove");
        expect(Object.getPrototypeOf(testGrass)).toHaveProperty("hasFainted");
      });
      test("Should have a type property", () => {
        //Arrange
        const testGrass = new GrassType("anyGrass", 100, 20);
        //Assert
        expect(testGrass).toHaveProperty("type", "grass");
      });
    });
    describe("Normal Base", () => {
      test("Should have all properties extended from Pokemon", () => {
        //Arrange
        const testNormal = new NormalType("anyNormal", 100, 20);
        //Assert
        expect(testNormal).toHaveProperty("name", "anyNormal");
        expect(testNormal).toHaveProperty("hitPoints", 100);
        expect(testNormal).toHaveProperty("attackDamage", 20);
        expect(testNormal).toHaveProperty("move", "tackle");
      });
      test("Should have move updated if specified", () => {
        //Arrange
        const testNormal = new NormalType("anyNormal", 100, 20, "swim");
        //Assert
        expect(testNormal).toHaveProperty("move", "swim");
      });
      test("Should have all methods extended from Pokemon", () => {
        //Arrange
        const testNormal = new NormalType("anyNormal", 100, 20);
        //Assert
        expect(Object.getPrototypeOf(testNormal)).toHaveProperty("takeDamage");
        expect(Object.getPrototypeOf(testNormal)).toHaveProperty("useMove");
        expect(Object.getPrototypeOf(testNormal)).toHaveProperty("hasFainted");
      });
      test("Should have a type property", () => {
        //Arrange
        const testNormal = new NormalType("anyNormal", 100, 20);
        //Assert
        expect(testNormal).toHaveProperty("type", "normal");
      });
    });
  });
  describe("methods on type class", () => {
    describe("isEffectiveAgainst", () => {
      test("subclass contains isEffectiveAgainst method", () => {
        //Arrange
        const testFire = new FireType();
        const testWater = new WaterType();
        const testGrass = new GrassType();
        const testNormal = new NormalType();

        //Assert
        expect(Object.getPrototypeOf(testFire)).toHaveProperty(
          "isEffectiveAgainst"
        );
        expect(Object.getPrototypeOf(testWater)).toHaveProperty(
          "isEffectiveAgainst"
        );
        expect(Object.getPrototypeOf(testGrass)).toHaveProperty(
          "isEffectiveAgainst"
        );
        expect(Object.getPrototypeOf(testNormal)).toHaveProperty(
          "isEffectiveAgainst"
        );
      });
      describe("FireType.isEffectiveAgainst", () => {
        test("Returns true for FireType if given opponent is grass type", () => {
          //Arrange
          const testFire = new FireType();
          const testGrass = new GrassType();
          //Assert
          expect(testFire.isEffectiveAgainst(testGrass)).toBe(true);
        });
        test("Returns false for all other opponents", () => {
          //Arrange
          const testFire = new FireType();
          const testNormal = new NormalType();
          //Assert
          expect(testFire.isEffectiveAgainst(testNormal)).toBe(false);
        });
      });
      describe("WaterType.isEffectiveAgainst", () => {
        test("Returns true for WaterType if given opponent is fire type", () => {
          //Arrange
          const testWater = new WaterType();
          const testFire = new FireType();
          //Assert
          expect(testWater.isEffectiveAgainst(testFire)).toBe(true);
        });
        test("Returns false for all other opponents", () => {
          //Arrange
          const testWater = new WaterType();
          const testGrass = new GrassType();
          //Assert
          expect(testWater.isEffectiveAgainst(testGrass)).toBe(false);
        });
      });
      describe("GrassType.isEffectiveAgainst", () => {
        test("Returns true for GrassType if given opponent is water type", () => {
          //Arrange
          const testGrass = new GrassType();
          const testWater = new WaterType();
          //Assert
          expect(testGrass.isEffectiveAgainst(testWater)).toBe(true);
        });
        test("Returns false for all other opponents", () => {
          //Arrange
          const testWater = new WaterType();
          const testGrass = new GrassType();
          //Assert
          expect(testWater.isEffectiveAgainst(testGrass)).toBe(false);
        });
      });
      describe("NormalType.isEffectiveAgainst", () => {
        test("Returns false for NormalType if all givens opponents", () => {
          //Arrange
          const testNormal = new NormalType();
          const testWater = new WaterType();
          const testFire = new FireType();
          //Assert
          expect(testNormal.isEffectiveAgainst(testWater)).toBe(false);
          expect(testNormal.isEffectiveAgainst(testFire)).toBe(false);
        });
      });
    });
    describe("isWeakTo", () => {
      test("subclass contains isWeakTo", () => {
        //Arrange
        const testFire = new FireType();
        const testWater = new WaterType();
        const testGrass = new GrassType();
        const testNormal = new NormalType();

        //Assert
        expect(Object.getPrototypeOf(testFire)).toHaveProperty("isWeakTo");
        expect(Object.getPrototypeOf(testWater)).toHaveProperty("isWeakTo");
        expect(Object.getPrototypeOf(testGrass)).toHaveProperty("isWeakTo");
        expect(Object.getPrototypeOf(testNormal)).toHaveProperty("isWeakTo");
      });
      describe("FireType.isWeakTo", () => {
        test("Returns true for FireType if given opponent is water type", () => {
          //Arrange
          const testFire = new FireType();
          const testWater = new WaterType();
          //Assert
          expect(testFire.isWeakTo(testWater)).toBe(true);
        });
        test("Returns false for all other opponents", () => {
          //Arrange
          const testFire = new FireType();
          const testNormal = new NormalType();
          //Assert
          expect(testFire.isWeakTo(testNormal)).toBe(false);
        });
      });
      describe("WaterType.isWeakTo", () => {
        test("Returns true for WaterType if given opponent is grass type", () => {
          //Arrange
          const testWater = new WaterType();
          const testGrass = new GrassType();
          //Assert
          expect(testWater.isWeakTo(testGrass)).toBe(true);
        });
        test("Returns false for all other opponents", () => {
          //Arrange
          const testWater = new WaterType();
          const testNormal = new NormalType();
          //Assert
          expect(testWater.isWeakTo(testNormal)).toBe(false);
        });
      });
      describe("GrassType.isWeakTo", () => {
        test("Returns true for GrassType if given opponent is fire type", () => {
          //Arrange
          const testGrass = new GrassType();
          const testFire = new FireType();
          //Assert
          expect(testGrass.isWeakTo(testFire)).toBe(true);
        });
        test("Returns false for all other opponents", () => {
          //Arrange
          const testGrass = new GrassType();
          const testNormal = new NormalType();
          //Assert
          expect(testGrass.isWeakTo(testNormal)).toBe(false);
        });
      });
      describe("NormalType.isWeakTo", () => {
        test("Returns false for NormalType if all givens opponents", () => {
          //Arrange
          const testNormal = new NormalType();
          const testWater = new WaterType();
          const testFire = new FireType();
          //Assert
          expect(testNormal.isWeakTo(testWater)).toBe(false);
          expect(testNormal.isWeakTo(testFire)).toBe(false);
        });
      });
    });
  });
});
