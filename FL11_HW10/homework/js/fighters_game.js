class Fighter {
    constructor(input_values) {
        let properties = input_values;
        const maxhp = input_values.hp;
        const ahundred = 100;
        let statistic = { wins: 0, losses: 0 };
        this.getName = () => properties.name;
        this.getDamage = () => properties.damage;
        this.getHealth = () => properties.hp;
        this.getAgility = () => properties.agility;
        this.attack = function (fighter) {
            if (Math.random() * ahundred > fighter.getAgility()) {
                fighter.dealDamage(properties.damage);
                console.log(`${properties.name} make ${properties.damage} to ${fighter.getName()}`);
            } else {
                console.log(`${fighter.getName()} attack missed`);
            }
        };
        this.logCombatHistory = function () {
            console.log(`Name: ${properties.name}, Wins: ${statistic.wins}, Losses: ${statistic.losses}`);
        };
        this.heal = function (heal) {
            properties.hp = properties.hp + heal >= maxhp ? maxhp : properties.hp + heal;
        };
        this.dealDamage = function (increaser) {
            properties.hp = properties.hp - increaser <= 0 ? 0 : properties.hp - increaser;
        };
        this.addWin = function () {
            ++statistic.wins;
        };
        this.addLoss = function () {
            ++statistic.losses;
        };
    }
}
function battle (fighter1, fighter2) {
    if (fighter1.getHealth() === 0) {
        console.log(`${fighter1.getName()} is dead and can't fight.`);
    } else if (fighter2.getHealth() === 0) {
        console.log(`${fighter2.getName()} is dead and can't fight.`);
    } else {
        let i = 0;
        for (; fighter1.getHealth() !== 0 && fighter2.getHealth() !== 0;) {
            if (i === 0) {
                fighter1.attack(fighter2);
                i = 1;
            } else {
                fighter2.attack(fighter1);
                i = 0;
            }
        }
        if (fighter1.getHealth() === 0) {
            fighter1.addLoss();
            fighter2.addWin();
        } else {
            fighter2.addLoss();
            fighter1.addWin();
        }
    }
}