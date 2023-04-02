import { useContext, useState } from "react";
import Container from "./styled";
import { useForm } from "react-hook-form";
import { schemaLogin } from "../../validations";
import { yupResolver } from "@hookform/resolvers/yup";
import { BsEyeFill } from "react-icons/bs";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { UserContext } from "../../contexts/userContext";

export interface iFormLogin {
  email: string;
  password: string;
}

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iFormLogin>({
    resolver: yupResolver(schemaLogin),
  });

  const { signInUser } = useContext(UserContext);
  const [password, setPassword] = useState(false);

  return (
    <Container>
      <img className="logo" src={logo} alt="logotipo" />
      <p>Fast Contacts</p>
      <div className="container-login">
        <form onSubmit={handleSubmit(signInUser)}>
          <h3>Login</h3>
          <div className="input">
            <label htmlFor="email">E-mail</label>
            <input
              {...register("email")}
              type="text"
              id="email"
              placeholder="Digite seu email"
            />
          </div>
          <div className="input">
            <label htmlFor="senha">Senha</label>
            <input
              {...register("password")}
              type={password ? "text" : "password"}
              id="senha"
              placeholder="Digite sua senha"
            />
            <BsEyeFill
              className="login-svg"
              onClick={() => setPassword(!password)}
            />
          </div>
          <button type="submit">Entrar</button>
          <div className="bottom">
            <Link to="/signup" className="link">
              Ainda sem conta?
            </Link>
            <Link to="/signup" className="register">
              Cadastre-se
            </Link>
          </div>
        </form>
      </div>
    </Container>
  );
}

export default Login;
