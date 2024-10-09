import { useEffect, useState } from "react"
import { SectionList, View } from "react-native"
import { useTheme } from "styled-components/native"
import { useIsFocused, useNavigation } from "@react-navigation/native"

import ArrowUpRight from "phosphor-react-native/src/icons/ArrowUpRight"
import Plus from "phosphor-react-native/src/icons/Plus"
import MaterialIcons from "@expo/vector-icons/MaterialIcons"

import { MealSection } from "@/@types/meal"

import { Header } from "@/components/Header"
import { Button } from "@/components/Button"
import { MealItem } from "@/components/MealItem"
import { Statistics } from "@/components/Statistics"
import { CustomText } from "@/components/CustomText"

import { Container } from "./styles"

import { getAllMeals } from "@/storage/meal/mealGetAll"
import { ptBR } from "date-fns/locale"
import { format } from "date-fns"

export function Home() {
  const navigation = useNavigation()
  const isFocused = useIsFocused()

  const { COLORS } = useTheme()

  const [mealList, setMealList] = useState<MealSection[]>([])
  const [averageOnDiet, setAverageOnDiet] = useState(0)

  function averageOnDietMeals() {
    const allMeals = mealList.flatMap((section) => section.data)
    if (allMeals.length === 0) {
      setAverageOnDiet(0)
      return
    }
    const onDietItems = allMeals.filter((item) => item.onDiet === true)
    const average = (onDietItems.length / allMeals.length) * 100
    setAverageOnDiet(average)
  }

  function handleDietStatuses() {
    navigation.navigate("dietStatuses")
  }

  function handleNewMeal() {
    navigation.navigate("mealCreate", { isEditing: false, onDiet: true })
  }

  function handleGoToMealDetails(mealID: string) {
    navigation.navigate("mealDetails", { mealID })
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
    averageOnDietMeals()
  }, [mealList, averageOnDiet])

  useEffect(() => {
    fetchMeals()
    averageOnDietMeals()
  }, [isFocused, averageOnDiet])

  return (
    <Container>
      <Header />
      <Statistics
        number={averageOnDiet.toFixed(2) + "%"}
        text="das refeições dentro da dieta"
        type={
          averageOnDiet === 0 && mealList.length === 0
            ? "DEFAULT"
            : averageOnDiet < 60
            ? "SECONDARY"
            : "PRIMARY"
        }
        numberSize="XXL"
        icon={
          <ArrowUpRight
            color={
              averageOnDiet === 0 && mealList.length === 0
                ? COLORS.GRAY_200
                : averageOnDiet < 60
                ? COLORS.RED_DARK
                : COLORS.GREEN_DARK
            }
            size={24}
          />
        }
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
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <MealItem
            id={item.id}
            time={format(new Date(item.time), "HH:mm", { locale: ptBR })}
            date={format(new Date(item.date), "dd/MM/yyyy", { locale: ptBR })}
            meal={item.meal}
            description={item.description}
            onDiet={item.onDiet}
            onPress={() => handleGoToMealDetails(item.id)}
          />
        )}
        renderSectionHeader={({ section: { title } }) => (
          <CustomText
            text={format(new Date(title), "dd/MM/yyyy", { locale: ptBR })}
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
