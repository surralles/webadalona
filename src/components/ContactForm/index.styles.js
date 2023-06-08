import styled from "styled-components"

export const ContactFormStyled = styled.section`
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ContactFormWrapper = styled.div`
  border-radius: 0.5rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  padding: 2rem 0;
  text-align: center;
  margin: 2rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 700px;
  width: 100%;
  flex-direction: column;
`

export const ContactFormTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 1rem;
  color: #333;
  text-transform: capitalize;
  letter-spacing: 2px;
  text-align: center;
  width: 100%;
  padding: 0 1rem;

  @media screen and (min-width: 768px) {
    font-size: 2rem;
  }
`

export const ContactFormForm = styled.form`
  width: 90vw;
  max-width: 35rem;
  background: var(--clr-white);
  border-radius: var(--radius);
  box-shadow: var(--dark-shadow);
  text-align: center;
  padding: 2rem;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    width: 100%;
  }
`

export const ContactFormFormGroup = styled.div`
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  text-align: left;

  .duo {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    margin: 0.5rem 0;
  }

  label {
    font-weight: 700;
    margin: 0.5rem 0;
  }

  input,
  textarea {
    padding: 0.5rem 1rem;
    border: 1px solid #fc5c7d;
    border-radius: 3px;
    outline: none;
    width: 100%;
  }

  textarea {
    height: 150px;
  }
`

export const ContactFormFormButton = styled.button`
  width: 100%;
  padding: 1rem;
  border-radius: 3px;
  text-transform: capitalize;
  background: linear-gradient(to right, #fc5c7d, #8f329a);
  color: #fff;
  font-size: 1rem;
  letter-spacing: 1px;
  margin-top: 1rem;
  transition: all 300ms ease-in-out !important;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &:hover {
    transition: all 300ms ease-in-out !important;
    box-shadow: 0 5px 15px rgba(252, 92, 125, 0.4) !important;
    background: linear-gradient(to right, #8f329a, #fc5c7d);
    transform: translateY(-1px);
  }
`

export const ContactFormFormAlert = styled.div`
  text-align: center;
  padding: 0.25rem 0;
  margin-bottom: 1rem;
`
