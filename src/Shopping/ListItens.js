import styled from "styled-components";
export default function ListItens() {
  return (
    <Container>
      <Item>
        <img
          src="https://cdn.dooca.store/107/products/i4nzapixzcdjfv7y3x050ov6ojcffqjnlrls_640x640+fill_ffffff.png?v=1645474553&webp=0"
          alt="imagem item"
        />
        <div>
          <span>Placa de vídeo</span>
          <p>R$ 1000,00</p>
        </div>
      </Item>
    </Container>
  );
}

const Container = styled.ul`
  box-sizing: border-box;
  width: 90%;
  height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #ffffff;
  overflow-y: scroll;
`;

const Item = styled.li`
  width: 100%;
  height: 15vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #050e21;
  padding: 20px;
  margin: 15px 0;
  img {
    width: 30%;
  }

  div {
    width: 60%;
    height: 7vh;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
  }

  p {
    color: orange;
    font-weight: 700;
  }
`;
