import { CustomText } from "@/components/CustomText"

import {
  Container,
  InfoContainer,
  InfoDivider,
  StatusContainer,
} from "./styles"

import { Item } from "@/@types/sectionList"

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
