import { Container, Logo, Search, SignOut, Button } from "./styles";
import { Input } from "../Input";
import { MenuMobile } from "../MenuMobile";

import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import logoAdmin from "../../assets/logo_admin.svg";
import logo from "../../assets/logo.svg";
import menu from "../../assets/menu.svg";
import signout from "../../assets/sign_out.svg";
import receipt from "../../assets/receipt.svg";

export function Header({ setSearchTerm, setDishes }) {
  const { user, signOut } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [cartItems, setCartItems] = useState([]);

  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogoClick = () => {
    if (search.trim() !== "") {
      setSearchTerm("");
      setDishes([]);
    }
  };

  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    setSearch(searchTerm);

    setSearchTerm(searchTerm);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && search.trim() !== "") {
      fetchDishes();
    }
  };

  async function fetchDishes() {
    const response = await api.get(`/dishes?name=${search}`);
    setDishes(response.data);
    if (location.pathname !== "/") {
      navigate("/", { state: { search } });
    }
  }

  async function fetchCartItems() {
    try {
      const response = await api.get(`/cart/user/{userId}`);
      setCartItems(response.data);
    } catch (error) {
      console.error("Erro ao obter os itens do carrinho:", error);
    }
  }

  useEffect(() => {
    fetchCartItems();
  }, []);

  function getTotalItems(cartItems) {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  }

  const totalItemsInCart = cartItems && getTotalItems(cartItems);

  async function handleSignOut() {
    signOut();
    navigate("/");
  }

  return (
    <Container>
      <div className="menuButton">
        <button onClick={toggleMenu}>
          <img src={menu} alt="Menu" />
        </button>
      </div>
      {user.isAdmin ? (
        <Logo to="/" onClick={handleLogoClick}>
          <img src={logoAdmin} alt="Logotipo Food Explorer" />
        </Logo>
      ) : (
        <Logo to="/" onClick={handleLogoClick}>
          <img src={logo} alt="Logotipo Food Explorer" />
        </Logo>
      )}

      <Search>
        <Input
          title="Busque por pratos ou ingredientes"
          onChange={handleSearch}
          onKeyDown={handleKeyDown}
        />
      </Search>

      {isMenuOpen && (
        <MenuMobile
          setSearchTerm={setSearch}
          setDishes={setDishes}
          onClose={toggleMenu}
        />
      )}

      {user.isAdmin ? (
        <Button to="/new">
          <p>Novo Prato</p>
        </Button>
      ) : (
        <Button to="/cart">
          <img src={receipt} alt="" />
          <p>Pedidos ({totalItemsInCart})</p>
        </Button>
      )}

      <SignOut onClick={handleSignOut}>
        <img src={signout} alt="Botão para deslogar" />
      </SignOut>
    </Container>
  );
}
