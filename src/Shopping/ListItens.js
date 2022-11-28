import styled from "styled-components";
import { useContext } from "react";
import MyContext from "../contexts/myContext";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
export default function ListItens() {
  const { listShopping, log, setListShopping } = useContext(MyContext);
  const navigate = useNavigate();
  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${log.Bearer}`,
      },
    };
    const promise = axios.get(`https://projeto14-mywallet-back-v3.onrender.com/shopping`, config);
    promise.then((res) => console.log("deu certo"));
    promise.catch((erro) => {
      console.log(erro);
    });
  }, []);
  console.log(listShopping);
  return (
    <Container>
      {listShopping.length === 0 ? (
        <h1>Seu carrinho está vazio :c</h1>
      ) : (
        listShopping.map((product, index) => {
          return (
            <Item key={index}>
              <img src={product.url_imagem} alt="imagem item" />
              <div>
                <span>{product.nome}</span>
                <p>R$ {product.valor}</p>
              </div>
            </Item>
          );
        })
      )}
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
