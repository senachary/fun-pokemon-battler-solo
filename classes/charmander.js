const { FireType } = require("./pokemon-types");

class Charmander extends FireType{
    constructor(name= "Charmander", hitPoints=44, attackDamage=17, move="ember") {
        super(name, hitPoints, attackDamage)
        this.name = name;
        this.hitPoints = hitPoints;
        this.attackDamage = attackDamage;
        this.move = move
    }
}


module.exports = { Charmander }