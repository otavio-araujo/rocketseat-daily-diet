import { ButtonType } from "@/@types/theme"
import styled, { css } from "styled-components/native"

type ContainerProps = {
  isActive: boolean | null
  type: ButtonType
}

type DotProps = {
  type: ButtonType
}

export const Container = styled.TouchableOpacity<ContainerProps>`
  flex: 1;
  width: 100%;
  min-height: 50px;
  max-height: 50px;

  gap: 8px;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  border-width: 1px;
  border-color: ${({ theme, type, isActive }) =>
    isActive
      ? type === "PRIMARY"
        ? theme.COLORS.GREEN_DARK
        : theme.COLORS.RED_DARK
      : theme.COLORS.GRAY_600};
  border-radius: 6px;

  background-color: ${({ theme, type, isActive }) =>
    isActive
      ? type === "PRIMARY"
        ? theme.COLORS.GREEN_LIGHT
        : theme.COLORS.RED_LIGHT
      : theme.COLORS.GRAY_600};
`

export const Dot = styled.View<DotProps>`
  width: 8px;
  height: 8px;

  border-radius: 999px;

  background-color: ${({ theme, type }) =>
    type === "PRIMARY" ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
`
