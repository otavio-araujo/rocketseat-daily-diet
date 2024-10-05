import { CustomText } from "@/components/CustomText"
import { Container } from "./styles"
import { MealItem } from "@/components/MealItem"

type Props = {
  date: string
}

export function MealList({ date }: Props) {
  return (
    <Container>
      <CustomText
        text={date}
        fontWeight="BOLD"
        size="LG"
        style={{ marginBottom: 8 }}
      />
      <MealItem status="ON_DIET" time="08:00" mealName="Salada" />
    </Container>
  )
}
