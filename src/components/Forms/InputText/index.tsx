import React from "react"
import { TextInputProps } from "react-native"

import { CustomText } from "@/components/CustomText"

import { TextInput, Container } from "./styles"

type Props = TextInputProps & {
  isTextArea?: boolean
  label?: string
}

export function InputText({
  isTextArea = false,
  label = "",
  numberOfLines = 1,
  ...rest
}: Props) {
  return (
    <Container>
      <CustomText
        text={label}
        size="SM"
        color="GRAY_100"
        fontWeight="BOLD"
        style={{ marginBottom: 4 }}
      />
      <TextInput isTextArea={isTextArea} {...rest} textAlignVertical="top" />
    </Container>
  )
}
