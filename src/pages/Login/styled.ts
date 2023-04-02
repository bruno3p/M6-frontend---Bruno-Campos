import styled from "styled-components";

const Container = styled.div`
  background: linear-gradient(45deg, var(--color-three) 0%, var(--color-four) 100%);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;

  p {
    width: 290px;
    text-align: center;
    font: var(--font-text-0);
    color: var(--color-five);
  }
  
  button{
    height: 40px;
    font: var(--font-text-0);
    background-color: var(--color-five);
    color: var(--color-two);
    border: none;
    border-radius: var(--radius-1);
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover {
      background-color: var(--color-two);
      color: var(--color-five);
    }
  }

  h3 {
    color: var(--color-five);
    font: var(--font-title-1);
    margin: 0 auto;
    margin-bottom: 20px;
  }

  .container-login {
    display: flex;
    flex-direction: column;
    width: 90%;
    margin: 0 auto;
    border: 2px solid var(--color-five);
    border-radius: var(--radius-2);
    padding: 20px 10px;
    max-width: 400px;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
    background-color: var(--color-one);
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .input {
    display: flex;
    flex-direction: column;
    position: relative;
  }

  label {
    margin-bottom: 10px;
    font: var(--font-text-0);
    color: var(--color-five);
  }

  input {
    width: 100%;
    height: 40px;
    font-size: 16px;
    border-radius: 5px;
    background: var(--color-two);
    border: none;
    padding: 0px 2.5rem 0px 0.8rem;
    box-sizing: border-box;
    color: var(--grey-0);
    font: var(--font-text-3);
  }

  input:focus {
    outline: none;
  }

  input::placeholder {
    color: var(--grey-4);
  }

  .login-svg {
    position: absolute;
    right: 0.8rem;
    top: 45px;
    cursor: pointer;
    color: var(--color-five);
    cursor: pointer;
  }
`;


export default Container;
