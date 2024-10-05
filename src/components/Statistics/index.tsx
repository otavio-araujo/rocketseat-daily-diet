import {
  Container,
  StatisticsIcon,
  StatisticsNumber,
  StatisticsText,
} from "./styles"

type Props = {
  statisticsNumber: string
  statisticsText: string
  statisticsIcon?: string
}

export function Statistics({
  statisticsNumber,
  statisticsText,
  statisticsIcon = "arrow-up-right",
}: Props) {
  return (
    <Container>
      <StatisticsIcon name={statisticsIcon} />
      <StatisticsNumber>{statisticsNumber}%</StatisticsNumber>
      <StatisticsText>{statisticsText}</StatisticsText>
    </Container>
  )
}
