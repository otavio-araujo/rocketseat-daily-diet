import { Text } from "react-native"
import { Container } from "./styles"
import { Header } from "@/components/Header"
import { Statistics } from "@/components/Statistics"

export function Home() {
  return (
    <Container>
      <Header />
      <Statistics />
    </Container>
  )
}
