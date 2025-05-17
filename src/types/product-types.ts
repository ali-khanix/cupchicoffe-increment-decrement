export type MenuItem = {
  id: string
  name: string
  description: string
  price: number
  image: string
}

export type ProductCategory = {
  category: string
  items: MenuItem[]
}
