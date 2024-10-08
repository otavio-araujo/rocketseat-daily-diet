type MealItem = {
  id: string
  meal: string
  time: string
  date: string
  description: string
  onDiet: boolean
}

type MealSection = {
  title: string
  data: MealItem[]
}

export { MealItem, MealSection }
