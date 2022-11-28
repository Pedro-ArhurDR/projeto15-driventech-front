import styled from "styled-components";
import { Home } from "react-ionicons";
import { PersonCircle } from "react-ionicons";
import { SearchCircle } from "react-ionicons";
import { CartOutline } from 'react-ionicons'
import { useNavigate } from "react-router-dom";
export default function Bottom() {
  const navigate = useNavigate()
  return (
    <Container>
      <CartOutline onClick={()=>navigate('/shopping')} color={"#6987e2"} height="30px" width="30px"/>
      <Home onClick={()=>navigate('/')} color={"#6987e2"} height="30px" width="30px" />
      <PersonCircle onClick={()=>navigate('/login')} color={"#6987e2"} height="30px" width="30px" />

    </Container>
  );
}

const Container = styled.div`
    background-color: rgb(12, 27, 61);
  position: fixed;
  width: 100%;
  height: 10vh;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
