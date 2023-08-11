import { useState } from "react";
import { Container, Form } from "./styles";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import Logo from "../../assets/logo.svg";

import { useAuth } from "../../hooks/auth";

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = useAuth();

  function handleSignIn(e) {
    e.preventDefault();
    signIn({ email, password });
  }

  return (
    <Container>
      <img src={Logo} alt="Logo" />
      <Form>
        <h1>Faça login</h1>
        <div className="emailField">
          <label htmlFor="email">E-mail</label>
          <Input
            title="exemplo@exemplo.com.br"
            type="text"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
          ></Input>
        </div>
        <div className="passwordField">
          <label htmlFor="password">Senha</label>
          <Input
            title="No mínimo 6 caracteres"
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
          ></Input>
        </div>
        <Button
          type="submit"
          title="Entrar"
          id="signIn"
          onClick={handleSignIn}
        />
        <Link to="/register">
          <button>Criar uma conta</button>
        </Link>
      </Form>
    </Container>
  );
}
