import React, { useState, useContext } from 'react';

import gql from 'graphql-tag';
import { Mutation } from 'react-apollo'
import {StoreContext} from "../../context/store-context"
import ConnexionLayout from "../../components/account/ConnexionLayout"
import {
loginContainer,
loginMain,
fieldForm,
label,
updateForm,
buttonForm,
crearCuenta
} from "./account.module.css"
import Layout from '../../components/Layout/Layout';
import { LayoutShop } from '../../components/layout';




const CUSTOMER_LOGIN = gql`
mutation customerAccessTokenCreate($input: CustomerAccessTokenCreateInput!) {
  customerAccessTokenCreate(input: $input) {
    customerAccessToken {
      accessToken
      expiresAt
    }
    customerUserErrors {
      code
      field
      message
    }
  }
}
`

const CUSTOMER_PASSWORD_RESET = gql`
mutation customerRecover($email: String!) {
  customerRecover(email: $email) {
    customerUserErrors {
      code
      field
      message
    }
  }
}
`

const LoginForm = () => {
    const { setValue } = useContext(StoreContext);
    const [passwordForgot, setPasswordForgot] = useState(false);
  
    const [email, setEmail] = useState("");
    const [emailReset, setEmailReset] = useState("");
  
    const [messsageInfo, setMessageInfo] = useState("");
  
  
    const [password, setPassword] = useState(null);
    const handleCustomerAccessToken = (value) => {
      setValue(value)
    }

    return(
        <>
          <Layout>
          <LayoutShop>
            {passwordForgot ?
        
         
                <div className={loginContainer}>
                   <div className={loginMain}>
                  <h2>Restablece tu contraseña</h2>
                  <p>Te enviamos un email para recuperar tu contraseña.</p>
                  <Mutation mutation={CUSTOMER_PASSWORD_RESET}>
                    {(customerRecover) => {
                      return (
                        <>
                          <div className={fieldForm}>
                            <label className={label} htmlFor="loginEmail">Email</label>
                            <input className="input" placeholder='Email' type="email" id="loginEmail" onChange={(e) => setEmailReset(e.target.value)} />
                          </div>

                              <button 
                              className={buttonForm}
                                onClick={() => {
                                  customerRecover({
                                    variables: {
                                      "email": emailReset,
                                    }
                                  }).then(() => {
                                    setMessageInfo("Te hemos enviado un correo electrónico con un enlace para actualizar tu contraseña")
                                    setPasswordForgot(false)
                                  })
                                }}
                              >Enviar</button>
                            
                           
                              <div  role="button" tabIndex="0" onClick={() => setPasswordForgot(!passwordForgot)} onKeyDown={() => () => setPasswordForgot(!passwordForgot)}>
                                <p className={updateForm}>Cancelar</p>
                              </div>
                          
                        </>
                      )
                    }}
                  </Mutation>
                </div>
                </div>
           
       
        :
       
           
              <div className={loginContainer}>
                <div className={loginMain}>
                
                  {messsageInfo &&
                    <div >
                      {messsageInfo}
                    </div>
                  }

                 
                  <h2>Acceder a tu cuenta</h2>
                  <Mutation mutation={CUSTOMER_LOGIN}>
                    {(customerLogin) => {
                      return (
                        <>
                          <div className={fieldForm}>
                            <label className="label" htmlFor="loginEmail">Email</label>
                            <input className="input"  placeholder='Email' type="email" id="loginEmail" onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            
                            <div className={fieldForm}>
                            <label className="label" htmlFor="loginPassword">Password</label>
                            <input className="input" placeholder='Contraseña' type="password" id="loginPassword" onChange={(e) => (setPassword(e.target.value))} />
                            </div>
                          
                            <div  role="button" tabIndex="0" onClick={() => setPasswordForgot(!passwordForgot)} onKeyDown={() => setPasswordForgot(!passwordForgot)}>
                              <p className={updateForm}>Recuperar contraseña </p>
                            </div>
                          
                          
                              <button
                                className={buttonForm}
                                onClick={() => {
                                  customerLogin({
                                    variables: {
                                      "input": {
                                        "email": email,
                                        "password": password,
                                      }
                                    }
                                  }).then((result) => {
                                    handleCustomerAccessToken(result.data.customerAccessTokenCreate.customerAccessToken)
                                  }).catch((err) => {
                                    alert(err)
                                  })
                                }}
                              >Entrar</button>
                          
                         
                            <div className={updateForm}>
                              <a href="/../account/register">
                                <p>Crea una cuenta nueva</p>
                              </a>
                            </div>
                           
                        </>
                      )
                    }}
                  </Mutation>
                  </div>
                      </div>
               
            
            
          
       
      }
        </LayoutShop>
      </Layout>
    </>
    
    );
}  ;

const Login = () => {
    return (
      <>
       
        <ConnexionLayout log={false}>
          <LoginForm />
        </ConnexionLayout>
      </>
    );
  };
  
  export default Login;