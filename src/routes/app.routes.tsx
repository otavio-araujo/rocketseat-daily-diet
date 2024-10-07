import { createNativeStackNavigator } from "@react-navigation/native-stack"

import { Home } from "@/screens/Home"
import { MealCreate } from "@/screens/MealCreate"
import { DietStatuses } from "@/screens/DietStatuses"
import { MealDetails } from "@/screens/MealDetails"
import { MealFeedback } from "@/screens/MealFeedback"

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="home" component={Home} />

      <Screen name="dietStatuses" component={DietStatuses} />

      <Screen name="mealCreate" component={MealCreate} />
      <Screen name="mealDetails" component={MealDetails} />
      <Screen name="mealFeedBack" component={MealFeedback} />
    </Navigator>
  )
}
