import { ReactNode } from "react"
import { TouchableOpacityProps } from "react-native"

import { CustomText } from "@components/CustomText"

import {
  ButtonTypeStyleProps,
  Container,
  IconContainer,
  NumberSizeStyleProps,
} from "./styles"

type Props = TouchableOpacityProps & {
  number: string
  text: string
  type: ButtonTypeStyleProps
  numberSize?: NumberSizeStyleProps
  icon?: ReactNode
}

export function HeaderStatistics({
  number,
  text,
  type = "DEFAULT",
  numberSize = "XXL",
  icon = null,
  ...rest
}: Props) {
  return (
    <Container type={type} {...rest}>
      {icon && <IconContainer>{icon}</IconContainer>}
      <CustomText
        text={number}
        size={numberSize}
        fontWeight="BOLD"
        color="GRAY_100"
      />
      <CustomText text={text} size="SM" />
    </Container>
  )
}
