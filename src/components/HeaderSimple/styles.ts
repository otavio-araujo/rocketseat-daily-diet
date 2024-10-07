import { TouchableOpacity } from "react-native"
import styled, { css } from "styled-components/native"

export const Container = styled(TouchableOpacity)`
  align-items: center;
  justify-content: center;

  border-radius: 8px;
`
export const IconContainer = styled.View`
  position: absolute;

  left: 12px;

  align-items: center;
  justify-content: center;

  min-width: 24px;
  min-height: 24px;
`
