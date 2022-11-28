import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import MyContext from "../contexts/myContext";
export default function LoadProducts() {
  const [allProd, setAllProd] = useState([]);
  const { listShopping, setListShopping } = useContext(MyContext);
  const produtos = [
    {
      nome: "Placa de RTX 100000",
      valor: 1000.0,
      url_imagem:
        "https://cdn.dooca.store/107/products/i4nzapixzcdjfv7y3x050ov6ojcffqjnlrls_640x640+fill_ffffff.png?v=1645474553&webp=0",
    },
    {
      nome: "Placa cara",
      valor: 890.0,
      url_imagem:
        "https://s2.glbimg.com/NaWdSD_-mHDjuaj1PbO2CXhXV8w=/0x0:695x521/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2017/Q/q/F5BBqCR4AtDbXjT2jtAQ/gigabyte-aorus-570.png",
    },
    {
      nome: "Placa de RTX 100000",
      valor: 1000.0,
      url_imagem:
        "https://cdn.dooca.store/107/products/i4nzapixzcdjfv7y3x050ov6ojcffqjnlrls_640x640+fill_ffffff.png?v=1645474553&webp=0",
    },
    {
      nome: "Placa de RTX 100000",
      valor: 1000.0,
      url_imagem:
        "https://cdn.dooca.store/107/products/i4nzapixzcdjfv7y3x050ov6ojcffqjnlrls_640x640+fill_ffffff.png?v=1645474553&webp=0",
    },
    {
      nome: "Placa de RTX 100000",
      valor: 1000.0,
      url_imagem:
        "https://cdn.dooca.store/107/products/i4nzapixzcdjfv7y3x050ov6ojcffqjnlrls_640x640+fill_ffffff.png?v=1645474553&webp=0",
    },
    {
      nome: "Placa de RTX 100000",
      valor: 1000.0,
      url_imagem:
        "https://cdn.dooca.store/107/products/i4nzapixzcdjfv7y3x050ov6ojcffqjnlrls_640x640+fill_ffffff.png?v=1645474553&webp=0",
    },
    {
      nome: "Placa de RTX 100000",
      valor: 1000.0,
      url_imagem:
        "https://cdn.dooca.store/107/products/i4nzapixzcdjfv7y3x050ov6ojcffqjnlrls_640x640+fill_ffffff.png?v=1645474553&webp=0",
    },
    {
      nome: "Placa de RTX 100000",
      valor: 1000.0,
      url_imagem:
        "https://cdn.dooca.store/107/products/i4nzapixzcdjfv7y3x050ov6ojcffqjnlrls_640x640+fill_ffffff.png?v=1645474553&webp=0",
    },
  ];

  useEffect(() => {
    const promise = axios.get(`http://localhost:5000/products`);
    promise.then((res) => console.log(res) & setAllProd(res.data));
    promise.catch((erro) => {
      console.log(erro);
    });
  }, []);

  function mandarItens(product) {
    const newProduct = [...listShopping, product];
    setListShopping(newProduct);
  }

  return (
    <Container heigthC={produtos.length}>
      {allProd.map((e, i) => (
        <Product key={i} onClick={() => mandarItens(e)}>
          <img src={e.url_imagem} alt="imagem item" /> <h2>{e.nome}</h2>{" "}
          <span>R$ {e.valor}</span>
        </Product>
      ))}
    </Container>
  );
}

const Container = styled.div`
  background-color: #091936;
  display: grid;

  overflow-y: scroll;
  scroll-behavior: smooth;

  width: 120%;
  height: 70vh;
  grid-template-columns: repeat(2, 49%);
  grid-template-rows: repeat(${(props) => props.heigthC / 2}, 32%);
  grid-gap: 0.5em;
  justify-content: space-between;
  overflow-x: hidden;

  margin-left: -11%;
`;
const Product = styled.div`
  background-color: #030e21;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  h2 {
    font-size: 14px;
  }
  img {
    width: 100px;
    height: 100px;
    border-radius: 10px;
  }
`;
