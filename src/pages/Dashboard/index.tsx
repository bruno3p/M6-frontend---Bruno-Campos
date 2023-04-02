import { useContext } from "react";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import ContainerDash from "./styled";
import { ContactContext } from "../../contexts/contactContext";
import { UserContext } from "../../contexts/userContext";
import AddContact from "../../components/ContactAdd";
import ListNameContacts from "../../components/ContactListNames";
import EditUser from "../../components/UserEdit";

function Dashboard() {
  const navigate = useNavigate();

  const { setInput, setAddOpenCloseModal, addOpenCloseModal } =
    useContext(ContactContext);
  const { userData, UserModal, setUserModal } = useContext(UserContext);

  return (
    <ContainerDash>
      <header>
        <img className="dash-logo" src={logo} alt="logotipo" />
        <button
          className="div-logout"
          onClick={() => {
            localStorage.removeItem("@UserNow:token");
            navigate("/");
          }}
        >
          Sair
        </button>
      </header>
      <div className="div-center">
        <h2>Olá, {userData.name}</h2>
        <p>Seu numero é: {userData.telefone}</p>
        <div
          className="div-update"
          onClick={() => {
            setUserModal(!UserModal);
          }}
        >
          <p>Editar</p>
        </div>
      </div>

      <section>
        <h3>Contatos</h3>
        <div
          className="add"
          onClick={() => {
            setAddOpenCloseModal(!addOpenCloseModal);
          }}
        >
          <p
            onClick={() => {
              setAddOpenCloseModal(!addOpenCloseModal);
            }}
          >
            +
          </p>
        </div>
      </section>
      <div className="div-input">
        <p>Digite o nome do contato para encontrar mais rapido!</p>
        <input
          type="text"
          placeholder="Digite o nome aqui..."
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      <main>
        <ul className="contact-ul">
          <ListNameContacts />
        </ul>
      </main>
      {addOpenCloseModal && <AddContact />}
      {UserModal && <EditUser />}
    </ContainerDash>
  );
}

export default Dashboard;
