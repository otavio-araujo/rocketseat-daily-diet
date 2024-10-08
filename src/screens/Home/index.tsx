import { useEffect, useState } from "react"
import { SectionList, View } from "react-native"
import { useTheme } from "styled-components/native"
import { useIsFocused, useNavigation } from "@react-navigation/native"

import ArrowUpRight from "phosphor-react-native/src/icons/ArrowUpRight"
import Plus from "phosphor-react-native/src/icons/Plus"
import MaterialIcons from "@expo/vector-icons/MaterialIcons"

import { Section } from "@/@types/sectionList"
import { MealSection, MealItem as Item } from "@/@types/meal"

import { Header } from "@/components/Header"
import { Button } from "@/components/Button"
import { MealItem } from "@/components/MealItem"
import { Statistics } from "@/components/Statistics"
import { CustomText } from "@/components/CustomText"

import { Container } from "./styles"

import { getAllMeals } from "@/storage/meal/mealGetAll"

export function Home() {
  const navigation = useNavigation()
  const isFocused = useIsFocused()

  const { COLORS } = useTheme()

  const [mealList, setMealList] = useState<MealSection[]>([])

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

  function handleDietStatuses() {
    navigation.navigate("dietStatuses")
  }

  function handleNewMeal() {
    navigation.navigate("mealCreate", { isEditing: false })
  }

  function handleGoToMealDetails() {
    navigation.navigate("mealDetails")
  }

  async function fetchMeals() {
    try {
      const data = await getAllMeals()
      setMealList(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchMeals()
  }, [isFocused])

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
        onPress={handleDietStatuses}
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
        onPress={handleNewMeal}
        style={{ marginBottom: 32 }}
      />

      <SectionList
        sections={mealList}
        keyExtractor={(item, index) => item + index.toString()}
        renderItem={({ item }) => (
          <MealItem
            time={item.time}
            date={item.date}
            meal={item.meal}
            onDiet={item.onDiet}
            onPress={handleGoToMealDetails}
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
        ListEmptyComponent={
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              padding: 24,
              gap: 18,
            }}
          >
            <MaterialIcons
              name="no-meals-ouline"
              size={36}
              color={COLORS.GRAY_500}
            />
            <CustomText
              text="Nenhuma refeição encontrada"
              style={{ alignSelf: "center" }}
              color="GRAY_300"
            />
          </View>
        }
      />
    </Container>
  )
}
