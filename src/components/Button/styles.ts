import styled from "styled-components/native"
import { TouchableOpacity } from "react-native"

import { ButtonType } from "@/@types/theme"

type Props = {
  type: ButtonType
}

export const Container = styled(TouchableOpacity)<Props>`
  width: 100%;
  min-height: 80px;
  max-height: 80px;
  padding: 24px 16px;

  background-color: ${({ theme, type }) =>
    type === "PRIMARY" ? theme.COLORS.GRAY_200 : theme.COLORS.GRAY_700};

  border-width: ${({ type }) => (type === "SECONDARY" ? "1px" : "0px")};
  border-color: ${({ theme, type }) =>
    type === "SECONDARY" ? theme.COLORS.GRAY_100 : "none"};

  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 12px;

  border-radius: 6px;
`
