import AsyncStorage from "@react-native-async-storage/async-storage"

import { MEAL_COLLECTION } from "@storage/storageConfig"
import { getAllMeals } from "./mealGetAll"

import { MealItem, MealSection } from "@/@types/meal"

export async function createMeal(newMeal: MealItem) {
  try {
    const storedSections = await getAllMeals()

    // Verifica se já existe uma seção para a data.
    const existingSection = storedSections.find(
      (section) => section.title === newMeal.date
    )

    if (existingSection) {
      existingSection.data.push(newMeal)
    } else {
      storedSections.push({
        title: newMeal.date,
        data: [newMeal],
      })
    }

    const updatedStorage = JSON.stringify(storedSections)
    await AsyncStorage.setItem(MEAL_COLLECTION, updatedStorage)
  } catch (error) {
    throw error
  }
}
