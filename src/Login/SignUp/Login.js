import styled from "styled-components"
import { Link } from "react-router-dom"
import { useContext } from "react"
import MyContext from "../../contexts/myContext"
import axios from "axios"
import { ArrowBackOutline } from "react-ionicons";
import { useNavigate } from "react-router-dom"
import { LogOutOutline } from 'react-ionicons'
export default function Login() {
    const navigate = useNavigate()
    const { log, setLog,session,setSession } = useContext(MyContext)
    //atualiza o state de log no container e vai pra pagina principal
    function login(event){
        event.preventDefault()
        const promise = axios.post("http://localhost:5000/login", log)
        promise.then((res) => res.data.token & console.log(res.data) &
            console.log('LOGADO') & setLog(e2 => ({ ...e2, Bearer: res.data.token })) & navigate('/')& setSession(true))
        promise.catch((err) => alert('Senha e/ou email incorreto(s)'))
    }

    function logOut(){
        const config = {
            headers: {
                Authorization: `Bearer ${log.Bearer}`
            }
        }
        const promise = axios.delete(`http://localhost:5000/login`, config)
        promise.then(res => console.log(res)& setSession(false)
        )
        promise.catch(erro => {
            console.log(erro.message)
        })
    }
    return (
        <Container>
            <Top><Link to="/">
        <ArrowBackOutline color={"#ffb600"} height="25px" width="25px" />
      </Link>
      <div><LogOutOutline onClick={logOut} color={"#ffb600"} height="25px" width="25px"/>
      <p>LogOut</p></div>
      </Top>
            <SignIn>
            <h1>DrivenTech |<i>Login</i></h1>
            <form onSubmit={login}>
                <input placeholder="email" disabled={session} onChange={e => setLog(e2 => ({ ...e2, email: e.target.value }))} value={log.email} type="email" required />
                <input placeholder="senha" disabled={session}  onChange={e => setLog(e2 => ({ ...e2, senha: e.target.value }))} value={log.senha} type="password" required />
                <button disabled={session} type="submit">Entrar</button>
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

const Top = styled.div`
display:flex;
justify-content:space-between;
width:80%;
position:fixed;
top:10%;
left:10%;
div{
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
}
`