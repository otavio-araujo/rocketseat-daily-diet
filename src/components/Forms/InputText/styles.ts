import styled from "styled-components/native"

type Props = {
  isTextArea?: boolean
}

export const Container = styled.View`
  width: 100%;
`

export const TextInput = styled.TextInput<Props>`
  height: ${({ isTextArea }) => (isTextArea ? 120 : 48)}px;

  padding: 14px;

  border-width: 1px;
  border-color: ${({ theme }) => theme.COLORS.GRAY_500};
  border-radius: 6px;

  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
`
