import Header from "./Header";
import React from 'react'
import { useState } from 'react';
import { loginFields } from "../../constants/forms";
import FormAction from "./Action";
import FormWrapper from "./Wrapper";
import Input from "./Input";


const LoginForm = () => {

    const fields=loginFields;
    let fieldsState = {};
    fields.forEach(field=>fieldsState[field.id]='');
    const [loginState,setLoginState]=useState(fieldsState);

    const handleChange=(e)=>{
        setLoginState({...loginState,[e.target.id]:e.target.value})
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        authenticateUser();
    }

    return(
        <form className="mt-8 space-y-6">
        <div className="-space-y-px">
            {
                fields.map(field=>
                        <Input
                            key={field.id}
                            handleChange={handleChange}
                            value={loginState[field.id]}
                            labelText={field.labelText}
                            labelFor={field.labelFor}
                            id={field.id}
                            name={field.name}
                            type={field.type}
                            isRequired={field.isRequired}
                            placeholder={field.placeholder}
                    />
                
                )
            }
        </div>

        <FormWrapper/>
        <FormAction handleSubmit={handleSubmit} text="Login"/>

      </form>
    )
}


const Login = () => {

    return(
        <>
            <Header
                heading="Login to your account"
                paragraph="Don't have an account yet? "
                linkName="Signup"
                linkUrl="/signup"
                />
            <LoginForm/>
        </>
    )
}

export default Login;