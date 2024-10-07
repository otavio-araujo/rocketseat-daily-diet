import { Text } from "react-native"
import styled, { css } from "styled-components/native"

import { TextColor, TextWeight, TextSize } from "@/@types/theme"

import { getFontSize, getColors } from "@/utils/themeFunctions"

export type TextProps = {
  size?: TextSize
  color?: TextColor
  fontWeight?: TextWeight
}

export const Txt = styled(Text)<TextProps>`
  ${({ theme, size, color, fontWeight }) => css`
    font-family: ${fontWeight === "BOLD"
      ? theme.FONT_FAMILY.BOLD
      : theme.FONT_FAMILY.REGULAR};
    font-size: ${getFontSize({ size })}px;
    color: ${getColors({ color })};
  `}
`
