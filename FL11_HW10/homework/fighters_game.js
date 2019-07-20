const Fighter = class Fighter {
    constructor({name, damage, hp, agility}) {
        this.wins = 0;
        this.loses = 0;
        this.name = name;
        this.damage = damage;
        this.hp = hp;
        this.agility = agility;
        this.totallyHp = hp;
    }
    getName() {
        return this.name;
    }
    getDamage() {
        return this.damage;
    }
    getAgility() {
        return this.agility;
    }
    getHealth() {
        return this.hp;
    }
    attack(e) {
        let startedHitSucces = 100;
        let max = 101;
        let min = 0;
        let probSucces = startedHitSucces - e.getAgility();
        let randomProb = Math.floor(Math.random() * (max - min)) + min;
        if(randomProb <= probSucces){
            e.dealDamage(this.damage);
            return console.log(`${this.name} make ${this.damage} damage to ${e.name}`);
        }else{
            return console.log(`${this.name} attack missed`);
        }
    }
    dealDamage(points){
        if(this.hp - points < 0){
            this.hp = 0;
            return `Your health is: ${this.hp}`;
        }else{
            this.hp -= points;
            return `Your health is ${this.hp}`;
        }
    }
    logCombatHistory() {
        return `Name: ${this.name}, Wins: ${this.wins}, Loses: ${this.loses}`;
    }
    addWin() {
        this.wins++;
        return `Wins: ${this.wins}`;
    }
    addLoss() {
        this.loses++;
        return `Loses: ${this.loses}`;
    }
}

const firstFighter = new Fighter({name:'John', damage:20, hp:100, agility:25});
const secondFighter = new Fighter({name:'Jim', damage:10, hp:120, agility:40});

function battle(firstFighter, secondFighter) {
    if(firstFighter.hp <= 0){
        return `${firstFighter.name} is dead. Heal him or find new fighter`;
    }else if(secondFighter.hp <= 0){
        return `${secondFighter.name} is dead. Heal him or find new fighter`;
    }else{
        while(firstFighter.hp > 0 && secondFighter.hp > 0){
            firstFighter.attack(secondFighter);
            if(secondFighter.hp <= 0){
                break;
            }
            secondFighter.attack(firstFighter);
        }
        if(firstFighter.hp <= 0 ){
            firstFighter.addLoss();
            secondFighter.addWin();
        }else{
            firstFighter.addWin();
            secondFighter.addLoss();
        }
    }
}