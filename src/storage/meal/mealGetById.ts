import AsyncStorage from "@react-native-async-storage/async-storage"

import { MEAL_COLLECTION } from "@storage/storageConfig"

import { MealItem, MealSection } from "@/@types/meal"

export async function getMealById(id: string) {
  try {
    const storage = await AsyncStorage.getItem(MEAL_COLLECTION)
    const meals: MealSection[] = storage ? JSON.parse(storage) : []
    const mealsData = meals.flatMap((section) => section.data)

    const mealData = mealsData.find((meal) => meal.id === id)

    return mealData
  } catch (error) {
    throw error
  }
}
