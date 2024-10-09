import { View } from "react-native"
import { useEffect, useState } from "react"
import { useTheme } from "styled-components/native"
import { useNavigation } from "@react-navigation/native"

import ArrowLeft from "phosphor-react-native/src/icons/ArrowLeft"

import { CustomText } from "@/components/CustomText"
import { Statistics } from "@/components/Statistics"
import { HeaderStatistics } from "@/components/HeaderStatistics"

import { getAllMeals } from "@/storage/meal/mealGetAll"

import { Container, Content, HeaderContainer } from "./styles"
import { MealSection } from "@/@types/meal"

export function DietStatuses() {
  const navigation = useNavigation()

  const { COLORS } = useTheme()

  const [mealList, setMealList] = useState<MealSection[]>([])

  const [averageOnDiet, setAverageOnDiet] = useState(0)
  const [totalMeals, setTotalMeals] = useState(0)
  const [onDietTotalMeals, setOnDietTotalMeals] = useState(0)

  async function fetchMeals() {
    const allMeals = await getAllMeals()
    setMealList(allMeals)
  }

  function averageOnDietMeals() {
    if (mealList.length === 0) {
      setAverageOnDiet(0)
      return
    }

    const onDietItems = mealList
      .flatMap((section) => section.data)
      .filter((item) => item.onDiet === true).length

    const average = (onDietItems / mealList.length) * 100

    setAverageOnDiet(average)
  }

  function getTotalMeals() {
    const totalMeals = mealList.flatMap((section) => section.data).length
    setTotalMeals(totalMeals)
  }

  function getOnDietTotalMeals() {
    const mealsOnDiet = mealList
      .flatMap((section) => section.data)
      .filter((meal) => meal.onDiet === true).length
    setOnDietTotalMeals(mealsOnDiet)
  }

  const onDietTotalStreak = () => {
    const allItems = mealList.flatMap((section) => section.data)
    allItems.sort((a, b) => {
      // Combina data e hora em um único objeto Date e converte em timestamp
      const dateTimeA = new Date(`${a.date}T${a.time}`).getTime()
      const dateTimeB = new Date(`${b.date}T${b.time}`).getTime()
      return dateTimeA - dateTimeB
    })

    let maxStreak = 0
    let currentStreak = 0

    allItems.forEach((item) => {
      if (item.onDiet) {
        currentStreak++
        maxStreak = Math.max(maxStreak, currentStreak)
      } else {
        currentStreak = 0 // Reset the sequence counter if the meal is out of diet
      }
    })

    return maxStreak.toString() // Converting to string to match existing code style
  }

  useEffect(() => {
    fetchMeals()
    getTotalMeals()
    getOnDietTotalMeals()
    averageOnDietMeals()
  }, [mealList])

  return (
    <Container
      isOnDiet={
        averageOnDiet === 0 && totalMeals === 0
          ? "DEFAULT"
          : averageOnDiet < 60
          ? false
          : true
      }
    >
      <HeaderContainer>
        <HeaderStatistics
          onPress={() => navigation.navigate("home")}
          number={`${averageOnDiet.toFixed(2).toString()}%`}
          text="das refeições dentro da dieta"
          type={
            averageOnDiet === 0 && totalMeals === 0
              ? "DEFAULT"
              : averageOnDiet < 60
              ? "SECONDARY"
              : "PRIMARY"
          }
          numberSize="XXL"
          icon={
            <ArrowLeft
              size={24}
              color={
                averageOnDiet === 0 && totalMeals === 0
                  ? COLORS.GRAY_200
                  : averageOnDiet < 60
                  ? COLORS.RED_DARK
                  : COLORS.GREEN_DARK
              }
            />
          }
        />
      </HeaderContainer>
      <Content>
        <CustomText
          text="Estatísticas gerais"
          fontWeight="BOLD"
          size="MD"
          style={{ alignSelf: "center" }}
        />

        <Statistics
          number={onDietTotalStreak()}
          text="melhor sequência de pratos dentro da dieta"
          type="DEFAULT"
          numberSize="XL"
          style={{ marginTop: 24 }}
        />

        <Statistics
          number={totalMeals.toString()}
          text="refeições registradas"
          type="DEFAULT"
          numberSize="XL"
          style={{ marginTop: 12 }}
        />

        <View style={{ flexDirection: "row", gap: 12, width: "100%" }}>
          <Statistics
            number={onDietTotalMeals.toString()}
            text="refeições dentro da dieta"
            type="PRIMARY"
            numberSize="XL"
            style={{ marginTop: 12, flex: 1 }}
          />

          <Statistics
            number={(totalMeals - onDietTotalMeals).toString()}
            text="refeições fora da dieta"
            type="SECONDARY"
            numberSize="XL"
            style={{ marginTop: 12, flex: 1 }}
          />
        </View>
      </Content>
    </Container>
  )
}
