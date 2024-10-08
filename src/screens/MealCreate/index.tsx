import { useState } from "react"
import { format } from "date-fns"
import * as Crypto from "expo-crypto"
import { ptBR } from "date-fns/locale"
import { Alert, View } from "react-native"
import { useTheme } from "styled-components/native"
import { useNavigation, useRoute } from "@react-navigation/native"

import ArrowLeft from "phosphor-react-native/src/icons/ArrowLeft"

import { CustomText } from "@/components/CustomText"
import { HeaderSimple } from "@/components/HeaderSimple"
import { InputText } from "@/components/Forms/InputText"
import { ToggleButton } from "@/components/ToggleButton"
import { DateTimePicker } from "@/components/DateTimePicker"

import {
  Container,
  Content,
  DateContainer,
  FormContainer,
  HeaderContainer,
  ToggleContainer,
} from "./styles"
import { Button } from "@/components/Button"
import { MealItem, MealSection } from "@/@types/meal"
import { createMeal } from "@/storage/meal/mealCreate"

type RouteParams = {
  isEditing: boolean
}

export function MealCreate() {
  const navigation = useNavigation()
  const route = useRoute()

  const { isEditing } = route.params as RouteParams

  const { COLORS } = useTheme()

  const [meal, setMeal] = useState<string>("")
  const [description, setDescription] = useState<string>("")
  const [isOnDiet, setIsOnDiet] = useState<boolean | null>(null)
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [selectedTime, setSelectedTime] = useState(new Date())

  const handleDateChange = (newDate: Date) => {
    setSelectedDate(newDate)
  }

  const handleTimeChange = (newTime: Date) => {
    setSelectedTime(newTime)
  }

  async function handleCreateMeal() {
    if (meal.trim().length < 3) {
      return Alert.alert(
        "Nome da refeição",
        "O nome da refeição deve conter pelo menos 3 letras"
      )
    }

    if (description.trim().length < 10) {
      return Alert.alert(
        "Descrição da refeição",
        "O descrição da refeição está um pouco curta. Dá uma caprichada!"
      )
    }
    const formattedDate = format(selectedDate, "dd/MM/yyyy", { locale: ptBR })
    const formattedTime = format(selectedTime, "HH:mm", { locale: ptBR })

    const mealItem: MealItem = {
      id: Crypto.randomUUID().toString(),
      meal: meal || "",
      time: formattedTime,
      date: formattedDate,
      description: description || "",
      onDiet: isOnDiet || false,
    }

    try {
      await createMeal(mealItem)
      navigation.navigate("mealFeedBack")
    } catch (error) {
      Alert.alert("Refeição", "Houve um erro ao criar a refeição")
      console.log(error)
    }
  }

  return (
    <Container type="DEFAULT">
      <HeaderContainer>
        <HeaderSimple
          title={isEditing ? "Editar refeição" : "Nova refeição"}
          icon={<ArrowLeft size={24} color={COLORS.GRAY_100} />}
          onPress={() => navigation.navigate("home")}
        />
      </HeaderContainer>

      <Content>
        <FormContainer>
          <InputText
            label="Nome"
            value={meal}
            onChangeText={setMeal}
            autoCorrect={false}
          />
          <InputText
            isTextArea
            multiline
            numberOfLines={4}
            label="Descrição"
            value={description}
            onChangeText={setDescription}
            autoCorrect={false}
          />

          <DateContainer>
            <DateTimePicker
              pickerType="date"
              label="Data"
              date={selectedDate}
              onDateChange={handleDateChange}
            />
            <DateTimePicker
              pickerType="time"
              label="Hora"
              date={selectedTime}
              onDateChange={handleTimeChange}
            />
          </DateContainer>

          <View>
            <CustomText
              text="Está dentro da dieta?"
              size="SM"
              color="GRAY_100"
              fontWeight="BOLD"
              style={{ marginBottom: 4 }}
            />
            <ToggleContainer>
              <ToggleButton
                label="Sim"
                type="PRIMARY"
                isActive={isOnDiet === true}
                onPress={() => setIsOnDiet(true)}
              />
              <ToggleButton
                label="Não"
                type="SECONDARY"
                isActive={isOnDiet === false}
                onPress={() => setIsOnDiet(false)}
              />
            </ToggleContainer>
          </View>
          <View style={{ flex: 1, justifyContent: "flex-end" }}>
            <Button
              text={isEditing ? "Salvar alterações" : "Criar refeição"}
              onPress={handleCreateMeal}
            />
          </View>
        </FormContainer>
      </Content>
    </Container>
  )
}
