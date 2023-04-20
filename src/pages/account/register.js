import React, { useState } from 'react';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo'
import ConnexionLayout from "../../components/account/ConnexionLayout"
import { navigate } from 'gatsby'
import {
  loginContainer,
  loginMain,
  fieldForm,
  label,
  updateForm,
  buttonForm,
  } from "./account.module.css"
  import Layout from '../../components/Layout/Layout';
  import { LayoutShop } from '../../components/layout';

const CUSTOMER_REGISTER = gql`
mutation customerCreate($input: CustomerCreateInput!) {
  customerCreate(input: $input) {
    customer {
      id
    }
    customerUserErrors {
      code
      field
      message
    }
  }
}
`

const RegisterForm = () => {

    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);


    return(
      <>
      <Layout>
       <LayoutShop>
        <Mutation mutation={CUSTOMER_REGISTER}>
        {(customerLogin) => {
          return (
                    
                      <div className={loginContainer}>
                        <div className={loginMain}>

                        <h2>Create una cuenta</h2>
                        
                        <div className={fieldForm}>
                         <label className={label}  htmlFor="loginEmail">Email</label>
                         <input className="input"  placeholder='Email' type="email" id="loginEmail" onChange={(e) => setEmail(e.target.value)} />
                        </div>

                        <div className={fieldForm}>
                          <label className="label" htmlFor="loginPassword">Password</label>
                          <input className="input" placeholder='Contraseña' type="password" id="loginPassword" onChange={(e) => (setPassword(e.target.value))} />
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
                                navigate(`/account/login`)
                              })
                            }}
                          >Crear</button>
                          </div>
                          </div>
                           

                    
               )
            }}
          </Mutation>
           </LayoutShop>   
              </Layout>  
           </>

           );
         };

         const Register = () => {
            return (
              <>
              
                <ConnexionLayout log={false}>
                  <RegisterForm />
                </ConnexionLayout>
              </>
            );
          };
          
          export default Register;