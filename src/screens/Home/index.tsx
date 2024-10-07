import { SectionList } from "react-native"
import { useTheme } from "styled-components/native"
import { ArrowUpRight, Plus } from "phosphor-react-native"

import { Header } from "@/components/Header"
import { Button } from "@/components/Button"
import { MealItem } from "@/components/MealItem"
import { Statistics } from "@/components/Statistics"
import { CustomText } from "@/components/CustomText"

import { Section } from "@/@types/sectionList"

import { Container } from "./styles"

export function Home() {
  const { COLORS } = useTheme()

  const sections: Section[] = [
    {
      title: "04.05.24",
      data: [
        {
          id: "1",
          time: "08:00",
          meal: "X-Tudo",
          onDiet: false,
          date: "04.05.24",
          description: "Hambúrguer completo com extras",
        },
        {
          id: "2",
          time: "12:00",
          meal: "Lasanha",
          onDiet: false,
          date: "04.05.24",
          description: "Lasanha à bolonhesa com queijo",
        },
      ],
    },
    {
      title: "03.05.24",
      data: [
        {
          id: "1",
          time: "08:00",
          meal: "X-Tudo",
          onDiet: false,
          date: "03.05.24",
          description: "Hambúrguer completo com extras",
        },
        {
          id: "2",
          time: "12:00",
          meal: "Lasanha",
          onDiet: false,
          date: "03.05.24",
          description: "Lasanha à bolonhesa com queijo",
        },
        {
          id: "3",
          time: "18:00",
          meal: "Salada",
          onDiet: true,
          date: "03.05.24",
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
        style={{ marginTop: 32 }}
      />
      <CustomText
        text="Refeições"
        size="MD"
        color="GRAY_100"
        fontWeight="REGULAR"
        style={{ marginBottom: 8, marginTop: 40 }}
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
