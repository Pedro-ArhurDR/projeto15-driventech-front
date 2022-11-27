import myContext from "../contexts/myContext";
import Login from "../Login/SignUp/Login";
import SignUp from "../Login/SignUp/SignUp";
import Products from "../Products/Products";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";
import Shopping from "../Shopping/Shopping";
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
  //State para salvar os produtos no carrinho de compra
  const [listShopping, setListShopping] = useState([]);

  return (
    <>
      <myContext.Provider
        value={{ log, setLog, cad, setCad, listShopping, setListShopping }}
      >
        <Global>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Products />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/shopping" element={<Shopping />} />
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
