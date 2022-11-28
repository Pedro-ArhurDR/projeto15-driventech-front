import { useContext } from "react";
import styled from "styled-components"
import MyContext from "../contexts/myContext";
import { Link, useNavigate } from "react-router-dom";
import { ArrowBackOutline } from "react-ionicons";
import axios from "axios";
export default function AddProducts() {
    const navigate = useNavigate()
    const{addProd,setAddProd,log} = useContext(MyContext)
    function addproduct(event){
        event.preventDefault()
        const config = {
            headers: {
                Authorization: `Bearer ${log.Bearer}`
            }
        }
        const promise = axios.post(`http://localhost:5000/products`,addProd,config)
        promise.then(res =>alert('produto adicionado a tela principal') &navigate('/')
        )
        promise.catch(erro => {
            console.log(erro)
        })
        console.log(addProd)
    }
    return(
        <Container>
            <Link to="/">
        <ArrowBackOutline color={"#ffb600"} height="25px" width="25px" />
      </Link>
            <h1>ADICIONAR PRODUTOS</h1>
            <form onSubmit={addproduct}>
                <input placeholder="nome" onChange={e => setAddProd(e2 => ({ ...e2, nome: e.target.value }))} value={addProd.nome} type="text" required />
                <input placeholder="valor"  onChange={e => setAddProd(e2 => ({ ...e2, valor: e.target.value }))} value={addProd.valor} type="number" required />
                <input placeholder="descricao do produto"  onChange={e => setAddProd(e2 => ({ ...e2, descricao: e.target.value }))} value={addProd.descricao} type="text" required />
                <input placeholder="URL da imagem"  onChange={e => setAddProd(e2 => ({ ...e2, url_imagem: e.target.value }))} value={addProd.url_imagem} type="url" required />
                <button type="submit">Entrar</button>
            </form>
        </Container>
    )
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
  input {
    width: 100%;
    height: 50px;
    border: none;
    border-radius: 6px;
    margin: 10px 0;
  }

  button {
    width: 70%;
    height: 50px;
    border: none;
    border-radius: 25px;
    background-color: #ffb600;
    color: #ffffff;
    font-weight: 700;
    font-size: 1.5em;
  }
  form{
    display:flex;
    flex-direction: column;
    align-items:center;
    justify-content:center;
  }
`;