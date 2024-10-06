import { CustomText } from "@/components/CustomText"

import { Item } from "@/@types/sectionLIst"

import {
  Container,
  InfoContainer,
  InfoDivider,
  StatusContainer,
} from "./styles"

type MealItemProps = Item

export function MealItem({
  time,
  onDiet = true,
  meal,
  date,
  ...rest
}: MealItemProps) {
  return (
    <Container {...rest}>
      <InfoContainer>
        <CustomText text={time} size="XS" color="GRAY_100" fontWeight="BOLD" />
        <InfoDivider />
        <CustomText text={meal} size="MD" color="GRAY_200" />
      </InfoContainer>
      <StatusContainer onDiet={onDiet} />
    </Container>
  )
}
