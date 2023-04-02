import styled from "styled-components";

const colors = {
  primary: "#7fd4ff",
  secondary: "#a5a5a5",
  background: "#f2f2f2",
  textDark: "#666666",
  textLight: "#f5f5f5",
};

const ContainerDash = styled.div`
  width: 90%;
  margin: 0 auto;

  header {
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin: 10px;
  }

  .add {
    align-items: center;
    background-color: ${colors.primary};
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    height: 50px;
    justify-content: center;
    width: 50px;

    p {
      color: ${colors.textLight};
      cursor: pointer;
      font-size: 30px;
    }
  }

  .contact-li {
    color: ${colors.textDark};
    display: flex;
    font: 16px "Roboto", sans-serif;
    height: 60px;
    justify-content: space-between;
    padding: 0 20px;
    width: 100%;
    background-color: ${colors.textLight};
    border-radius: 10px;
    margin-bottom: 10px;
    transition: transform 0.2s ease-in-out;

    &:hover {
      transform: scale(1.02);
      cursor: pointer;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }

  .contact-ul {
    background-color: ${colors.background};
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    margin: 0 1rem;
    padding: 1rem;
  }

  .dash-logo {
    height: 80px;
    width: 150px;
  }

  .div-center {
    align-items: center;
    background-color: ${colors.secondary};
    border-radius: 10px;
    color: ${colors.textLight};
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0.9rem;
    padding: 1rem;

    h2 {
      font: bold 24px "Roboto", sans-serif;
      margin: 10px 0;
    }

    p {
      font: 16px "Roboto", sans-serif;
      margin: 10px 0;
    }
  }

  .div-input {
    align-items: center;
    background-color: ${colors.background};
    border-radius: 10px;
    color: ${colors.textDark};
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin: 0.9rem;
    padding: 1rem;
  }
    label {
      font-weight: bold;
    }

    input[type="text"] {
      border: none;
      border-radius: 10px;
      padding: 0.5rem;
      width: 100%;
      font-size: 18px;
    }

    button {
      background-color: ${colors.primary};
      border: none;
      border-radius: 10px;
      color: ${colors.textLight};
      cursor: pointer;
      font-weight: bold;
      padding: 0.8rem;
      width: 100%;
      font-size: 18px;
      transition: background-color 0.2s ease-in-out;

      &:hover {
        background-color: ${colors.secondary};
      }
    }
  `;

export default ContainerDash;
