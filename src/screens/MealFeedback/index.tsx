import { Image } from "react-native"
import React, { useState } from "react"
import { useNavigation, useRoute } from "@react-navigation/native"

import { CustomText } from "@/components/CustomText"

import { BoldText, Container, Text } from "./styles"
import { Button } from "@/components/Button"

type RouteParams = {
  isOnDiet: boolean
}

export function MealFeedback() {
  const navigation = useNavigation()

  const route = useRoute()
  const { isOnDiet } = route.params as RouteParams

  const feedBackImage = isOnDiet
    ? require("@assets/images/positivefeedback.png")
    : require("@assets/images/negativefeedback.png")

  return (
    <Container>
      {isOnDiet ? (
        <>
          <CustomText
            text="Continue assim!"
            size="XL"
            fontWeight="BOLD"
            color={isOnDiet ? "GREEN_DARK" : "RED_DARK"}
          />

          <Text>
            Você continua <BoldText>dentro da dieta. </BoldText>Muito bem!
          </Text>
          <Image source={feedBackImage} style={{ marginTop: 40 }} />
        </>
      ) : (
        <>
          <CustomText
            text="Que pena!"
            size="XL"
            fontWeight="BOLD"
            color={isOnDiet ? "GREEN_DARK" : "RED_DARK"}
          />

          <Text>
            Você <BoldText>saiu da dieta </BoldText>dessa vez, mas continue se
            esforçando e não desista!
          </Text>
          <Image source={feedBackImage} style={{ marginTop: 40 }} />
        </>
      )}
      <Button
        text="Ir para a página incial"
        style={{ marginTop: 32 }}
        onPress={() => navigation.navigate("home")}
      />
    </Container>
  )
}
