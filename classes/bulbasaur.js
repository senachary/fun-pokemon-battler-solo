const { GrassType } = require("./pokemon-types");

class Bulbasaur extends GrassType{
    constructor(name= "Bulbasaur", hitPoints=45, attackDamage=16, move="razor leaf") {
        super(name, hitPoints, attackDamage)
        this.name = name;
        this.hitPoints = hitPoints;
        this.attackDamage = attackDamage;
        this.move = move
    }
}


module.exports = { Bulbasaur }