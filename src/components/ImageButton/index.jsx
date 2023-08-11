import { Container } from "./styles";
import upload from "../../assets/upload.svg";

export function ImageButton({ ...rest }) {
  return (
    <Container>
      <div className="input-wrapper">
        <input type="file" id="myFileInput" {...rest} />
        <label htmlFor="myFileInput">
          <img src={upload} alt="" />
          <p>Selecione imagem</p>
        </label>
      </div>
    </Container>
  );
}
