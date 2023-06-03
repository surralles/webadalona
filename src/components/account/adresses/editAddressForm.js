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

const CUSTOMER_EDIT_ADDRESS = gql`
  mutation customerAddressUpdate(
    $customerAccessToken: String!
    $id: ID!
    $address: MailingAddressInput!
  ) {
    customerAddressUpdate(
      customerAccessToken: $customerAccessToken
      id: $id
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

const CUSTOMER_EDIT_DEFAULT_ADDRESS = gql`
  mutation customerDefaultAddressUpdate(
    $customerAccessToken: String!
    $addressId: ID!
  ) {
    customerDefaultAddressUpdate(
      customerAccessToken: $customerAccessToken
      addressId: $addressId
    ) {
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

const EditAddressForm = ({ address }) => {
  const [editAdressForm, setEditAdressForm] = useState(false)
  const [firstNameInput, setFirstNameInput] = useState(address.firstName)
  const [lastNameInput, setLastNameInput] = useState(address.lastName)
  const [companyInput, setCompanyInput] = useState(address.company)
  const [addressInput, setAddressInput] = useState(address.address1)
  const [apartmentInput, setApartmentInput] = useState(address.address2)
  const [cityInput, setCityInput] = useState(address.city)
  const [countryInput, setCountryInput] = useState(address.country)
  const [zipInput, setZipInput] = useState(address.zip)
  const [phoneInput, setPhoneInput] = useState(address.phone)
  const [countriesAll, setCountriesAll] = useState([])
  const [checkDefaultAddress, setCheckDefaultAddress] = useState(false)

  const { customerAccessToken } = useContext(StoreContext)

  const getLocations = () => {
    return axios("https://restcountries.eu/rest/v2/all")
  }

  useEffect(() => {
    getLocations().then(({ data }) => {
      setCountriesAll(data)
    })
  }, [])
  console.log(checkDefaultAddress)
  return (
    <>
      <button
        className={buttonForm}
        onClick={() => setEditAdressForm(!editAdressForm)}
      >
        Edita
      </button>
      {editAdressForm && (
        <div className="columns is-centered">
          <div className="column is-6 has-text-left">
            <Mutation mutation={CUSTOMER_EDIT_ADDRESS}>
              {customerAddressUpdate => {
                return (
                  <Mutation mutation={CUSTOMER_EDIT_DEFAULT_ADDRESS}>
                    {customerDefaultAddressUpdate => {
                      return (
                        <form>
                          <h1>Edita la dirección</h1>

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

                          <div className={fieldForm}>
                            <label className="label" htmlFor="countryInput">
                              País
                            </label>

                            <select
                              placeholder="País"
                              value={countryInput}
                              onChange={e => setCountryInput(e.target.value)}
                              onBlur={e => setCountryInput(e.target.value)}
                              style={{ minWidth: "140px", maxWidth: "310px" }}
                            >
                              {countriesAll.map((country, index) => {
                                return
                                ;<option key={index} value={country.name}>
                                  {country.name}
                                </option>
                              })}
                            </select>
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
                            <label
                              className="checkbox"
                              htmlFor="checkboxDefaultAddress"
                            >
                              <input type="checkbox" /> Marca como primera
                              dirección
                            </label>
                          </div>
                          <button
                            className={buttonForm}
                            onClick={() => {
                              customerAddressUpdate({
                                variables: {
                                  customerAccessToken:
                                    customerAccessToken.accessToken,
                                  id: address.id,
                                  address: {
                                    address1: addressInput,
                                    city: cityInput,
                                    company: companyInput,
                                    country: countryInput,
                                    firstName: firstNameInput,
                                    lastName: lastNameInput,
                                    phone: phoneInput,
                                    zip: zipInput,
                                  },
                                },
                              })
                              checkDefaultAddress &&
                                customerDefaultAddressUpdate({
                                  variables: {
                                    customerAccessToken:
                                      customerAccessToken.accessToken,
                                    addressId: address.id,
                                  },
                                }).then(result => alert(result))
                            }}
                          >
                            Actualiza la dirección
                          </button>
                          <div>
                            <button
                              className={updateForm}
                              onClick={() => setEditAdressForm(!editAdressForm)}
                            >
                              Cancelar
                            </button>
                          </div>
                        </form>
                      )
                    }}
                  </Mutation>
                )
              }}
            </Mutation>
          </div>
        </div>
      )}
    </>
  )
}

export default EditAddressForm
