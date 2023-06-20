import React, { useState, useContext, useEffect } from "react"
import { StoreContext } from "../../../context/store-context"
import { Mutation } from "react-apollo"
import gql from "graphql-tag"
import axios from "axios"

import {
  loginContainer,
  loginMain,
  fieldForm,
  label,
  updateForm,
  buttonForm,
  crearCuenta,
  addForm,
} from "../../../pages/account/account.module.css"

import Select from "@mui/material/Select"
import MenuItem from "@mui/material/MenuItem"
import countries from "i18n-iso-countries"
import enLocale from "i18n-iso-countries/langs/en.json"

const CUSTOMER_CREATE_ADDRESS = gql`
  mutation customerAddressCreate(
    $customerAccessToken: String!
    $address: MailingAddressInput!
  ) {
    customerAddressCreate(
      customerAccessToken: $customerAccessToken
      address: $address
    ) {
      customerAddress {
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

const AddAddressForm = () => {
  const [addAdressForm, setAddAdressForm] = useState(false)
  const [firstNameInput, setFirstNameInput] = useState("")
  const [lastNameInput, setLastNameInput] = useState("")
  const [companyInput, setCompanyInput] = useState("")
  const [addressInput, setAddressInput] = useState("")
  const [apartmentInput, setApartmentInput] = useState("")
  const [cityInput, setCityInput] = useState("")
  const [countryInput, setCountryInput] = useState("")
  const [zipInput, setZipInput] = useState("")
  const [phoneInput, setPhoneInput] = useState("")

  const { customerAccessToken } = useContext(StoreContext)

  const [selectedCountry, setSelectedCountry] = useState("")
  const selectCountryHandler = value => setSelectedCountry(value)
  countries.registerLocale(enLocale)
  const countryObj = countries.getNames("en", { select: "official" })
  const countryArr = Object.entries(countryObj).map(([key, value]) => {
    return {
      label: value,
      value: key,
    }
  })

  return (
    <>
      <button onClick={() => setAddAdressForm(!addAdressForm)}>
        Añade una nueva dirección
      </button>

      {addAdressForm && (
        <Mutation mutation={CUSTOMER_CREATE_ADDRESS}>
          {customerAddressCreate => {
            return (
              <form>
                <h1>Añade una nueva dirección</h1>

                <div className={fieldForm}>
                  <label className="label" htmlFor="firstNameInput">
                    Nombre
                  </label>
                  <input
                    className="input"
                    placeholder="Nombre"
                    value={firstNameInput}
                    type="text"
                    onChange={e => setFirstNameInput(e.target.value)}
                  />
                </div>

                <div className={fieldForm}>
                  <label className="label" htmlFor="lastNameInput">
                    Apellidos
                  </label>
                  <input
                    className="input"
                    placeholder="Apellidos"
                    value={lastNameInput}
                    type="text"
                    onChange={e => setLastNameInput(e.target.value)}
                  />
                </div>

                <div className={fieldForm}>
                  <label className="label" htmlFor="companyInput">
                    Empresa
                  </label>
                  <input
                    className="input"
                    placeholder="Empresa"
                    value={companyInput}
                    type="text"
                    onChange={e => setCompanyInput(e.target.value)}
                  />
                </div>

                <div className={fieldForm}>
                  <label className="label" htmlFor="addressInput">
                    Dirección
                  </label>
                  <input
                    className="input"
                    placeholder="Dirección"
                    value={addressInput}
                    type="text"
                    onChange={e => setAddressInput(e.target.value)}
                  />
                </div>

                <div className={fieldForm}>
                  <label className="label" htmlFor="apartmentInput">
                    Número, escalera, puerta
                  </label>
                  <input
                    className="input"
                    placeholder="Número, escalera, puerta"
                    value={apartmentInput}
                    type="text"
                    onChange={e => setApartmentInput(e.target.value)}
                  />
                </div>

                <div className={fieldForm}>
                  <label className="label" htmlFor="cityInput">
                    Ciudad
                  </label>
                  <input
                    className="input"
                    placeholder="Ciudad"
                    value={cityInput}
                    type="text"
                    onChange={e => setCityInput(e.target.value)}
                  />
                </div>

                <div>
                  <Select
                    style={{ width: "150px" }}
                    value={selectedCountry}
                    onChange={e => selectCountryHandler(e.target.value)}
                  >
                    {!!countryArr?.length &&
                      countryArr.map(({ label, value }) => (
                        <MenuItem key={value} value={value}>
                          {label}
                        </MenuItem>
                      ))}
                  </Select>
                </div>

                <div className={fieldForm}>
                  <label className="label" htmlFor="zipInput">
                    Código postal
                  </label>
                  <input
                    className="input"
                    placeholder="Código postal"
                    value={zipInput}
                    type="text"
                    onChange={e => setZipInput(e.target.value)}
                  />
                </div>

                <div className={fieldForm}>
                  <label className="label" htmlFor="phoneInput">
                    Teléfono
                  </label>
                  <input
                    className="input"
                    placeholder="Teléfono"
                    value={phoneInput}
                    type="text"
                    onChange={e => setPhoneInput(e.target.value)}
                  />
                </div>

                <div>
                  <label className="checkbox" htmlFor="checkboxDefaultAddress">
                    <input type="checkbox" /> Marca como primera dirección
                  </label>
                </div>

                <button
                  className={buttonForm}
                  onClick={() => {
                    customerAddressCreate({
                      variables: {
                        customerAccessToken: customerAccessToken.accessToken,
                        address: {
                          address1: addressInput,
                          city: cityInput,
                          company: companyInput,
                          country: selectedCountry,
                          firstName: firstNameInput,
                          lastName: lastNameInput,
                          phone: phoneInput,
                          zip: zipInput,
                        },
                      },
                    }).then(result => {
                      setAddAdressForm(!addAdressForm)
                    })
                  }}
                >
                  Añade la dirección
                </button>
                <div>
                  <button
                    className={updateForm}
                    onClick={() => setAddAdressForm(!addAdressForm)}
                    onKeyPress={() => setAddAdressForm(!addAdressForm)}
                  >
                    Cancelar
                  </button>
                </div>
              </form>
            )
          }}
        </Mutation>
      )}
    </>
  )
}

export default AddAddressForm
