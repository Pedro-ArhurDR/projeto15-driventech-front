import styled from "styled-components";
import { useContext } from "react";
import MyContext from "../contexts/myContext";
import TopProductInfo from "./TopProductInfo";
import BodyProductInfo from "./BodyProductInfo";
import { AddOutline } from "react-ionicons";

export default function ProductInfo() {
  const { listShopping } = useContext(MyContext);
  return (
    <Container>
      <TopProductInfo />
      <img src={listShopping[0].url_imagem} alt="" />
      <BodyProductInfo />
      <button>
        <AddOutline color={"#000000"} height="25px" width="25px" /> Adicionar no
        Carrinho
      </button>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgb(12, 27, 61);
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 100%;
    height: 20vh;
  }
  button {
    color: black;
    width: 60%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #ffdd00;
    border: none;
    border-radius: 12px;
    font-weight: 700;
    font-size: 1.2em;
  }
`;
