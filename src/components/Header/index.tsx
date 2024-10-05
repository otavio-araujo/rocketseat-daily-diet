import { Image } from "react-native"
import { Container, Avatar } from "./styles"

export function Header() {
  return (
    <Container>
      <Image source={require("@/assets/logo/logo.png")} />
      <Avatar
        source={{
          uri: "https://gravatar.com/avatar/27205e5c51cb03f862138b22bcb5dc20f94a342e744ff6df1b8dc8af3c865109?s=40",
        }}
        width={40}
        height={40}
      />
    </Container>
  )
}
