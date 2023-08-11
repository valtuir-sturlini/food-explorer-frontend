import { Container } from "./styles";
import logoGray from "../../assets/logo_gray.svg";

export function Footer() {
  return (
    <Container>
      <img src={logoGray} alt="Logotipo Food Explorer" />
      <p>© 2023 - Todos os direitos reservados.</p>
    </Container>
  );
}
