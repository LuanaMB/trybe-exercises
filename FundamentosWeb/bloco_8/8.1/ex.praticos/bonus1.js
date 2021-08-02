const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const danDragon = (obj) => {
  let max = obj.strength
  return Math.floor(Math.random() * (max - 15 + 1) + 15)
} 

const danoWarrior = (obj) => {
  let min = obj.strength
  let max = min*obj.weaponDmg
  return Math.floor(Math.random() * (max - min + 1) + min)
} 

console.log(danoWarrior(warrior)) 

