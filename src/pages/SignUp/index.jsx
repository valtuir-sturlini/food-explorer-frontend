import { useState } from "react";
import { Container, Form } from "./styles";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import Logo from "../../assets/logo.svg";
import { api } from "../../services/api";

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleSignUp(e) {
    e.preventDefault();

    if (!name || !email || !password) {
      return alert("Preencha todos os campos!");
    }

    api
      .post("/users", { name, email, password })
      .then(() => {
        alert("Usuário cadastrado com sucesso!");
        navigate("/");
      })
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert("Não foi possível cadastrar");
        }
      });
  }

  return (
    <Container>
      <img src={Logo} alt="Logo" />
      <Form>
        <h1>Crie sua conta</h1>
        <div className="nameField">
          <label htmlFor="name">Seu nome</label>
          <Input
            title="Nome"
            type="text"
            id="name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="emailField">
          <label htmlFor="email">E-mail</label>
          <Input
            title="exemplo@exemplo.com.br"
            type="text"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="passwordField">
          <label htmlFor="password">Senha</label>
          <Input
            title="No mínimo 6 caracteres"
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Button
          type="submit"
          title="Criar conta"
          id="signUp"
          onClick={handleSignUp}
        />
        <Link to="/">
          <button>Já tenho uma conta</button>
        </Link>
      </Form>
    </Container>
  );
}
