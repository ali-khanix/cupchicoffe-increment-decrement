export type MenuItem = {
  id: number
  name: string
  description: string
  price: number
  image: string
}

export type ProductCategory = {
  category: string
  items: MenuItem[]
}
