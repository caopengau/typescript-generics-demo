class KeyValueProcessor<T, U> {
  // adding ! to avoid TS2564: Property '...' has no initializer and is not definitely assigned in the constructor.
  private key!: T;
  private val!: U;
  setKeyValue(key: T, val: U): void {
    this.key = key;
    this.val = val;
  }

  display(): void {
    console.log(`Key = ${this.key}, val = ${this.val}`);
  }
}

let kvp1 = new KeyValueProcessor<number, string>();
kvp1.setKeyValue(1, "Steve");
kvp1.display(); //Output: Key = 1, Val = Steve

let kvp2 = new KeyValueProcessor<string, string>();
kvp2.setKeyValue("CEO", "Bill");
kvp2.display(); //Output: Key = CEO, Val = Bill
