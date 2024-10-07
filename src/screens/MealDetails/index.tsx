import { HeaderSimple } from "@/components/HeaderSimple"
import { Container, Content, HeaderContainer } from "./styles"
import { ArrowLeft, PencilSimpleLine, Trash } from "phosphor-react-native"
import { useTheme } from "styled-components/native"
import { CustomText } from "@/components/CustomText"
import { Pill } from "@/components/Pill"
import { View } from "react-native"
import { useState } from "react"
import { Button } from "@/components/Button"
import { CustomAlert } from "@/components/CustomAlert"

export function MealDetails() {
  const { COLORS } = useTheme()

  const [isOnDiet, setIsOnDiet] = useState(false)
  const [showAlert, setAlertVisible] = useState(false)

  const handleConfirm = async () => {
    setAlertVisible(false)
  }

  const handleCancel = () => {
    // Handle the cancel action
    setAlertVisible(false)
  }

  function handleDelete() {
    setAlertVisible(true)
  }

  return (
    <Container type="PRIMARY">
      <HeaderContainer>
        <HeaderSimple
          title="Refeição"
          icon={<ArrowLeft size={24} color={COLORS.GREEN_DARK} />}
        />
      </HeaderContainer>
      <Content>
        <CustomText text="Sanduíche" size="XL" fontWeight="BOLD" />
        <CustomText
          text="Sanduíche de pão integral com atum e salada de alface e tomate"
          size="MD"
          style={{ marginTop: 8 }}
        />
        <CustomText
          text="Data e hora"
          size="SM"
          fontWeight="BOLD"
          style={{ marginTop: 24 }}
        />
        <CustomText
          text="12/08/2022 às 16:00"
          size="MD"
          style={{ marginTop: 8 }}
        />
        <Pill
          isOnDiet={isOnDiet}
          text={isOnDiet ? "dentro da dieta" : "fora da dieta"}
          style={{ marginRight: "auto", marginTop: 24 }}
        />
        <Button
          text="Editar refeição"
          icon={<PencilSimpleLine size={18} color={COLORS.WHITE} />}
          style={{ marginTop: "auto" }}
        />

        <Button
          text="Excluir refeição"
          type="SECONDARY"
          icon={<Trash size={18} color={COLORS.GRAY_100} />}
          style={{ marginTop: 8 }}
          onPress={handleDelete}
        />
      </Content>
      <CustomAlert
        visible={showAlert}
        onCancel={handleCancel}
        onConfirm={handleConfirm}
        message="Deseja realmente excluir o registro da refeição?"
      />
    </Container>
  )
}
