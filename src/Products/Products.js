import styled from "styled-components"
import Bottom from "./Bottom"

export default function Products() {
    return (
        <Container>
            <input placeholder="O que você está procurando?" type=" text" />
            <Container2>
            <h1>DrivenTech</h1>
            </Container2>
            <Bottom />
        </Container>

    )
}

const Container = styled.div`
    background-color: rgb(12, 27, 61);
    width:100%;
    height:100vh;
    display:flex;
   flex-direction:column;

   align-items:center;
   color:white;
   input{
    margin-top:25px;
    background-color:#1D273D;
    color:#5D6D8B;
    text-decoration:none;
    height:40px;
    width:70%;
    box-shadow: 0 0 0 0;
    outline: 0;
    border-radius: 7px;
   }
   input:focus{
    box-shadow: 0 0 0 0;
    outline: 0;
   }
`
const Container2 = styled.div`
    h1{
        --s: 0.1em;   /* the thickness of the line */
  --c: #2c4bff; /* the color */
  
  color: #0000;
  padding-bottom: var(--s);
  background: 
    linear-gradient(90deg,var(--c) 50%,#000 0) calc(100% - var(--_p,0%))/200% 100%,
    linear-gradient(var(--c) 0 0) 0% 100%/var(--_p,0%) var(--s) no-repeat;
  -webkit-background-clip: text,padding-box;
          background-clip: text,padding-box;
  transition: 0.5s;
  font-size: 40px;
  margin-top:20px;
    }
    h1:hover {--_p: 100%}
`