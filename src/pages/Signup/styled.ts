import styled from "styled-components";

const General = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;

  .top {
    display: flex;
    flex-direction: column;
    gap: 10px;
    text-align: center;
    font-family: 'Kaushan Script', cursive;
    font-size: 2rem;
    text-shadow: 2px 2px var(--color-two);
  }

  .top h3 {
    font-family: 'Kaushan Script', cursive;
    color: var(--color-two);
    font-size: 3rem;
    text-shadow: 2px 2px var(--color-two);
  }

  .top span {
    font: var(--font-text-1);
    color: var(--color-two);
  }

  form {
    width: 90%;
    max-width: 400px;
    display: flex;
    flex-direction: column;
    background-color: var(--color-one);
    padding: 2rem 1rem;
    gap: 1.2rem;
    border: 1px solid var(--color-two);
    margin-bottom: 30px;
    border-radius: 5px;
    font-family: 'Montserrat', sans-serif;
    box-shadow: 0px 0px 20px var(--color-two);
  }

  form div {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    position: relative;
  }

  div p {
    color: var(--negative);
    font: var(--font-text-1);
  }

  form div input {
    width: 100%;
    height: 40px;
    font-size: 16px;
    border-radius: 5px;
    background-color: var(--color-one);
    border: 2px solid var(--color-two);
    padding: 0px 1rem;
    box-sizing: border-box;
    color: var(--color-two);
    font: var(--font-text-3);
  }

  input:focus {
    outline: none;
    box-shadow: 0px 0px 4px var(--color-two);
  }

  input::placeholder {
    color: var(--grey-1);
  }

  label {
    color: var(--color-two);
    font: var(--font-text-1);
  }

  div svg {
    position: absolute;
    right: 0.8rem;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    color: var(--color-two);
  }

  form button {
    background-color: var(--color-two);
    color: var(--color-one);
    font: var(--font-text-1);
    border: none;
    width: 100%;
    height: 40px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;
    font-family: 'Kaushan Script', cursive;
    text-shadow: 2px 2px var(--color-one);
    border: 2px solid var(--color-one);
  }

  form button:hover {
    background-color: var(--color-two-dark);
    text-shadow: none;
  }

  .dev {
    font-size: 16px;
    color: var(--color-two);
    text-align: center;
    font-family: 'Kaushan Script', cursive;
    text-shadow: 2px 2px var(--color)
 }
 `;


export default General;
