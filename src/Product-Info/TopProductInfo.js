import styled from "styled-components";
import { Link } from "react-router-dom";
import { ArrowBackOutline } from "react-ionicons";

export default function TopProductInfo() {
  return (
    <Container>
      <Link to="/">
        <ArrowBackOutline color={"#ffb600"} height="25px" width="25px" />
      </Link>
    </Container>
  );
}

const Container = styled.div`
  width: 95%;
  height: 5vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  top: 0;

  h2 {
    margin-left: 5px;
  }
`;
