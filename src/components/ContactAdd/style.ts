import styled from "styled-components";

const ModalMoreContact = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  .add-inputs {
    width: 80%;
  }
  .modal-container {
    width: 90%;
    max-width: 500px;
    background-color: var(--color-five);
    padding: 1rem;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    border: 1px solid var(--grey-2);
  }

  .add-header-modal {
    display: flex;
    justify-content: space-between;
    background-color: var(--color-five);
    padding: 1rem;
    border-radius: 5px;
    margin-bottom: 1rem;
  }
  .add-ContainerModal {
    background-color: var(--grey-1);
  }
  .add-header-modal h3 {
    font: var(--font-title-3);
    margin: 0;
  }

  .closeModal {
    background-color: var(--color-one);
    color: var(--grey-0);
    font: var(--font-title-2);
    border: none;
    border-radius: 50%;
    padding: 0.5rem;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background-color 0.2s ease-in-out;
  }

  .closeModal:hover {
    background-color: var(--color-two);
  }

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    box-sizing: border-box;
  }

  form div {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }

  form div label {
    font: var(--font-text-1);
  }
`;

export default ModalMoreContact;
