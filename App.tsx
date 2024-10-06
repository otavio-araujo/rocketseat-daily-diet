import {
  useFonts,
  NunitoSans_400Regular,
  NunitoSans_700Bold,
} from "@expo-google-fonts/nunito-sans"
import { StatusBar } from "react-native"
import { ThemeProvider } from "styled-components/native"

import theme from "@/theme"
import { Loading } from "@/components/Loading"
import { DietStatuses } from "@/screens/DietStatuses"

export default function App() {
  const [fontsLoaded] = useFonts({
    NunitoSans_400Regular,
    NunitoSans_700Bold,
  })

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />

      {fontsLoaded ? <DietStatuses /> : <Loading />}
    </ThemeProvider>
  )
}
