import styled, { css } from "styled-components/native"

export const Container = styled.View`
  flex: 1;
  padding: 24px;

  align-items: center;
  justify-content: center;
`

export const Text = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `};

  text-align: center;
  margin-top: 8px;
`

export const BoldText = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`
