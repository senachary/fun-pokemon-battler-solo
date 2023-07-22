const { Eevee } = require("../classes/eevee");
const { NormalType } = require("../classes/pokemon-types");

describe("Eevee", () => {
  test("Should be a NormalType", () => {
    //Arrange
    const eevee = new Eevee();
    //Assert
    expect(eevee).toBeInstanceOf(NormalType);
  });
  test("Default move should be ember", () => {
    //Arrange
    const eevee = new Eevee();
    //Assert
    expect(eevee.move).toBe("headbutt");
  });
  test("Default properties to be Eevee/55/18", () => {
    //Arrange
    const eevee = new Eevee();
    //Assert
    expect(eevee.name).toBe("Eevee");
    expect(eevee.hitPoints).toBe(55);
    expect(eevee.attackDamage).toBe(18);
  });
});
