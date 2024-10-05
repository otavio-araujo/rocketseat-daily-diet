import { Header } from "@/components/Header"
import { Statistics } from "@/components/Statistics"

import { Container } from "./styles"

export function Home() {
  return (
    <Container>
      <Header />
      <Statistics
        statisticsNumber="90.87"
        statisticsText="das refeições dentro da dieta"
        statisticsIcon="arrow-up-right"
      />
    </Container>
  )
}
