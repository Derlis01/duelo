class Card {
    constructor(name,cost){
        this.name = name
        this.cost = cost
    }
}

class Unidades extends Card {
    constructor(name, cost, power, res) {
        super(name,cost)
        this.power = power
        this.res = res
    }

    play(target) {
    if( target instanceof Unidades ) {
        console.log('Atacando al oponente')
        console.log(`Resilencia del oponente antes ${target.res}`)
        target.res -= this.power
        console.log(`Resilencia del oponente ahora ${target.res}`)
    } else {
        throw new Error( "Target must be a unit!" );
    }
}
}

class Efectos extends Card {
    constructor(name, cost, text,stat, efectoA) {
        super(name, cost)
        this.text = text
        this.efectoA = efectoA
        this.stat = stat
    }

    play(target) {
    if( target instanceof Unidades ) {
        if (this.stat == 'resiliencia') {
            console.log(`Resiliencia pasa de ${target.res}`)
            target.res += this.efectoA
            console.log(`a ${target.res}`)
        }
        else if (this.stat = 'poder') {
            console.log(`Poder pasa de ${target.power}`)
            target.power += this.efectoA
            console.log(`a ${target.power}`)
        }
    } else {
        throw new Error( "Target must be a unit!" );
    }
}
}

// Instancias de Unidades
const redNinja = new Unidades ('Ninja Cinturón Rojo',3,3,4)
const blackNinja = new Unidades ('Ninja Cinturón Negro',4,5,4)

//Instancias de Efectos
const hardAlgo = new Efectos('Algoritmo Difícil',2,'aumentar la resistencia del objetivo en 3','resiliencia',3)
const efecto2 = new Efectos ('Rechazo de promesa no manejado', 1, 'reducir la resistencia del objetivo en 2', 'resiliencia',-2)
const efecto3 = new Efectos ('Programación en pareja', 3, 'aumentar el poder del objetivo en 2', 'poder', 2)


hardAlgo.play(redNinja)

efecto2.play(redNinja)

efecto3.play(redNinja)

blackNinja.play(redNinja)