function Cat(name, owner) {
  this.name = name;
  this.owner = owner;
}

Cat.prototype.cuteStatement = function cuteStatement() {
  return `${this.owner} loves ${this.name}`;
};

const cat1 = new Cat("tom", "jerry");

// console.log(cat1.cuteStatement());

Cat.prototype.cuteStatement = function cuteStatement() {
  return `Everyone loves ${this.name}`;
};

// console.log(cat1.cuteStatement());

Cat.prototype.meow = function meow() {
  return `meow`;
};

console.log(cat1.meow());

const cat2 = new Cat("foskafo", "eowkr");
cat2.meow = function meow() {
  return `rawr`;
};


console.log(cat2.meow());
console.log(cat1.meow());
