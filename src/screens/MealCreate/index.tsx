import { useState } from "react"
import { format, toDate } from "date-fns"
import * as Crypto from "expo-crypto"
import { ptBR, enUS } from "date-fns/locale"
import { Alert, Keyboard, TouchableWithoutFeedback, View } from "react-native"
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
import { MealItem } from "@/@types/meal"
import { createMeal } from "@/storage/meal/mealCreate"

type RouteParams = {
  isEditing: boolean
  mealEditItem?: MealItem
}

export function MealCreate() {
  const navigation = useNavigation()
  const route = useRoute()

  const { isEditing, mealEditItem } = route.params as RouteParams

  const { COLORS } = useTheme()

  const [meal, setMeal] = useState<string>(mealEditItem?.meal || "")
  const [description, setDescription] = useState<string>(
    mealEditItem?.description || ""
  )
  const [isOnDiet, setIsOnDiet] = useState<boolean | null>(
    mealEditItem?.onDiet || true
  )
  const [selectedDate, setSelectedDate] = useState(
    mealEditItem?.date || new Date()
  )
  const [selectedTime, setSelectedTime] = useState(
    mealEditItem?.time || new Date()
  )

  // console.log(
  //   format(mealEditItem?.date || new Date(), "dd/MM/yyyy", { locale: ptBR })
  // )

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

    // console.warn(new Date(selectedDate).toTimeString())

    const mealItem: MealItem = {
      id: Crypto.randomUUID().toString(),
      meal: meal || "",
      time: new Date(selectedTime),
      date: new Date(selectedDate),
      description: description || "",
      onDiet: isOnDiet || false,
    }

    try {
      if (isEditing) {
        // await createMeal(mealItem)
        // navigation.navigate("mealFeedBack")
        return
      }
      console.warn(mealItem.time)
      // await createMeal(mealItem)
      // navigation.navigate("mealFeedBack")
    } catch (error) {
      Alert.alert("Refeição", "Houve um erro ao criar a refeição")
      console.log(error)
    }
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
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
              onBlur={Keyboard.dismiss}
            />

            <InputText
              isTextArea
              multiline
              numberOfLines={4}
              label="Descrição"
              value={description}
              onChangeText={setDescription}
              autoCorrect={false}
              onBlur={Keyboard.dismiss}
            />

            <DateContainer>
              <DateTimePicker
                pickerType="date"
                label="Data"
                date={new Date(selectedDate)}
                onDateChange={handleDateChange}
              />
              <DateTimePicker
                pickerType="time"
                label="Hora"
                date={new Date(selectedTime)}
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
          </FormContainer>

          <Button
            text={isEditing ? "Salvar alterações" : "Criar refeição"}
            onPress={handleCreateMeal}
            style={{ marginTop: 160 }}
          />
        </Content>
      </Container>
    </TouchableWithoutFeedback>
  )
}
