import React, { useContext } from 'react';
import { Link } from "gatsby"
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import { StoreContext } from '../../context/store-context';
import LayoutAccount from '../../components/account/LayoutAccount';
import AddAddressForm from "../../components/account/adresses/addAddressForm"
import DeleteAddress from "../../components/account/adresses/deleteAddress"
import EditAddressForm from "../../components/account/adresses/editAddressForm"
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
    import { LayoutShop } from '../../components/layout'
    import Layout from '../../components/Layout/Layout'


const CUSTOMER_ADDRESS = gql`
query($customerAccessToken: String!) {
    customer(customerAccessToken: $customerAccessToken) {
        defaultAddress {
            id
        }
        addresses(first: 10) {
            edges {
                node {
                    id
                    address1
                    address2
                    city
                    phone
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

const Addresses = () => {
    const { customerAccessToken } = useContext(StoreContext);

    return (
        <Layout>
         <LayoutShop>
          <LayoutAccount>
            <Query
                query={CUSTOMER_ADDRESS}
                variables={{
                    customerAccessToken: customerAccessToken.accessToken
                }}
            >
                {({ loading, error, data }) => {
                    if (loading) return <div>Fetching</div>
                    if (error) return <div>Error</div>
                    const { defaultAddress, addresses } = data.customer
                    return (
                        <div className={loginContainer}>
                            <div className={loginMain}>
                            <h2>Tus direcciones</h2>
                            <Link to={"/account"}><p className={buttonForm}>Volver a los detalles de cuenta</p></Link>
                            <br />
                            <AddAddressForm />
                                <div>
                                    {
                                    addresses != null && (
                                        addresses.edges.map((address => (
                                            <div key={address.node.id} className="columns is-centered">
                                                <div className="column">
                                                    <br/>
                                                    {
                                                        defaultAddress.id === address.node.id && 
                                                            <h1 className="subtitle">Tu primera dirección</h1>                                                
                                                    }
                                                    <p className="has-text-grey">{address.node.firstName} {address.node.lastName}</p>
                                                    <p className="has-text-grey">{address.node.address1}</p>
                                                    <p className="has-text-grey">{address.node.zip}, {address.node.city}</p>
                                                    <p className="has-text-grey">{address.node.country}</p>
                                                    <EditAddressForm address={address.node} />
                                                    <DeleteAddress id={address.node.id}/>
                                                </div>
                                            </div>
                                        )))
                                    )
                                }
                            </div>
                            <br/>
                        </div>
                     </div>
                     
                    )
                }}
            </Query>
          </ LayoutAccount>
        </LayoutShop>
        </Layout>
    );
};

export default Addresses;