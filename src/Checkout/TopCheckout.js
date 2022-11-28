import styled from "styled-components";
import { Link } from "react-router-dom";
import { ArrowBackOutline } from "react-ionicons";

export default function TopCheckout() {
  return (
    <Container>
      <Link to="/">
        <ArrowBackOutline color={"#ffb600"} height="25px" width="25px" />
      </Link>
      <h2>Checkout</h2>
    </Container>
  );
}

const Container = styled.div`
  width: 95%;
  height: 5vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: fixed;
  top: 0;

  h2 {
    margin-left: 5px;
  }
`;
