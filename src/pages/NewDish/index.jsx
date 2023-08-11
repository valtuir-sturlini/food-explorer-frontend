import { useState } from "react";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";

import { Container, Form } from "./styles";
import { Input } from "../../components/Input";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Textarea } from "../../components/Textarea";
import { Button } from "../../components/Header/styles";
import { ButtonText } from "../../components/ButtonText";
import { ImageButton } from "../../components/ImageButton";
import { IngredientItem } from "../../components/IngredientItem";

export function NewDish() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const [search, setSearch] = useState("");
  const [dishes, setDishes] = useState([]);

  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState("");

  const navigate = useNavigate();

  function handleAddIngredient() {
    setIngredients((prevState) => [...prevState, newIngredient]);
    setNewIngredient("");
  }

  function handleRemoveIngredient(deleted) {
    setIngredients((prevState) =>
      prevState.filter((ingredient) => ingredient !== deleted)
    );
  }

  async function handleNewDish() {
    if (!image) {
      return alert("Insira uma imagem para o prato!");
    }

    if (!name) {
      return alert("Insira o nome do prato!");
    }

    if (!category) {
      return alert("Selecione a categoria do prato!");
    }

    if (ingredients.length < 1) {
      return alert("Adicione pelo menos um ingrediente!");
    }

    if (newIngredient) {
      return alert(
        "Você deixou um ingrediente no campo para adicionar, mas não clicou em adicionar. Clique para adicionar ou deixe o campo vazio!"
      );
    }

    if (!price) {
      return alert("Informe o preço do prato!");
    }

    if (!description) {
      return alert("Adicione uma descrição para o prato!");
    }

    const formData = new FormData();
    formData.append("image", image);
    formData.append("name", name);
    formData.append("category", category);
    formData.append("description", description);
    formData.append("price", price);
    ingredients.map((ingredient) => formData.append("ingredients", ingredient));

    try {
      await api.post(`/dishes`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      alert("Prato criado com sucesso!");
      navigate("/");
    } catch (error) {
      console.error("Erro ao criar o prato:", error);
    }
  }

  function handleChangeImage(event) {
    const file = event.target.files[0];
    setImage(file);
  }

  return (
    <Container>
      <Header setSearchTerm={setSearch} setDishes={setDishes} />
      <Form>
        <ButtonText />
        <main>
          <h1>Adicionar prato</h1>
          <div className="fieldset-wrapper">
            <div className="input-wrapper">
              <label htmlFor="dishImage">Imagem do prato</label>
              <ImageButton accept="image/*" onChange={handleChangeImage} />
            </div>
            <div className="frame-wrapper">
              <div className="input-wrapper">
                <label htmlFor="name">Nome</label>
                <Input
                  title="Ex.: Salada Ceasar"
                  type="text"
                  id="name"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="input-wrapper">
                <label htmlFor="category">Categoria</label>
                <select
                  id="category"
                  defaultValue={"default"}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value="default" disabled>
                    Selecione a categoria
                  </option>
                  <option value="meals">Refeições</option>
                  <option value="desserts">Sobremesas</option>
                  <option value="drinks">Bebidas</option>
                </select>
              </div>
            </div>
          </div>

          <div className="frame-wrapper">
            <div className="fieldset-wrapper">
              <div className="input-wrapper">
                <label htmlFor="ingredients">Ingredientes</label>
                <div id="ingredients">
                  {ingredients.map((ingredient, index) => (
                    <IngredientItem
                      key={String(index)}
                      value={ingredient}
                      onClick={() => handleRemoveIngredient(ingredient)}
                    />
                  ))}
                  <IngredientItem
                    isNew
                    placeholder="Adicionar"
                    onChange={(e) => setNewIngredient(e.target.value)}
                    value={newIngredient}
                    onClick={handleAddIngredient}
                  />
                </div>
              </div>
              <div className="input-wrapper">
                <label htmlFor="price">Preço</label>
                <Input
                  title="R$ 00,00"
                  type="number"
                  id="price"
                  min="0"
                  step="any"
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
            </div>
          </div>
          <Textarea
            placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
            onChange={(e) => setDescription(e.target.value)}
          />
          <Button onClick={handleNewDish} type="button" id="buttonSave">
            Salvar alterações
          </Button>
        </main>
      </Form>

      <footer>
        <Footer />
      </footer>
    </Container>
  );
}
