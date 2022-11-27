import styled from "styled-components";
import { Home } from "react-ionicons";
import { PersonCircle } from "react-ionicons";
import { SearchCircle } from "react-ionicons";
export default function Bottom() {
  return (
    <Container>
      <SearchCircle color={"#6987e2"} height="30px" width="30px" />
      <Home color={"#6987e2"} height="30px" width="30px" />
      <PersonCircle color={"#6987e2"} height="30px" width="30px" />
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 70px;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
