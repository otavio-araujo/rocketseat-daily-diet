import styled, { css } from "styled-components/native"

type Props = {
  isTextArea?: boolean
}

export const Container = styled.View`
  width: 100%;
`

export const TextInput = styled.TextInput<Props>`
  ${({ theme, isTextArea }) => css`
    height: ${isTextArea ? 120 : 48}px;

    border-color: ${theme.COLORS.GRAY_200};
    border-color: ${theme.COLORS.GRAY_500};

    color: ${theme.COLORS.GRAY_100};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}

  padding: 14px;

  border-width: 1px;
  border-radius: 6px;
`
