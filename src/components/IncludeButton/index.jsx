import { Container, ButtonValue } from "./styles";
import { Button } from "../Button";
import { Modal } from "../Modal";

import { useAuth } from "../../hooks/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";

import plus from "../../assets/plus.svg";
import minus from "../../assets/minus.svg";

export function IncludeButton({ dish }) {
  const { user } = useAuth();
  const [quantity, setQuantity] = useState(1);
  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();

  function handleEditDish(id) {
    navigate(`/edit/${id}`);
  }

  const increase = () => {
    setQuantity((count) => count + 1);
  };

  const decrease = () => {
    setQuantity((count) => {
      if (count === 0) {
        return count;
      }

      return count - 1;
    });
  };

  async function handleInclude() {
    try {
      const cartResponse = await api.get(`/cart/user/{userId}`);
      const cartItems = cartResponse.data;
      const cartItem = cartItems.find((item) => item.dish_id === dish.id);

      if (cartItem) {
        await api.put(`/cart/${cartItem.id}`, {
          quantity: cartItem.quantity + quantity,
        });
      } else {
        await api.post("/cart", {
          dish_id: dish.id,
          quantity: quantity,
        });
      }
      setShowModal(true);
    } catch (error) {
      alert(
        "Erro ao adicionar prato ao carrinho. Por favor, tente novamente mais tarde."
      );
      console.error("Erro ao adicionar prato ao carrinho:", error);
    }
  }

  return (
    <Container>
      <main>
        {user.isAdmin ? (
          <Button
            title="Editar prato"
            onClick={() => handleEditDish(dish.id)}
          />
        ) : (
          <div>
            <div className="quantity">
              <ButtonValue id="minus" onClick={decrease}>
                <img src={minus} alt="" />
              </ButtonValue>
              <span>{quantity.toString().padStart(2, "0")}</span>
              <ButtonValue id="plus" onClick={increase}>
                <img src={plus} alt="" />
              </ButtonValue>
            </div>
            <Button title="incluir" onClick={handleInclude} />
            {showModal && (
              <Modal
                message="Item adicionado ao carrinho!"
                showModal={showModal}
              />
            )}
          </div>
        )}
      </main>
    </Container>
  );
}
