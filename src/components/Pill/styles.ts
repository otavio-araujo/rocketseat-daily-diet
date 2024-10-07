import styled from "styled-components/native"
import { TouchableOpacity } from "react-native"

import { ButtonType } from "@/@types/theme"

type DotProps = {
  isOnDiet: boolean
}

export const Container = styled.View`
  padding: 8px 16px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_600};

  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;

  border-radius: 999px;
`

export const Dot = styled.View<DotProps>`
  width: 8px;
  height: 8px;

  border-radius: 999px;

  background-color: ${({ theme, isOnDiet }) =>
    isOnDiet ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
`
