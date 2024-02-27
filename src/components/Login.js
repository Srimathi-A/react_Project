import React,{useState} from 'react'
import axios from 'axios';
import {useNavigate,Link} from 'react-router-dom';

function Login (){
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    const history=useNavigate();

    async function submit(e){
        e.preventDefault();
        try{
            await axios.post("http://localhost:8000/",{
                email,password
            })
            .then (res=>{
                if(res.data="exist"){
                 history('/home',{state:{id:email}})
                }
                else if(res.data=="notexist"){
                    alert("User have not signed up")
                }
            })
            .catch((e)=>{
                alert('Wrong details')
                console.log(e)
            })
        }
        catch(e){
            console.log(e)
        }
    }
    
    return(
        <div classname="app">
            <h1>Login</h1>
            <from action='POST'>
                <input type='email'onChange={(e)=>setEmail(e.target.value)}
                placeholder='email'/><br/>
                <input type='password' onChange={(e)=>setPassword(e.target.value)}
                placeholder='password'/><br/>
                <input type='submit'onClick ={submit}/>
            </from>
            <br/>
            <p>OR</p>
            <br/>
            <Link to='/signup'>Signup</Link>
        </div>
    )
}
export default Login;