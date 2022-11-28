import myContext from "../contexts/myContext";
import Login from "../Login/SignUp/Login";
import SignUp from "../Login/SignUp/SignUp";
import Products from "../Products/Products";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";
import Shopping from "../Shopping/Shopping";
import Checkout from "../Checkout/Checkout";
import ProductInfo from "../Product-Info/ProductInfo";
import AddProducts from "../Products/AddProducts";
export default function Container() {
  //State para mandar no post de login
  const [log, setLog] = useState({
    email: "",
    senha: "",
    Bearer: "",
  });
  //State para mandar no post de signup (senha2 é pra ser igual senha)
  const [cad, setCad] = useState({
    nome: "",
    cpf: "",
    email: "",
    senha: "",
    senha2: "",
  });
  const [session,setSession] = useState(false)
  //State para salvar os produtos no carrinho de compra
  const [listShopping, setListShopping] = useState([
    // {
    //   id: 1,
    //   nome: "Placa de RTX 100000",
    //   valor: 1000.0,
    //   url_imagem:
    //     "https://cdn.dooca.store/107/products/i4nzapixzcdjfv7y3x050ov6ojcffqjnlrls_640x640+fill_ffffff.png?v=1645474553&webp=0",
    // },
    // {
    //   id: 2,
    //   nome: "Placa cara",
    //   valor: 890.0,
    //   url_imagem:
    //     "https://s2.glbimg.com/NaWdSD_-mHDjuaj1PbO2CXhXV8w=/0x0:695x521/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2017/Q/q/F5BBqCR4AtDbXjT2jtAQ/gigabyte-aorus-570.png",
    // },
  ]);


  const [addProd,setAddProd] = useState({    
    nome:"",
    valor:"",
    descricao:"",
    url_imagem:""}
  )
  return (
    <>
      <myContext.Provider
        value={{ log, setLog, cad, setCad, listShopping, setListShopping,session,setSession,addProd,setAddProd }}
      >
        <Global>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Products />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/shopping" element={<Shopping />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/products" element={<ProductInfo />} />
              <Route path="/addproducts" element={<AddProducts />} />
            </Routes>
          </BrowserRouter>
        </Global>
      </myContext.Provider>
    </>
  );
}

const Global = styled.div`
  width: 100%;
  height: 100%;
`;
