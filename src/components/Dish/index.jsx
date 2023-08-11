import { Container } from "./styles";

import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";

import { IncludeButton } from "../IncludeButton";

import heart from "../../assets/heart.svg";
import imagePlaceholder from "../../assets/image-placeholder.png";

export function Dish({ data, ...rest }) {
  const { user } = useAuth();

  const imageURL = data?.image
    ? `${api.defaults.baseURL}/files/${data.image}`
    : imagePlaceholder;

  const navigate = useNavigate();

  function handleDetails(id) {
    navigate(`/details/${id}`);
  }

  return (
    <Container {...rest}>
      <button>
        <img src={heart} alt="" className="favoriteHeart" />
      </button>
      <img src={imageURL} alt="" onClick={() => handleDetails(data.id)} />
      <h1>
        {data.name}
        {" >"}
      </h1>
      <h2>{data.description} </h2>
      <p>
        R$ {data.price.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
      </p>
      {!user.isAdmin && <IncludeButton dish={data} />}
    </Container>
  );
}
