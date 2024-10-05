import { ReactNode } from "react"
import {
  ButtonTypeStyleProps,
  Container,
  IconContainer,
  Number,
  NumberSizeStyleProps,
  Text,
} from "./styles"
import { CustomText } from "@components/CustomText"

type Props = {
  number: string
  text: string
  type: ButtonTypeStyleProps
  numberSize?: NumberSizeStyleProps
  icon?: ReactNode
}

export function Statistics({
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
      <CustomText text={number} size="XXL" fontWeight="BOLD" color="GRAY_100" />
      <CustomText text={text} size="SM" />
    </Container>
  )
}
