import {
  Container,
  StatisticsIcon,
  StatisticsNumber,
  StatisticsText,
} from "./styles"

type Props = {
  statisticsNumber: string
  statisticsText: string
}

export function Statistics({ statisticsNumber, statisticsText }: Props) {
  return (
    <Container>
      <StatisticsIcon name="arrow-up-right" />
      <StatisticsNumber>{statisticsNumber}%</StatisticsNumber>
      <StatisticsText>{statisticsText}</StatisticsText>
    </Container>
  )
}
