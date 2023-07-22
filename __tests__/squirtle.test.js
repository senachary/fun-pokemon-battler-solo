const { Squirtle } = require("../classes/squirtle");
const { WaterType } = require("../classes/pokemon-types");

describe("Squirtle", () => {
  test("Should be a FireType", () => {
    //Arrange
    const squirtle = new Squirtle();
    //Assert
    expect(squirtle).toBeInstanceOf(WaterType);
  });
  test("Default move should be ember", () => {
    //Arrange
    const squirtle = new Squirtle();
    //Assert
    expect(squirtle.move).toBe("surf");
  });
  test("Default properties to be squirtle/44/17", () => {
    //Arrange
    const squirtle = new Squirtle();
    //Assert
    expect(squirtle.name).toBe("Squirtle");
    expect(squirtle.hitPoints).toBe(44);
    expect(squirtle.attackDamage).toBe(16);
  });
});
