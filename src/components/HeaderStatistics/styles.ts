import { TouchableOpacity } from "react-native"
import styled, { css } from "styled-components/native"

export type ButtonTypeStyleProps = "PRIMARY" | "SECONDARY" | "DEFAULT"
export type NumberSizeStyleProps = "XL" | "XXL"

type Props = {
  type: ButtonTypeStyleProps
}

type NumberProps = {
  size: NumberSizeStyleProps
}

export const Container = styled(TouchableOpacity)<Props>`
  align-items: center;
  justify-content: center;

  background-color: ${({ theme, type }) =>
    type === "PRIMARY"
      ? theme.COLORS.GREEN_LIGHT
      : type === "SECONDARY"
      ? theme.COLORS.RED_LIGHT
      : theme.COLORS.GRAY_600};

  height: 102px;
  padding: 20px 16px;

  border-radius: 8px;
`
export const IconContainer = styled.View`
  position: absolute;
  top: 12px;
  left: 12px;

  align-items: center;
  justify-content: center;

  min-width: 24px;
  min-height: 24px;
`
