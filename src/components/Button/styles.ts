import styled, { css } from "styled-components/native"
import { TouchableOpacity } from "react-native"

import { ButtonType } from "@/@types/theme"

type Props = {
  type: ButtonType
}

export const Container = styled(TouchableOpacity)<Props>`
  ${({ theme, type }) => css`
    border-color: ${theme.COLORS.GRAY_200};
    background-color: ${type === "PRIMARY"
      ? theme.COLORS.GRAY_200
      : theme.COLORS.GRAY_700};
    border-width: ${type === "SECONDARY" ? "1px" : "0px"};
    border-color: ${type === "SECONDARY" ? theme.COLORS.GRAY_100 : "none"};
  `}
  width: 100%;

  padding: 24px 16px;

  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 12px;

  border-radius: 6px;
`
