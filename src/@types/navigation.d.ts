import { MealItem } from "./meal"

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined

      mealCreate: {
        isEditing: boolean
        mealEditItem?: MealItem
      }
      mealDetails: {
        mealID: string
      }
      mealFeedBack: undefined

      dietStatuses: undefined
    }
  }
}
