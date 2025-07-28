// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }

    attack() {
        return this.strength;
    }

    receiveDamage(damage) {
        this.health -= damage;
    }
}

// Viking
class Viking extends Soldier{
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    }

    receiveDamage(damage) {
        super.receiveDamage(damage);
        return (this.health > 0) ? `${this.name} has received ${damage} points of damage` : `${this.name} has died in act of combat`;
    }
    
    battleCry() {
        return "Odin Owns You All!";
    }
}

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage) {
        super.receiveDamage(damage);
        return (this.health > 0) ? `A Saxon has received ${damage} points of damage` : `A Saxon has died in combat`;
    }
}


// War
class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    addViking(viking) {
        if (viking instanceof Viking) {
            this.vikingArmy.push(viking);
        }
    }

    addSaxon(saxon) {
        if (saxon instanceof Saxon) {
            this.saxonArmy.push(saxon);
        }
    }

    vikingAttack() {
        const attacker = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
        const defenderIndex = Math.floor(Math.random() * this.saxonArmy.length);
        const defender = this.saxonArmy[defenderIndex];
        const result = defender.receiveDamage(attacker.strength);
        if (defender.health <= 0) {
            this.saxonArmy.splice(defenderIndex, 1);
        }
        return result;
    }

    saxonAttack() {
        const attacker = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
        const defenderIndex = Math.floor(Math.random() * this.vikingArmy.length);
        const defender = this.vikingArmy[defenderIndex];

        const result = defender.receiveDamage(attacker.strength);
        if (defender.health <= 0) {
            this.vikingArmy.splice(defenderIndex, 1);
        }
        return result;
    }

    showStatus() {
        if (this.saxonArmy.length === 0) {
            return "Vikings have won the war of the century!";
        } else if (this.vikingArmy.length === 0) {
            return "Saxons have fought for their lives and survived another day...";
        } else {
            return "Vikings and Saxons are still in the thick of battle.";
        }

    }
}
