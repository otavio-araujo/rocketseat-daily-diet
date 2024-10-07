import { ReactNode } from "react"
import { Container, Dot } from "./styles"
import { CustomText } from "@components/CustomText"
import { ButtonType } from "@/@types/theme"
import { ViewProps } from "react-native"

type Props = ViewProps & {
  text: string
  isOnDiet?: boolean
}

export function Pill({ text, isOnDiet = false, ...rest }: Props) {
  return (
    <Container {...rest}>
      <Dot isOnDiet={isOnDiet} />
      <CustomText text={text} size="SM" />
    </Container>
  )
}
