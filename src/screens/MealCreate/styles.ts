import styled, { css } from "styled-components/native"

type HeaderColor = "PRIMARY" | "SECONDARY" | "DEFAULT"

type StatusesProps = {
  type: HeaderColor
}

export const Container = styled.View<StatusesProps>`
  flex: 1;

  background-color: ${({ theme, type }) =>
    type === "PRIMARY"
      ? theme.COLORS.GREEN_LIGHT
      : type === "SECONDARY"
      ? theme.COLORS.RED_LIGHT
      : theme.COLORS.GRAY_500};
`

export const HeaderContainer = styled.View`
  padding: 24px;
`

export const Content = styled.View`
  flex: 1;

  width: 100%;
  padding-top: 40px;
  padding-left: 24px;
  padding-right: 24px;

  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-radius: 20px 20px 0 0;
`

export const FormContainer = styled.View`
  width: 100%;
  gap: 24px;
`

export const DateContainer = styled.View`
  width: 100%;
  flex-direction: row;
  gap: 20px;
`

export const ToggleContainer = styled.View`
  gap: 20px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`
