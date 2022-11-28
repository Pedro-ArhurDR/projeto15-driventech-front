import styled from "styled-components";
import FormInfoUser from "./FormInfoUser";
import TopCheckout from "./TopCheckout";
export default function Checkout() {
  return (
    <Container>
      <TopCheckout />
      <FormInfoUser />
    </Container>
  );
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
`;
