import { TextColor, TextSize, TextWeight } from "@/@types/theme"
import { Txt } from "./styles"

import { TextInputProps } from "react-native"

type Props = TextInputProps & {
  text: string | undefined | Date
  size?: TextSize
  color?: TextColor
  fontWeight?: TextWeight
}

export function CustomText({
  text,
  size = "MD",
  color = "GRAY_100",
  fontWeight = "REGULAR",
  ...rest
}: Props) {
  return (
    <Txt color={color} size={size} fontWeight={fontWeight} {...rest}>
      {text?.toString()}
    </Txt>
  )
}
