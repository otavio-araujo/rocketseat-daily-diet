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

  margin-top: 32px;
  height: 102px;
  padding: 20px 16px;

  border-radius: 8px;
`

export const Number = styled.Text<NumberProps>`
  ${({ theme, size }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_100};

    font-size: ${theme.FONT_SIZE.XXL}px;
    font-size: ${({ theme }) =>
      size === "XXL" ? theme.FONT_SIZE.XXL + "px" : theme.FONT_SIZE.XL + "px"};
  `}
  line-height: ${32 * 1.3}px;
`

export const Text = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_200};
  `}
  line-height: ${14 * 1.3}px;
`

export const IconContainer = styled.View`
  position: absolute;
  top: 12px;
  right: 12px;

  align-items: center;
  justify-content: center;

  min-width: 24px;
  min-height: 24px;
`
