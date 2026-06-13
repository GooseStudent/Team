export class Character {
    constructor(name, type, health, level, attack, defence) {
        this.name = name;
        this.type = type;
        this.health = health;
        this.level = level;
        this.attack = attack;
        this.defence = defence;
    }
}

export class Team {
  constructor() {
    this.members = [];
  }

  add(character) {
    this.members.push(character);
  }

  [Symbol.iterator]() {

    let index = 0;
    const members = this.members;

    return {
      next(){
        if (index < members.length) {
          return {
            done: false,
            value:members[index++]
          };
        }
        return {
          done: true
        };
      }
    };
  }
}