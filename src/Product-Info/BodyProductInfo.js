import styled from "styled-components";
import { useContext } from "react";
import MyContext from "../contexts/myContext";

export default function BodyProductInfo() {
  const { listShopping } = useContext(MyContext);
  return (
    <Container>
      <h3>{listShopping[0].nome}</h3>
      <span>Preço R$ {listShopping[0].valor}</span>
      <div>
        <h3>Descrição</h3>
      </div>
      <span>Placa de vídeo muito boa mesmo, recomendo</span>
    </Container>
  );
}

const Container = styled.div`
  width: 90%;
  height: 60vh;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;

  h3 {
    margin: 20px 0;
    font-size: 1.5em;
    font-weight: 700;
    color: #ffffff;
  }
  div {
    margin: 20px 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  span {
    color: #ffffff;
  }
`;
