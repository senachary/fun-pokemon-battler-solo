const { NormalType } = require("./pokemon-types");

class Eevee extends NormalType{
    constructor(name= "Eevee", hitPoints=55, attackDamage=18, move="headbutt") {
        super(name, hitPoints, attackDamage)
        this.name = name;
        this.hitPoints = hitPoints;
        this.attackDamage = attackDamage;
        this.move = move
    }
}


module.exports = { Eevee }