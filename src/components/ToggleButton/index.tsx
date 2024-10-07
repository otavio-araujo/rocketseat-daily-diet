import { Container, Dot } from "./styles"
import { CustomText } from "../CustomText"
import { ButtonType } from "@/@types/theme"
import { TouchableOpacityProps } from "react-native"

type Props = TouchableOpacityProps & {
  label: string
  isActive?: boolean | null
  type: ButtonType
}

export function ToggleButton({
  label,
  type = "PRIMARY",
  isActive = false,
  ...rest
}: Props) {
  return (
    <Container type={type} isActive={isActive} {...rest}>
      <Dot type={type} />
      <CustomText text={label} size="SM" fontWeight="BOLD" />
    </Container>
  )
}
