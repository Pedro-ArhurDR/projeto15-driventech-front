import myContext from "../contexts/myContext"
import Login from "../Login/SignUp/Login"
import SignUp from "../Login/SignUp/SignUp"
import Products from "../Products/Products"
import { Route,Routes,BrowserRouter } from "react-router-dom"
import styled from "styled-components"
import { useState } from "react"
export default function Container() {
    //State para mandar no post de login 
    const [log,setLog]= useState({
        email:"",
        senha:"",
        Bearer:""
    })
    //State para mandar no post de signup (senha2 é pra ser igual senha)
    const [cad,setCad]=useState({
        nome:"",
        cpf:"",
        email:"",
        senha:"",
        senha2:""
    })
    return <>
                <myContext.Provider value={{log,setLog,cad,setCad}} >
                <Global>
                <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Products />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/signup' element={<SignUp />} />
                </Routes>
            </BrowserRouter>
                </Global>
                </myContext.Provider>
    </>
}

const Global = styled.div`
    width:100%;
    height:100%;
`