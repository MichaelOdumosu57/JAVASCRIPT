var o = {
  a: 7,
  get b() { 
    return this.a + 1;
  },
  set c(x) {
    this[x] = x / 2;
  }
};