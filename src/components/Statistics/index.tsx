import { ReactNode } from "react"
import {
  ButtonTypeStyleProps,
  Container,
  IconContainer,
  Number,
  NumberSizeStyleProps,
  Text,
} from "./styles"

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
      <Number size={numberSize}>{number}</Number>
      <Text>{text}</Text>
    </Container>
  )
}
