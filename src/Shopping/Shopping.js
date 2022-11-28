import { useContext } from "react";
import styled from "styled-components";
import MyContext from "../contexts/myContext";
import BottomShopping from "./BottomShopping";
import ListItens from "./ListItens";
import TopShopping from "./TopShopping";
export default function Shopping() {
  const { listShopping } = useContext(MyContext);
  let total = 0;
  for (let i = 0; i < listShopping.length; i++) {
    total += Number(listShopping[i].valor);
  }
  return (
    <Container>
      <TopShopping />
      <ListItens />
      <BottomShopping />
      <Price>R$ {total.toFixed(2)}</Price>
    </Container>
  );
}

const Container = styled.div`
  background-color: rgb(12, 27, 61);
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
`;

const Price = styled.div`
  width: 90%;
  justify-content: flex-start;
  align-items: center;
  font-weight: 700;
  font-size: 1.4em;
`;
