import styled from "styled-components"
import { Link } from "react-router-dom"
import { useContext } from "react"
import MyContext from "../../contexts/myContext"
import axios from "axios"
import { useNavigate } from "react-router-dom"
export default function Login() {
    const navigate = useNavigate()
    const { log, setLog } = useContext(MyContext)
    //atualiza o state de log no container e vai pra pagina principal
    function login(event){
        event.preventDefault()
        const promise = axios.post("https://projeto14-mywallet-back-v3.onrender.com/", log)
        promise.then((res) => res.data.token & console.log(res.data) &
            console.log('LOGADO') & setLog(e2 => ({ ...e2, Bearer: res.data.token })) & navigate('/menu'))
        promise.catch((err) => alert('Senha e/ou email incorreto(s)'))
    }   
    return (
        <Container>
            <SignIn>
            <h1>DrivenTech |<i>Login</i></h1>
            <form onSubmit={login}>
                <input placeholder="email"  onChange={e => setLog(e2 => ({ ...e2, email: e.target.value }))} value={log.email} type="email" required />
                <input placeholder="senha"  onChange={e => setLog(e2 => ({ ...e2, senha: e.target.value }))} value={log.senha} type="password" required />
                <button type="submit">Entrar</button>
            </form>
            <Link to='/signup'><p>Primeira vez? Cadastre-se!</p></Link>
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