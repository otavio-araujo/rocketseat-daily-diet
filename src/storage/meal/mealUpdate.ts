import AsyncStorage from "@react-native-async-storage/async-storage"

import { MEAL_COLLECTION } from "@storage/storageConfig"

import { MealItem } from "@/@types/meal"
import { getAllMeals } from "./mealGetAll"

export async function updateMeal(updatedMeal: MealItem) {
  try {
    const storedMeals = await getAllMeals()

    const updatedMeals = storedMeals.map((section) => {
      const updatedData = section.data.map((meal) => {
        if (meal.id === updatedMeal.id) {
          return { ...meal, ...updatedMeal }
        }
        return meal
      })

      return { ...section, data: updatedData }
    })

    await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify(updatedMeals))
  } catch (error) {
    throw error
  }
}
