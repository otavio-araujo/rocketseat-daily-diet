import styled, { css } from "styled-components/native"

export const Container = styled.View`
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.COLORS.GREEN_LIGHT};

  margin-top: 32px;
  height: 102px;
  padding: 20px 16px;

  border-radius: 8px;
`

export const StatisticsNumber = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XXL}px;
    color: ${theme.COLORS.GRAY_100};
  `}
  line-height: ${32 * 1.3}px;
`

export const StatisticsText = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_200};
  `}
  line-height: ${14 * 1.3}px;
`
