class Pokeball {
    constructor() {
        this.capturedPokemon = null
    }

    throw(capture) {
        if (!capture) {
            if (this.capturedPokemon === null) {
                console.log(`You don't have a Pokemon!`)
            } else {
                console.log(`GO ${this.capturedPokemon.name}!!`)
                return this.capturedPokemon
            }
        } else if (this.capturedPokemon === null) {
            this.capturedPokemon = capture
            console.log(`You caught ${capture.name}!`)
            return capture
        }
    }
    
    isEmpty() {
        
    }
    
    contains() {
        
    }
}

module.exports = {Pokeball}