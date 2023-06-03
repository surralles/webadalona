import React, { useContext } from "react"
import { StoreContext } from "../../../context/store-context"
import { Mutation } from "react-apollo"
import gql from "graphql-tag"
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

const ColoredLine = ({ color }) => (
  <hr
    style={{
      color: color,
      backgroundColor: color,
      height: 3,
      marginTop: 10,
    }}
  />
)

const CUSTOMER_DELETE_ADDRESS = gql`
  mutation customerAddressDelete($id: ID!, $customerAccessToken: String!) {
    customerAddressDelete(id: $id, customerAccessToken: $customerAccessToken) {
      customerUserErrors {
        code
        field
        message
      }
      deletedCustomerAddressId
    }
  }
`

const DeleteAddress = ({ id }) => {
  const { customerAccessToken } = useContext(StoreContext)

  return (
    <Mutation mutation={CUSTOMER_DELETE_ADDRESS}>
      {customerAddressDelete => {
        return (
          <div>
            <button
              className={updateForm}
              onClick={() => {
                customerAddressDelete({
                  variables: {
                    id: id,
                    customerAccessToken: customerAccessToken.accessToken,
                  },
                }).then(result => {
                  typeof window !== "undefined" && window.location.reload()
                })
              }}
            >
              {" "}
              Borra la dirección
            </button>
            <ColoredLine color="black" />
          </div>
        )
      }}
    </Mutation>
  )
}

export default DeleteAddress
