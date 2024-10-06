export type Item = {
  id?: string
  meal: string
  time: string
  date: string
  description?: string
  onDiet: boolean
}

export type Section = {
  title: string
  data: Item[]
}
