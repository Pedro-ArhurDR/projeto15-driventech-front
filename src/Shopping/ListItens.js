import styled from "styled-components";
import { useContext } from "react";
import MyContext from "../contexts/myContext";
export default function ListItens() {
  const { listShopping } = useContext(MyContext);
  return (
    <Container>
      {listShopping.map((product, index) => {
        return (
          <Item key={index}>
            <img src={product.url_imagem} alt="imagem item" />
            <div>
              <span>{product.nome}</span>
              <p>R$ {product.valor}</p>
            </div>
          </Item>
        );
      })}
    </Container>
  );
}

const Container = styled.ul`
  box-sizing: border-box;
  width: 90%;
  height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #ffffff;
  overflow-y: scroll;
`;

const Item = styled.li`
  width: 100%;
  height: 15vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #050e21;
  padding: 20px;
  margin: 15px 0;
  img {
    width: 30%;
  }

  div {
    width: 60%;
    height: 7vh;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
  }

  p {
    color: orange;
    font-weight: 700;
  }
`;
