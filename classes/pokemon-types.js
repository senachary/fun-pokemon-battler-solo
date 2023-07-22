const { Pokemon } = require("./pokemon-class");

class FireType extends Pokemon {
    constructor(name, hitPoints, attackDamage, move, type) {
        super(name, hitPoints, attackDamage, move);
        this.type = "fire";
    }

    isEffectiveAgainst(opponent) {
        return opponent.type === "grass"
    }

    isWeakTo(opponent) {
        return opponent.type === "water"
    }

}

class WaterType extends Pokemon {
    constructor(name, hitPoints, attackDamage, move, type) {
        super(name, hitPoints, attackDamage, move);
        this.type = "water";
    }

    isEffectiveAgainst(opponent) {
        return opponent.type === "fire"
    }

    isWeakTo(opponent) {
        return opponent.type === "grass"
    }

}

class GrassType extends Pokemon {
    constructor(name, hitPoints, attackDamage, move, type) {
        super(name, hitPoints, attackDamage, move);
        this.type = "grass";
    }

    isEffectiveAgainst(opponent) {
        return opponent.type === "water"
    }

    isWeakTo(opponent) {
        return opponent.type === "fire"
    }

}

class NormalType extends Pokemon {
    constructor(name, hitPoints, attackDamage, move, type) {
        super(name, hitPoints, attackDamage, move);
        this.type = "normal";
    }

    isEffectiveAgainst(opponent) {
        return false
    }

    isWeakTo(opponent) {
        return false
    }

}



module.exports = {FireType, WaterType, GrassType, NormalType}