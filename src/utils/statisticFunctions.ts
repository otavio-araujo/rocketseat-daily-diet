import AsyncStorage from "@react-native-async-storage/async-storage"

import { getAllMeals } from "@storage/meal/mealGetAll"
import { MEAL_COLLECTION } from "@storage/storageConfig"

import { MealItem, MealSection } from "@/@types/meal"

export async function getTotalMeals() {
  const storage = await AsyncStorage.getItem(MEAL_COLLECTION)
  const meals: MealSection[] = storage ? JSON.parse(storage) : []

  const totalMeals = meals.flatMap((section) => section.data).length

  return totalMeals
}
