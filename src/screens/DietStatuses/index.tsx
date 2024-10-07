import { useState } from "react"
import { View } from "react-native"
import { ArrowLeft } from "phosphor-react-native"
import { useTheme } from "styled-components/native"
import { useNavigation } from "@react-navigation/native"

import { CustomText } from "@/components/CustomText"
import { Statistics } from "@/components/Statistics"
import { HeaderStatistics } from "@/components/HeaderStatistics"

import { Container, Content, HeaderContainer } from "./styles"

export function DietStatuses() {
  const navigation = useNavigation()
  const { COLORS } = useTheme()
  const [isOnDiet, setIsOnDiet] = useState(true)

  return (
    <Container isOnDiet={isOnDiet}>
      <HeaderContainer>
        <HeaderStatistics
          onPress={() => navigation.navigate("home")}
          number="90.86%"
          text="das refeições dentro da dieta"
          type={isOnDiet ? "PRIMARY" : "SECONDARY"}
          numberSize="XXL"
          icon={
            <ArrowLeft
              size={24}
              color={isOnDiet ? COLORS.GREEN_DARK : COLORS.RED_DARK}
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
          number="22"
          text="melhor sequência de pratos dentro da dieta"
          type="DEFAULT"
          numberSize="XL"
          style={{ marginTop: 24 }}
        />

        <Statistics
          number="109"
          text="refeições registradas"
          type="DEFAULT"
          numberSize="XL"
          style={{ marginTop: 12 }}
        />

        <View style={{ flexDirection: "row", gap: 12, width: "100%" }}>
          <Statistics
            number="99"
            text="refeições dentro da dieta"
            type="PRIMARY"
            numberSize="XL"
            style={{ marginTop: 12, flex: 1 }}
          />

          <Statistics
            number="10"
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
