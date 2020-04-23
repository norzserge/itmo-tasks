class Father {
  constructor(name = "Darth") {
    this.name = name.toUpperCase();
  }
  get myName() {
    return this.name;
  }
}

const father1 = new Father();
console.log(father1.myName);
console.log("--------- Solution ---------");
class Son extends Father {
  constructor(sonName = "Luke") {
    super();
    console.log(this.name);
    this.sonName = sonName;
  }
  get myName() {
    return `${this.sonName} ${this.name}'s son`;
  }
}

const son1 = new Son("Luke");
console.log(son1.myName);
