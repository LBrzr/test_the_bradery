interface CartLine {
  product: Product;
  count: number;
}

interface Cart {
  _id: string;
  lines: CartLine[];
}
