import { useNavigate } from "react-router-dom";
import styled from "styled-components";
export default function BottomShopping() {
 const navigate = useNavigate()
  return (
    <Container>
      <button onClick={()=>navigate('/checkout')}>Comprar</button>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;

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
