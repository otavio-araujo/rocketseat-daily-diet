import { useState } from "react"
import { format } from "date-fns"
import { ptBR } from "date-fns/locale"
import { Text, View } from "react-native"
import { ArrowLeft } from "phosphor-react-native"
import { useTheme } from "styled-components/native"
import { useNavigation, useRoute } from "@react-navigation/native"

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

type RouteParams = {
  isEditing: boolean
}

export function MealCreate() {
  const navigation = useNavigation()
  const route = useRoute()

  const { isEditing } = route.params as RouteParams

  const { COLORS } = useTheme()

  const [isOnDiet, setIsOnDiet] = useState<boolean | null>(null)
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [selectedTime, setSelectedTime] = useState(new Date())

  const formattedDate = format(selectedDate, "dd/MM/yyyy", { locale: ptBR })
  const formattedTime = format(selectedTime, "HH:mm", { locale: ptBR })

  const handleDateChange = (newDate: Date) => {
    setSelectedDate(newDate)
  }

  const handleTimeChange = (newTime: Date) => {
    setSelectedTime(newTime)
  }

  function handleCreateMeal() {
    navigation.navigate("mealFeedBack")
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
          <InputText label="Nome" />
          <InputText isTextArea multiline numberOfLines={4} label="Descrição" />

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
        </FormContainer>
        <Button
          text={isEditing ? "Salvar alterações" : "Criar refeição"}
          style={{ marginTop: "auto" }}
          onPress={handleCreateMeal}
        />
      </Content>
    </Container>
  )
}
