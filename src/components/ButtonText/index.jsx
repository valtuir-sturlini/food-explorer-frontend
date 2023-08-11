import { Container } from "./styles";
import arrowLeft from "../../assets/caret_left.svg";

export function ButtonText() {
  return (
    <Container to="/">
      <img src={arrowLeft} alt="Botão de voltar" />
      voltar
    </Container>
  );
}
