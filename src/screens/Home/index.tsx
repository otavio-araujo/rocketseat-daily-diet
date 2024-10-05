import { useTheme } from "styled-components/native"
import { ArrowUpRight } from "phosphor-react-native"

import { Header } from "@/components/Header"
import { Statistics } from "@/components/Statistics"

import { Container } from "./styles"
import { CustomText } from "@/components/CustomText"

export function Home() {
  const { COLORS } = useTheme()
  return (
    <Container>
      <Header />
      <Statistics
        number="90.87%"
        text="das refeições dentro da dieta"
        type="PRIMARY"
        numberSize="XXL"
        icon={<ArrowUpRight color={COLORS.GREEN_DARK} size={24} />}
      />
      <CustomText
        text="Refeições:"
        size="MD"
        color="GRAY_100"
        fontWeight="REGULAR"
      />
    </Container>
  )
}
