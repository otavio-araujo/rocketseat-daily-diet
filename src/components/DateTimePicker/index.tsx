import Picker from "@react-native-community/datetimepicker"
import { Container, Trigger } from "./styles"
import { CustomText } from "@/components/CustomText"
import { format } from "date-fns"
import { ptBR } from "date-fns/locale"
import { useState } from "react"
import { Platform, Text } from "react-native"

type Props = {
  label: string
  date: Date
  pickerType: "date" | "time"
  onDateChange: (date: Date) => void
}

export function DateTimePicker({
  label,
  date,
  pickerType,
  onDateChange,
}: Props) {
  const [pickerDate, setPickerDate] = useState(date)
  const [mode, setMode] = useState({ pickerType })
  const [showPicker, setShowPicker] = useState<boolean>(false)

  const dateTimeFormat = pickerType === "date" ? "dd/MM/yyyy" : "HH:mm"

  const onChange = (event: any, selectedDate?: Date) => {
    const currentDate = selectedDate ? new Date(selectedDate) : new Date(date)
    setShowPicker(false)
    setPickerDate(currentDate)
    onDateChange(currentDate)
  }

  const showMode = () => {
    setShowPicker(true)
  }

  return (
    <Container>
      <CustomText text={label} size="SM" color="GRAY_100" fontWeight="BOLD" />
      <Trigger onPress={() => showMode()}>
        <CustomText
          text={format(pickerDate, dateTimeFormat, { locale: ptBR })}
          size="SM"
          color="GRAY_100"
        />
      </Trigger>
      {showPicker && (
        <Picker
          testID="dateTimePicker"
          value={pickerDate}
          mode={pickerType}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    </Container>
  )
}
