import { Image } from "react-native"
import React, { useState } from "react"

import { CustomText } from "@/components/CustomText"

import { BoldText, Container, Text } from "./styles"

export function MealFeedback() {
  const [isOnDiet, setIsOnDiet] = useState(true)

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
    </Container>
  )
}
