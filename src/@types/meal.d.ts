type MealItem = {
  id: string
  meal: string
  time: Date
  date: Date
  description: string
  onDiet: boolean
}

type MealSection = {
  title: string
  data: MealItem[]
}

export { MealItem, MealSection }
