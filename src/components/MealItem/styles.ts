import styled from "styled-components/native"

import { StatusType } from "@/@types/theme"

type StatusProps = {
  status: StatusType
}

export const Container = styled.TouchableOpacity`
  width: 100%;
  min-height: 50px;
  padding: 12px 14px 16px 14px;

  border-width: 1px;
  border-radius: 6px;
  border-color: ${({ theme }) => theme.COLORS.GRAY_500};

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const InfoContainer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 12px;
`

export const StatusContainer = styled.View<StatusProps>`
  width: 16px;
  height: 16px;

  background-color: ${({ theme, status }) =>
    status === "ON_DIET" ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID};
  border-radius: 999px;
`

export const InfoDivider = styled.View`
  width: 1px;
  height: 14px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_400};
`
