import { ViewProps } from "react-native"

import { CustomText } from "@components/CustomText"

import { Container, Dot } from "./styles"

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
