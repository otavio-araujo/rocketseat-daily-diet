import { CustomText } from "@/components/CustomText"
import { Container } from "./styles"
import { MealItem } from "@/components/MealItem"

type Item = {
  id: string
  hour: string
  date: string
  description: string
  name: string
  inDiet: boolean
}

type Section = {
  title: string
  data: Item[]
}

type Props = {
  sections: Section[]
}

export function MealList({ sections }: Props) {
  return console.log(sections)

  return (
    <Container>
      <CustomText
        text="Teste"
        fontWeight="BOLD"
        size="LG"
        style={{ marginBottom: 8 }}
      />
    </Container>
  )
}
