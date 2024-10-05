import { useTheme } from "styled-components/native"
import { ArrowUpRight, Plus } from "phosphor-react-native"

import { Header } from "@/components/Header"
import { Statistics } from "@/components/Statistics"

import { Container } from "./styles"
import { CustomText } from "@/components/CustomText"
import { Button } from "@/components/Button"
import { MealList } from "@/components/MealList"

type Item = {
  id: string
  name: string
  hour: string
  date: string
  description: string
  onDiet: boolean
}
type Section = {
  title: string
  data: Item[]
}

export function Home() {
  const { COLORS } = useTheme()

  const sections: Section[] = [
    {
      title: "04/05/2024",
      data: [
        {
          id: "1",
          hour: "08:00",
          name: "X-Tudo",
          onDiet: false,
          date: "04/05/2024",
          description: "Hambúrguer completo com extras",
        },
        {
          id: "2",
          hour: "12:00",
          name: "Lasanha",
          onDiet: false,
          date: "04/05/2024",
          description: "Lasanha à bolonhesa com queijo",
        },
      ],
    },
    {
      title: "03/05/2024",
      data: [
        {
          id: "1",
          hour: "08:00",
          name: "X-Tudo",
          onDiet: false,
          date: "03/05/2024",
          description: "Hambúrguer completo com extras",
        },
        {
          id: "2",
          hour: "12:00",
          name: "Lasanha",
          onDiet: false,
          date: "03/05/2024",
          description: "Lasanha à bolonhesa com queijo",
        },
        {
          id: "3",
          hour: "18:00",
          name: "Salada",
          onDiet: true,
          date: "03/05/2024",
          description: "Salada verde com molho especial",
        },
      ],
    },
  ]
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
        style={{ marginBottom: 8 }}
      />

      <Button
        text="Nova refeição"
        icon={<Plus color={COLORS.WHITE} size={18} />}
        type="PRIMARY"
      />
      <MealList date="05.10.24" />
    </Container>
  )
}
