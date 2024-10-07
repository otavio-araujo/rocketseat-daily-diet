import { useState } from "react"
import { View } from "react-native"
import { ArrowLeft } from "phosphor-react-native"
import { useTheme } from "styled-components/native"
import RNDateTimePicker from "@react-native-community/datetimepicker"

import { CustomText } from "@/components/CustomText"
import { HeaderSimple } from "@/components/HeaderSimple"

import {
  Container,
  Content,
  DateContainer,
  FormContainer,
  HeaderContainer,
  ToggleContainer,
} from "./styles"
import { InputText } from "@/components/Forms/InputText"
import { ToggleButton } from "@/components/ToggleButton"

export function MealCreate() {
  const { COLORS } = useTheme()
  const [isOnDiet, setIsOnDiet] = useState<boolean | null>(null)

  return (
    <Container type="PRIMARY">
      <HeaderContainer>
        <HeaderSimple
          title="Criar refeição"
          icon={<ArrowLeft size={24} color={COLORS.GREEN_DARK} />}
        />
      </HeaderContainer>

      <Content>
        <FormContainer>
          <InputText label="Nome" />
          <InputText isTextArea multiline numberOfLines={4} label="Descrição" />

          <DateContainer>
            <View style={{ flex: 1 }}>
              <InputText label="Data" />
            </View>
            <View style={{ flex: 1 }}>
              <InputText label="Hora" />
            </View>
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
          <RNDateTimePicker value={new Date()} />
        </FormContainer>
      </Content>
    </Container>
  )
}
