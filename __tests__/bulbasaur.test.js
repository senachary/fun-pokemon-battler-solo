const { Bulbasaur } = require("../classes/bulbasaur");
const { WaterType, GrassType } = require("../classes/pokemon-types");

describe("Bulbasaur", () => {
  test("Should be a GrassType", () => {
    //Arrange
    const bulbasaur = new Bulbasaur();
    //Assert
    expect(bulbasaur).toBeInstanceOf(GrassType);
  });
  test("Default move should be ember", () => {
    //Arrange
    const bulbasaur = new Bulbasaur();
    //Assert
    expect(bulbasaur.move).toBe("razor leaf");
  });
  test("Default properties to be bulbasaur/44/17", () => {
    //Arrange
    const bulbasaur = new Bulbasaur();
    //Assert
    expect(bulbasaur.name).toBe("Bulbasaur");
    expect(bulbasaur.hitPoints).toBe(45);
    expect(bulbasaur.attackDamage).toBe(16);
  });
});
