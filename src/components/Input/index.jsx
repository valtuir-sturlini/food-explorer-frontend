import { Container } from "./styles";

export function Input({ title, ...rest }) {
  return (
    <Container>
      <input placeholder={title} {...rest} />
    </Container>
  );
}
