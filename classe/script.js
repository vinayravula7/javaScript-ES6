class test {
  constructor(a, b) {
    // using this keyword for accessing c in add method
    this.c = a;
    this.d = b;
  }
  add() {
    console.log(this.c);
  }
}

const result = new test(11, 1);
result.add();
