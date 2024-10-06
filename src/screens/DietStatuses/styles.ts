import styled, { css } from "styled-components/native"

type StatusesProps = {
  isOnDiet: boolean
}

export const Container = styled.View<StatusesProps>`
  flex: 1;

  background-color: ${({ theme, isOnDiet }) =>
    isOnDiet ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
`

export const HeaderContainer = styled.View`
  padding: 24px;
`

export const Content = styled.View`
  flex: 1;

  width: 100%;
  padding-top: 32px;
  padding-left: 24px;
  padding-right: 24px;

  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-radius: 20px 20px 0 0;
`
