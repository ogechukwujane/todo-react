import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../components/Button";
import './Login.css';

const input ={
    width: '95%',
    padding: '.6em',
    border: 'none',
    borderBottom: '.1em solid gray',
    borderRadius: '.3em',
    
}
const label ={
    marginTop: '1em',
    padding: '0em 0em .3em 0em',
    // fontWeight:'bold'
}
const submit ={
    width: '100%',
    padding: '.5em',
    fontSize: '1em',
    backgroundColor: 'green',
    border: 'none',
    borderRadius: '.3em',
    color: 'white'

}

const Login = () => {
    const params = useParams();
    const navigate = useNavigate();

    const todoPage = (e) =>{
        e.preventDefault()
        navigate("/todo")
    }
    return (
        <div>
            <h1 style={{textAlign:'center',color:'black',padding:'.1em'}}>Login Form</h1>
            <form >
                <div className="login-container" >
                    
                    <div style={label}>
                        <label >Username</label>
                    </div>
                    <div>
                        <input type='text' style={input}
                        placeholder="Enter Username"/>
                    </div>
                    <div style={label}>
                        <label>Password</label>
                    </div>
                    <div>
                        <input type='password' style={input}
                        placeholder="Enter Password"/>
                    </div>
                    <div style={{width:'20%',margin:'2em auto'}}>
                      <Button className='add-task-btn' onClick={todoPage}> 
                            Login   
                      </Button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Login;