import { ReactNode } from "react"
import { Container } from "./styles"
import { CustomText } from "@components/CustomText"
import { ButtonType } from "@/@types/theme"
import { ButtonProps, TouchableOpacityProps } from "react-native"

type Props = TouchableOpacityProps & {
  text: string
  icon?: ReactNode
  type?: ButtonType
}

export function Button({
  text,
  icon = null,
  type = "PRIMARY",
  ...rest
}: Props) {
  return (
    <Container type={type} {...rest}>
      {icon}
      <CustomText
        text={text}
        color={type === "PRIMARY" ? "WHITE" : "GRAY_100"}
        fontWeight="BOLD"
        size="SM"
      />
    </Container>
  )
}
