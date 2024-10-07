import styled, { css } from "styled-components/native"

export const ModalContainer = styled.View`
  flex: 1;
  padding: 24px;
  align-items: center;
  justify-content: center;
  background-color: "rgba(0,0,0,0.5)";
`

export const ModalCard = styled.View`
  width: 100%;
  padding: 24px 40px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  border-radius: 8px;
`

export const ButtonContaier = styled.View`
  margin-top: 32px;
  gap: 12px;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`
