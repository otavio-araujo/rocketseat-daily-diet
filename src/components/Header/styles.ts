import styled, { css } from "styled-components/native"

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  padding: 0 16px;
`

export const Avatar = styled.Image`
  ${({ theme }) => css`
    border-color: ${theme.COLORS.GRAY_200};
  `}

  width: 40px;
  height: 40px;

  border-width: 2px;
  border-radius: 20px;
`
