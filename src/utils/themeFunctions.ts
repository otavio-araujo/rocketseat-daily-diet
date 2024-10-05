import theme from "@/theme"

import { TextProps } from "../components/CustomText/styles"

export function getFontSize({ size = "MD" }: TextProps) {
  switch (size) {
    case "XS":
      return theme.FONT_SIZE.XS
    case "SM":
      return theme.FONT_SIZE.SM
    case "MD":
      return theme.FONT_SIZE.MD
    case "LG":
      return theme.FONT_SIZE.LG
    case "XL":
      return theme.FONT_SIZE.XL
    case "XXL":
      return theme.FONT_SIZE.XXL
  }
}

export function getColors({ color = "GRAY_100" }: TextProps) {
  switch (color) {
    case "GREEN_DARK":
      return theme.COLORS.GREEN_DARK
    case "GREEN_LIGHT":
      return theme.COLORS.GREEN_LIGHT
    case "GREEN_MID":
      return theme.COLORS.GREEN_MID
    case "RED_DARK":
      return theme.COLORS.RED_DARK
    case "RED_LIGHT":
      return theme.COLORS.RED_LIGHT
    case "RED_MID":
      return theme.COLORS.RED_MID
    case "GRAY_100":
      return theme.COLORS.GRAY_100
    case "GRAY_200":
      return theme.COLORS.GRAY_200
    case "GRAY_300":
      return theme.COLORS.GRAY_300
    case "GRAY_400":
      return theme.COLORS.GRAY_400
    case "GRAY_500":
      return theme.COLORS.GRAY_500
    case "GRAY_600":
      return theme.COLORS.GRAY_600
    case "GRAY_700":
      return theme.COLORS.GRAY_700
    case "WHITE":
      return theme.COLORS.WHITE
  }
}
