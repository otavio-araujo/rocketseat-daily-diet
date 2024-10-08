import { useEffect, useState } from "react"
import { useTheme } from "styled-components/native"
import { useNavigation, useRoute } from "@react-navigation/native"

import { getMealById } from "@/storage/meal/mealGetById"

import ArrowLeft from "phosphor-react-native/src/icons/ArrowLeft"
import PencilSimpleLine from "phosphor-react-native/src/icons/PencilSimpleLine"
import Trash from "phosphor-react-native/src/icons/Trash"

import { Pill } from "@/components/Pill"
import { Button } from "@/components/Button"
import { CustomText } from "@/components/CustomText"
import { CustomAlert } from "@/components/CustomAlert"
import { HeaderSimple } from "@/components/HeaderSimple"

import { Container, Content, HeaderContainer } from "./styles"
import { MealItem } from "@/@types/meal"
import { Alert } from "react-native"

type RouteParams = {
  mealID: string
}

export function MealDetails() {
  const navigation = useNavigation()

  const route = useRoute()
  const { mealID } = route.params as RouteParams

  const { COLORS } = useTheme()

  const [meal, setMeal] = useState<MealItem>()

  const [isOnDiet, setIsOnDiet] = useState(false)
  const [showAlert, setAlertVisible] = useState(false)

  const handleConfirm = async () => {
    setAlertVisible(false)
    navigation.navigate("home")
  }

  const handleCancel = () => {
    // Handle the cancel action
    setAlertVisible(false)
  }

  async function fetchMeal() {
    try {
      const mealData = await getMealById(mealID)
      setMeal(mealData)
    } catch (error) {
      Alert.alert("Erro ao buscar refeição")
      console.log(error)
    }
  }

  function handleDelete() {
    setAlertVisible(true)
  }

  useEffect(() => {
    fetchMeal()
  }, [meal])

  function handleGoToEditMeal() {
    navigation.navigate("mealCreate", { isEditing: true })
  }

  return (
    <Container type="PRIMARY">
      <HeaderContainer>
        <HeaderSimple
          title="Refeição"
          icon={<ArrowLeft size={24} color={COLORS.GREEN_DARK} />}
          onPress={() => navigation.navigate("home")}
        />
      </HeaderContainer>
      <Content>
        <CustomText text={meal?.meal} size="XL" fontWeight="BOLD" />
        <CustomText
          text={meal?.description}
          size="MD"
          style={{ marginTop: 8 }}
        />
        <CustomText
          text="Data e hora"
          size="SM"
          fontWeight="BOLD"
          style={{ marginTop: 24 }}
        />
        <CustomText
          text={`${meal?.date} às ${meal?.time}`}
          size="MD"
          style={{ marginTop: 8 }}
        />
        <Pill
          isOnDiet={meal?.onDiet}
          text={meal?.onDiet ? "dentro da dieta" : "fora da dieta"}
          style={{ marginRight: "auto", marginTop: 24 }}
        />
        <Button
          text="Editar refeição"
          icon={<PencilSimpleLine size={18} color={COLORS.WHITE} />}
          style={{ marginTop: "auto" }}
          onPress={handleGoToEditMeal}
        />

        <Button
          text="Excluir refeição"
          type="SECONDARY"
          icon={<Trash size={18} color={COLORS.GRAY_100} />}
          style={{ marginTop: 8 }}
          onPress={handleDelete}
        />
      </Content>
      <CustomAlert
        visible={showAlert}
        onCancel={handleCancel}
        onConfirm={handleConfirm}
        message="Deseja realmente excluir o registro da refeição?"
      />
    </Container>
  )
}
