import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import MyContext from "../contexts/myContext";
import axios from "axios";
export default function FormInfoUser() {
  const [cep, setCep] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState("");
  const { listShopping } = useContext(MyContext);
  const navigate = useNavigate();
  function sendRequest(e) {
    e.preventDefault();
    console.log(cep, state, city, address, contact);
    const dados = [
      {
        cep: cep,
        state: state,
        city: city,
        adress: address,
        contact: contact,
      },
      listShopping,
    ];

    const promise = axios.post("http://localhost:5000/checkout", dados);
    promise.then((e) => console.log({ dados }) & navigate("/"));
    promise.catch((err) => console.log(err));
  }

  return (
    <Container onSubmit={sendRequest}>
      <h2>Informações de Entrega</h2>
      <input
        placeholder="CEP"
        pattern="[0-9]{5}-[0-9]{3}"
        value={cep}
        onChange={(e) => setCep(e.target.value)}
        required
      />
      <input
        placeholder="Estado"
        value={state}
        onChange={(e) => setState(e.target.value)}
        required
      />
      <input
        placeholder="Cidade"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        required
      />
      <input
        placeholder="Endereço"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        required
      />
      <input
        type="tel"
        placeholder="Ex: (99)9-9999-9999"
        pattern="[0-9]{2}[0-9]{5}[0-9]{4}"
        value={contact}
        onChange={(e) => setContact(e.target.value)}
        required
      />
      <button type="submit">Realizar Pedido</button>
    </Container>
  );
}

const Container = styled.form`
  width: 90%;
  height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
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
`;
