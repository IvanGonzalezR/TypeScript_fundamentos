type Size = 'S' | 'M' | 'L' | 'XL'
type Product = {
  title: string,
  createdAt: Date,
  stock: number,
  size?: Size
}

export { Size, Product };