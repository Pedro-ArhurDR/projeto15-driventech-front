import styled from "styled-components"
import Bottom from "./Bottom"
import LoadProducts from "./LoadProducts"
import { useContext } from "react"
import MyContext from "../contexts/myContext"
import { AddCircleOutline } from 'react-ionicons'
import { useNavigate } from "react-router-dom"
export default function Products() {
    const navigate = useNavigate()
    const { log } = useContext(MyContext)
    console.log(log.email)
    return (
        <Container>
            <Container2>
            <h1>DrivenTech</h1><div>{log.email==="admin@hotmail.com"?<AddCircleOutline onClick={()=>navigate('/addproducts')} color={'#00000'} height="25px"width="25px"/>:null}</div>
            <LoadProducts/>
            </Container2>
            <Bottom />
        </Container>

    )
}

const Container = styled.div`
    background-color: rgb(12, 27, 61);
    width:100%;
    height:90vh;
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
  margin-top:45px;
    }
    h1:hover {--_p: 100%}
`