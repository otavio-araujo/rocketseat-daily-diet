import { MealItem } from "./meal"

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined

      mealCreate: {
        isEditing: boolean
        mealEditItem?: MealItem
        onDiet: boolean
      }
      mealDetails: {
        mealID: string
      }
      mealFeedBack: {
        isOnDiet: boolean
      }

      dietStatuses: undefined
    }
  }
}
