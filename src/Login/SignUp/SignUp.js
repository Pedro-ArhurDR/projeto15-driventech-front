import styled from "styled-components"
import { Link } from "react-router-dom"
import { useContext } from "react"
import MyContext from "../../contexts/myContext"
import axios from "axios"
import { useNavigate } from "react-router-dom"
export default function SignUp() {
    const navigate = useNavigate()
    const {cad,setCad } = useContext(MyContext)
    //atualiza o state de cad no container e vai pra pagina de fazer login
    function signup(event){
        event.preventDefault()
        if(cad.senha!==cad.senha2){
            alert('As senha não coincidem')
        }
        else{
            const promise = axios.post("https://projeto14-mywallet-back-v3.onrender.com/", cad)
            promise.then((res) => console.log(res.data) &
                console.log('CADASTRADO') & navigate('/login'))
                promise.catch((err) =>alert(err.response.data))
        }
        console.log(cad)
    }   
    return (
        <Container>
            <SignIn>
            <h1>DrivenTech |<i>SignUp</i></h1>
            <form onSubmit={signup}>
            <input placeholder="Nome" onChange={e=>setCad(e2 => ({ ...e2, nome: e.target.value }))} value={cad.nome} type="text" required />
            <input placeholder="CPF" onChange={e=>setCad(e2 => ({ ...e2, cpf: e.target.value }))} value={cad.cpf} type="number" required />
            <input placeholder="email" onChange={e=>setCad(e2 => ({ ...e2, email: e.target.value }))} value={cad.email} type="email" required/>
            <input placeholder="senha" onChange={e=>setCad(e2 => ({ ...e2, senha: e.target.value }))} value={cad.senha} type="password" required/>
            <input placeholder="Repita sua senha" onChange={e=>setCad(e2 => ({ ...e2, senha2: e.target.value }))} value={cad.senha2} type="password" required/>
                <button type="submit">Entrar</button>
            </form>
            <Link to='/login'><p>Ja possui conta? Faça Login</p></Link>
            </SignIn>
        </Container>
    )
}

const Container = styled.div`
    background-color: rgb(12, 27, 61);
    width:100%;
    height:100vh;
    display:flex;
   flex-direction:column;
   justify-content:center;
   align-items:center;
   color:white;
`

const SignIn = styled.div`
    h1{
        display:flex;
        color:#9372EA;
        margin-bottom:5px;
        i{
            color:#C549BC;
            font-size: 25px;
        }
    }
   form{
    display:flex;
    flex-direction:column;
   }
   button{
    background-color:white;
    color:rgb(12, 27, 61);
    font-weight: bold;
    font-size:20px;
    border-radius: 10px;
    width:200px;
    height:40px;
   }
   input{
    width:200px;
    height:40px;
    border-radius: 5px;
    margin-bottom:10px;
   }
   display:flex;
   flex-direction:column;
   justify-content:center;
   align-items:center;
`