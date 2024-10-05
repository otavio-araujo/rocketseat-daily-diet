import { ReactNode } from "react"
import {
  ButtonTypeStyleProps,
  Container,
  IconContainer,
  Number,
  Text,
} from "./styles"

type Props = {
  number: string
  text: string
  type: ButtonTypeStyleProps
  icon?: ReactNode
}

export function Statistics({
  number,
  text,
  type = "DEFAULT",
  icon = null,
  ...rest
}: Props) {
  return (
    <Container type={type} {...rest}>
      {icon && <IconContainer>{icon}</IconContainer>}
      <Number>{number}</Number>
      <Text>{text}</Text>
    </Container>
  )
}
