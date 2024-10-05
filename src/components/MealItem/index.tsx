import { CustomText } from "@/components/CustomText"
import {
  Container,
  InfoContainer,
  InfoDivider,
  StatusContainer,
} from "./styles"
import { StatusType } from "@/@types/theme"

type Props = {
  onDiet: StatusType
  time: string
  mealName: string
}

export function MealItem({ time, mealName, onDiet = true, ...rest }: Props) {
  return (
    <Container {...rest}>
      <InfoContainer>
        <CustomText text={time} size="XS" color="GRAY_100" fontWeight="BOLD" />
        <InfoDivider />
        <CustomText text={mealName} size="MD" color="GRAY_200" />
      </InfoContainer>
      <StatusContainer onDiet={onDiet} />
    </Container>
  )
}
