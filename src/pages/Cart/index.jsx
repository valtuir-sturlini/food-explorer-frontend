import { Container } from "./styles";

import React, { useState, useEffect } from "react";
import { api } from "../../services/api";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Input } from "../../components/Input";
import { Button } from "../../components/Header/styles";

import { MdPix, MdCreditCard } from "react-icons/md";
import qrCode from "../../assets/qrCode.svg";
import receipt from "../../assets/receipt.svg";

export function Cart() {
  const [paymentMethod, setPaymentMethod] = useState("creditCard");
  const [cartItems, setCartItems] = useState([]);

  const [search, setSearch] = useState("");
  const [dishes, setDishes] = useState([]);

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
  };

  useEffect(() => {
    async function fetchCartItems() {
      try {
        const response = await api.get(`/cart/user/{userId}`);
        const cartItems = response.data;

        const promises = cartItems.map(async (item) => {
          const dishResponse = await api.get(`/dishes/${item.dish_id}`);
          const dishData = dishResponse.data;
          return {
            ...item,
            name: dishData.name,
            price: dishData.price,
            image: dishData.image,
          };
        });

        const updatedCartItems = await Promise.all(promises);

        setCartItems(updatedCartItems);
      } catch (error) {
        console.error("Erro ao obter os itens do carrinho:", error);
      }
    }

    fetchCartItems();
  }, []);

  async function handleRemoveFromCart(cartItemId) {
    try {
      await api.delete(`/cart/${cartItemId}`);
      setCartItems((prevCartItems) =>
        prevCartItems.filter((item) => item.id !== cartItemId)
      );
    } catch (error) {
      console.error("Erro ao excluir item do carrinho:", error);
    }
  }

  function calculateCartTotal() {
    if (!cartItems || cartItems.length === 0) {
      return 0;
    }

    const total = cartItems.reduce((acc, item) => {
      const itemPrice = parseFloat(item.price) || 0;
      const itemQuantity = item.quantity || 0;
      return acc + itemPrice * itemQuantity;
    }, 0);

    return total;
  }

  return (
    <Container>
      <Header setSearchTerm={setSearch} setDishes={setDishes} />
      <main>
        <div className="frame-wrapper">
          <h1>Meu pedido</h1>
          {cartItems.map((item) => (
            <div className="order-wrapper" key={item.id}>
              <img
                src={
                  item.image
                    ? `${api.defaults.baseURL}/files/${item.image}`
                    : ""
                }
                alt=""
              />
              <div className="content-wrapper">
                <div className="orderDetails">
                  <h2>
                    {item.quantity} x {item.name}
                  </h2>
                  <p>
                    {" "}
                    {item.price
                      ? `R$ ${item.price.toFixed(2)}`
                      : "Preço indisponível"}
                  </p>
                </div>
                <button onClick={() => handleRemoveFromCart(item.id)}>
                  Excluir
                </button>
              </div>
            </div>
          ))}
          <h3>Total: R$ {calculateCartTotal(cartItems).toFixed(2)}</h3>
        </div>

        <div className="frame-wrapper">
          <h1>Pagamento</h1>
          <div className="payment-wrapper">
            <div className="method-wrapper">
              <div
                className={`pix-method ${
                  paymentMethod === "pix" ? "selected" : ""
                }`}
              >
                {" "}
                <button onClick={() => handlePaymentMethodChange("pix")}>
                  <span>
                    <MdPix /> PIX
                  </span>
                </button>
              </div>
              <div
                className={`creditCard-method ${
                  paymentMethod === "creditCard" ? "selected" : ""
                }`}
              >
                <button onClick={() => handlePaymentMethodChange("creditCard")}>
                  <span>
                    <MdCreditCard /> Crédito
                  </span>
                </button>
              </div>
            </div>
            <div className="details-wrapper">
              {paymentMethod === "pix" ? (
                <div className="pix-payment">
                  <img src={qrCode} alt="" />
                </div>
              ) : (
                <div className="creditCard-payment">
                  <label htmlFor="cardNumber">Número do Cartão</label>
                  <Input
                    title="0000 0000 0000 0000"
                    type="text"
                    id="cardNumber"
                  />
                  <div className="col-2">
                    <div className="expirationDateField">
                      <label htmlFor="expirationDate">Validade</label>
                      <Input title="04/25" type="text" />
                    </div>
                    <div className="cvcField">
                      <label htmlFor="cvc">CVC</label>
                      <Input title="000" type="text" />
                    </div>
                  </div>
                  <Button id="closeOrder">
                    <img src={receipt} alt="" />
                    <p>Finalizar pagamento</p>
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </Container>
  );
}
