import AsyncStorage from "@react-native-async-storage/async-storage"

import { MEAL_COLLECTION } from "@storage/storageConfig"

import { MealItem, MealSection } from "@/@types/meal"

import { getAllMeals } from "./mealGetAll"

export async function deleteMealById(mealID: string) {
  try {
    const storedMeals = await getAllMeals()

    const updatedSections = storedMeals
      .map((section) => {
        const filteredData = section.data.filter((meal) => meal.id !== mealID)
        return { ...section, data: filteredData }
      })
      .filter((section) => section.data.length > 0)

    await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify(updatedSections))
  } catch (error) {
    throw error
  }
}
