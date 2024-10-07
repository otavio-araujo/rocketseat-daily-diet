import styled from "styled-components/native"

export const Container = styled.View`
  flex: 1;
`

export const Trigger = styled.TouchableOpacity`
  width: 100%;
  padding: 14px;

  min-height: 48px;
  max-height: 38px;

  border-width: 1px;
  border-color: ${({ theme }) => theme.COLORS.GRAY_500};
  border-radius: 6px;
`
