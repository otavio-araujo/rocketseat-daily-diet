import { ReactNode } from "react"

import { CustomText } from "@components/CustomText"

import { Container, IconContainer } from "./styles"

type Props = {
  title: string
  icon?: ReactNode
}

export function HeaderSimple({ title, icon = null, ...rest }: Props) {
  return (
    <Container {...rest}>
      {icon && <IconContainer>{icon}</IconContainer>}
      <CustomText text={title} size="LG" fontWeight="BOLD" />
    </Container>
  )
}
