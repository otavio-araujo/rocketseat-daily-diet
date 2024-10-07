import { createNativeStackNavigator } from "@react-navigation/native-stack"

import { Home } from "@/screens/Home"
import { MealCreate } from "@/screens/MealCreate"
import { DietStatuses } from "@/screens/DietStatuses"

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="home" component={Home} />
      <Screen name="meal.create" component={MealCreate} />
      <Screen name="diet.statuses" component={DietStatuses} />
    </Navigator>
  )
}
