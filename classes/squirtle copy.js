const { WaterType } = require("./pokemon-types");

class Squirtle extends WaterType{
    constructor(name= "Squirtle", hitPoints=44, attackDamage=16, move="surf") {
        super(name, hitPoints, attackDamage)
        this.name = name;
        this.hitPoints = hitPoints;
        this.attackDamage = attackDamage;
        this.move = move
    }
}


module.exports = { Squirtle }