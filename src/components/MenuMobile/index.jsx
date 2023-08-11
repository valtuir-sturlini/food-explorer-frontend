import { Container, Search, SignOut } from "./styles";
import { IoCloseOutline } from "react-icons/io5";

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../../services/api";

import { Input } from "../Input";
import { Footer } from "../Footer";
import { useAuth } from "../../hooks/auth";

export function MenuMobile({ onClose, setSearchTerm, setDishes }) {
  const [search, setSearch] = useState("");
  const { signOut } = useAuth();
  const { user } = useAuth();

  const navigate = useNavigate();

  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    setSearch(searchTerm);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && search.trim() !== "") {
      fetchDishes();
    }
  };

  async function fetchDishes() {
    const response = await api.get(`/dishes?name=${search}`);
    setDishes(response.data);
    navigate("/", { state: { search } });
    onClose(); // Fechar o menu após a busca
  }

  async function handleSignOut() {
    signOut();
    navigate("/");
  }

  const handleClose = () => {
    onClose();
  };

  return (
    <Container>
      <header>
        <IoCloseOutline size={30} onClick={handleClose} />
        <p>Menu</p>
      </header>
      <main>
        <Search>
          <Input
            title="Busque por pratos ou ingredientes"
            onChange={handleSearch}
            onKeyDown={handleKeyDown}
          />
        </Search>
        <nav>
          {user.isAdmin ? <Link to="/new">Novo Prato</Link> : null}
          <SignOut onClick={handleSignOut}>
            <a>Sair</a>
          </SignOut>
        </nav>
      </main>
      <Footer />
    </Container>
  );
}
