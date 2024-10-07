import React from "react"
import { Modal, View } from "react-native"

import { Button } from "@/components/Button"
import { CustomText } from "@/components/CustomText"

import { ButtonContaier, ModalCard, ModalContainer } from "./styles"

interface CustomAlertProps {
  visible: boolean
  title: string
  message: string
  onCancel: () => void
  onConfirm: () => void
}

export function CustomAlert({
  visible,
  title,
  message,
  onCancel,
  onConfirm,
}: CustomAlertProps) {
  return (
    <Modal
      visible={visible}
      statusBarTranslucent
      transparent={true}
      animationType="fade"
      onRequestClose={onCancel}
    >
      <ModalContainer>
        <ModalCard>
          <CustomText
            text="Deseja realmente excluir o registro da refeição?"
            color="GRAY_100"
            size="LG"
            fontWeight="BOLD"
            style={{ textAlign: "center" }}
          />
          <ButtonContaier>
            <View style={{ width: "50%" }}>
              <Button text="Cancelar" type="SECONDARY" onPress={onCancel} />
            </View>
            <View style={{ width: "50%" }}>
              <Button text="Excluir" onPress={onConfirm} />
            </View>
          </ButtonContaier>
        </ModalCard>
      </ModalContainer>
    </Modal>
  )
}
