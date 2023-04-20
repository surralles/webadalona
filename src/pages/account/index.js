import React from 'react'

import Layout from '../../components/Layout/Layout'
import { LayoutShop } from '../../components/layout'
import { Query } from 'react-apollo'
import gql from "graphql-tag"
import {StoreContext} from "../../context/store-context"
import { useContext } from "react";

import LayoutAccount from '../../components/account/LayoutAccount'
import OrdersList from '../../components/account/ordersList'
import Logout from './logout'
import DefaultAddress from '../../components/account/deafultAdress'
import {
    loginContainer,
    loginMain,
    fieldForm,
    label,
    updateForm,
    buttonForm,
    crearCuenta,
    miCuenta,
    orderMain,
    adressMain,
    accountContainer,
    } from "./account.module.css"

const CUSTOMER_INFO = gql`
query($customerAccessToken: String!) {
    customer(customerAccessToken: $customerAccessToken) {
        email
        firstName
        phone
        defaultAddress {
            firstName
            lastName
            address1
            city
            zip
            country
        }
        orders(first: 10) {
            edges {
                node {
                    name
                    totalPrice
                    processedAt
                    statusUrl
                    currencyCode
                    lineItems(first: 10) {
                        edges {
                            node {
                                title
                                quantity
                            }
                        }
                    }
                    shippingAddress {
                        address1
                        city
                        lastName
                        firstName
                        zip
                        country
                    }
                    subtotalPrice
                    totalPrice
                }
            }
        }
        addresses(first: 10) {
            edges {
                node {
                    address1
                    city
                    lastName
                    firstName
                    country
                    name
                    zip
                }
            }
        }
    }
}
`

const Index = () =>{

    const { customerAccessToken } = useContext(StoreContext);
    return(
        <Layout>
            <LayoutShop>
           < LayoutAccount>
             <Query
                query={CUSTOMER_INFO}
                variables={{
                    customerAccessToken: customerAccessToken.accessToken
                }}
            >
                   {({ loading, error, data }) => {
                    if (loading) return <div>Fetching</div>
                    if (error) return <div>Error</div>
                    const {  defaultAddress, orders, addresses } = data.customer

                    return (
                        <>
                        
                            <section className={miCuenta}>
                            <h1>Mi cuenta</h1>
                            <Logout />
                             <div className={accountContainer}>
                              
                                <div className={adressMain}>
                                     <DefaultAddress 
                                       defaultAddress={defaultAddress} 
                                        addressesSize={addresses.edges.length}
                                     />
                                </div>    
                                <div className={orderMain}>
                                     <OrdersList orders={orders} />
                                </div>                                 
                             
                             </div>
                            </section>

                        </>
                    )


                }}
             </Query>
             </LayoutAccount>
            </LayoutShop>
        </Layout>


    )

}



export default Index
