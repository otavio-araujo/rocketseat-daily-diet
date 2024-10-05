import {
  useFonts,
  NunitoSans_400Regular,
  NunitoSans_700Bold,
} from "@expo-google-fonts/nunito-sans"
import { StatusBar } from "react-native"
import { ThemeProvider } from "styled-components/native"

import theme from "@/theme"
import { Loading } from "@/components/Loading"
import { Home } from "@/screens/Home"

export default function App() {
  const [fontsLoaded] = useFonts({
    NunitoSans_400Regular,
    NunitoSans_700Bold,
  })

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      {fontsLoaded ? <Home /> : <Loading />}
    </ThemeProvider>
  )
}
