import { useTheme } from "styled-components/native"
import { ArrowUpRight, Plus } from "phosphor-react-native"

import { Header } from "@/components/Header"
import { Statistics } from "@/components/Statistics"

import { Container } from "./styles"
import { CustomText } from "@/components/CustomText"
import { Button } from "@/components/Button"
import { MealList } from "@/components/MealList"
import { SectionList, Text, View } from "react-native"
import { MealItem } from "@/components/MealItem"

type Item = {
  id: string
  meal: string
  time: string
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
          time: "08:00",
          meal: "X-Tudo",
          onDiet: false,
          date: "04/05/2024",
          description: "Hambúrguer completo com extras",
        },
        {
          id: "2",
          time: "12:00",
          meal: "Lasanha",
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
          time: "08:00",
          meal: "X-Tudo",
          onDiet: false,
          date: "03/05/2024",
          description: "Hambúrguer completo com extras",
        },
        {
          id: "2",
          time: "12:00",
          meal: "Lasanha",
          onDiet: false,
          date: "03/05/2024",
          description: "Lasanha à bolonhesa com queijo",
        },
        {
          id: "3",
          time: "18:00",
          meal: "Salada",
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

      <SectionList
        sections={sections}
        keyExtractor={(item, index) => item + index.toString()}
        renderItem={({ item }) => (
          <MealItem
            time={item.time}
            date={item.date}
            meal={item.meal}
            onDiet={item.onDiet}
          />
        )}
        renderSectionHeader={({ section: { title } }) => (
          <CustomText
            text={title}
            fontWeight="BOLD"
            size="LG"
            style={{ marginBottom: 8, marginTop: 32 }}
          />
        )}
        contentContainerStyle={{ paddingBottom: 52 }}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  )
}
