import { Container, Content, Description } from "./styles";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { api } from "../../services/api";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Ingredient } from "../../components/Ingredient";
import { ButtonText } from "../../components/ButtonText";
import { IncludeButton } from "../../components/IncludeButton";

import imagePlaceholder from "../../assets/image-placeholder.png";

export function Details() {
  const [data, setData] = useState(null);

  const [search, setSearch] = useState("");
  const [dishes, setDishes] = useState([]);

  const imageURL = data?.image
    ? `${api.defaults.baseURL}/files/${data.image}`
    : imagePlaceholder;

  const params = useParams();

  useEffect(() => {
    async function fetchDish() {
      const response = await api.get(`/dishes/${params.id}`);
      setData(response.data);
    }

    fetchDish();
  }, [params.id]);

  return (
    <Container>
      <Header setSearchTerm={setSearch} setDishes={setDishes} />
      {data && (
        <main>
          <Content>
            <ButtonText />
            <Description>
              <img src={imageURL} alt="Imagem do prato" id="dishImage" />
              <div>
                <h1>{data.name}</h1>
                <p>{data.description}</p>
                {data.ingredients && (
                  <div className="ingredients">
                    {data.ingredients.map((ingredient) => (
                      <Ingredient
                        key={String(ingredient.id)}
                        title={ingredient.name}
                      />
                    ))}
                  </div>
                )}
                <div className="include">
                  <IncludeButton dish={data} />
                </div>
              </div>
            </Description>
          </Content>
        </main>
      )}
      <footer>
        <Footer />
      </footer>
    </Container>
  );
}
