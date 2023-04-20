
import React from 'react';
import { Link } from "gatsby"
import {
    loginContainer,
    loginMain,
    fieldForm,
    label,
    updateForm,
    buttonForm,
    crearCuenta
    } from "../../pages/account/account.module.css"


const DefaultAddress = ({defaultAddress, addressesSize}) =>{
    return (
        <div>
            <h3>Detalles de la cuenta</h3>
            {
                defaultAddress != null && (
                    <div>
                        <p>{defaultAddress.firstName} {defaultAddress.lastName}</p>
                        <p>{defaultAddress.address1}</p>
                        <p>{defaultAddress.zip}, {defaultAddress.city}</p>
                        <p>{defaultAddress.country}</p>
                    </div>
                )
            }
            <br />
            <Link to="/account/addresses">
                <button
                    className={updateForm}
                >
                    Ver direcciones ({addressesSize})
                </button>
            </Link>
        </div>
    );
};

export default DefaultAddress;
