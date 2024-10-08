import AsyncStorage from "@react-native-async-storage/async-storage"

import { MEAL_COLLECTION } from "@storage/storageConfig"

import { MealItem, MealSection } from "@/@types/meal"

export async function getAllMeals() {
  const storage = await AsyncStorage.getItem(MEAL_COLLECTION)

  const meals: MealSection[] = storage ? JSON.parse(storage) : []

  return meals
  try {
  } catch (error) {
    throw error
  }
}
