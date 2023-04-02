import { useContext, useState } from "react";
import { IoIosArrowDropdown } from "react-icons/io";
import { ContactContext } from "../../contexts/contactContext";
import EditComponentContact from "../ContactEdit";
import ListStyled from "./styled";

function ListNameContacts() {
  const { input, contact, setDataLi, openCloseModalEdit, setModalEdit } =
    useContext(ContactContext);

  const search = contact.filter((elem) =>
    elem.name.toLowerCase().includes(input.toLocaleLowerCase())
  );

  return (
    <ListStyled>
      {input != ""
        ? search.map((elem, index) => (
            <li
              onClick={() => {
                setModalEdit(!openCloseModalEdit);
                setDataLi({
                  id: elem.id,
                  name: elem.name,
                  email: elem.email,
                  telefone: elem.telefone,
                });
              }}
              id={elem.id}
              key={index}
              className="contact-li"
            >
              <p>{elem.name}</p>
              <IoIosArrowDropdown
                onClick={() => {
                  setModalEdit(!openCloseModalEdit);
                  setDataLi({
                    id: elem.id,
                    name: elem.name,
                    email: elem.email,
                    telefone: elem.telefone,
                  });
                }}
              />
            </li>
          ))
        : contact.map((elem, index) => (
            <li
              onClick={() => {
                setModalEdit(!openCloseModalEdit);
                setDataLi({
                  id: elem.id,
                  name: elem.name,
                  email: elem.email,
                  telefone: elem.telefone,
                });
              }}
              id={elem.id}
              key={index}
              className="contact-li"
            >
              <p>{elem.name}</p>
              <IoIosArrowDropdown
                onClick={() => {
                  setModalEdit(!openCloseModalEdit);
                  setDataLi({
                    id: elem.id,
                    name: elem.name,
                    email: elem.email,
                    telefone: elem.telefone,
                  });
                }}
              />
            </li>
          ))}
      {openCloseModalEdit && <EditComponentContact />}
    </ListStyled>
  );
}

export default ListNameContacts;
