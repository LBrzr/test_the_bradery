interface CartLine {
  product: Product;
  count: number;
}

class Cart {
  id: string;
  lines: CartLine[];

  constructor(id: string, lines: CartLine[]) {
    this.id = id;
    this.lines = lines;
  }

  get size() {
    return this.lines
      .map((line) => line.count)
      .reduce((prev, next) => prev + next);
  }
}

export default Cart;
