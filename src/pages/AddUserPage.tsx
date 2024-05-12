import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { IonCard, IonGrid, IonRow, IonCol } from "@ionic/react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Header from "../components/Header";
import Alert from "../components/Alert";
import Usuario from "../entities/Usuario";
import useHasVoted from "../store/useIsLogged";

const CreateUserCard = () => {
  const history = useHistory();
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alertIsOpen, setAlertIsOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const setLogged = useHasVoted((s) => s.setLogged);

  useEffect(() => {
    const storedUsers = localStorage.getItem("users");
    if (storedUsers) {
      setUsuarios(JSON.parse(storedUsers));
    }
  }, []);

  const saveUsersToLocalStorage = (users: Usuario[]) => {
    localStorage.setItem("users", JSON.stringify(users));
  };

  const handleUserNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const validateEmail = (email: string): boolean => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (!userName || !email || !password) {
      setAlertMessage("Por favor completa todos los campos.");
      setAlertIsOpen(true);
      return;
    }
    if (!validateEmail(email)) {
      setAlertMessage("Por favor ingresa un correo electrónico válido.");
      setAlertIsOpen(true);
      return;
    }
    if (usuarios.some((user) => user.email === email)) {
      setAlertMessage("Este correo ya está registrado.");
      setAlertIsOpen(true);
      return;
    }
    setLogged(true);
    const newUser: Usuario = {
      name: userName,
      email: email,
      password: password,
    };
    const updatedUsers = [...usuarios, newUser];
    saveUsersToLocalStorage(updatedUsers);
    setUsuarios(updatedUsers);
    setUserName("");
    setEmail("");
    setPassword("");
    setAlertIsOpen(false);

    localStorage.setItem("currentUser", JSON.stringify({ email: newUser.email, hasVoted: false }));

    history.push("/cards");
  };

  return (
    <div>
      <Header to="/" title="Crear Cuenta" />
      <IonCard>
        <IonGrid>
          <IonRow>
            <IonCol size="12">
              <h2 className="ion-text-center">Crear Usuario</h2>
            </IonCol>
          </IonRow>
          <IonRow>
            <TextField
              label="Nombre de usuario"
              variant="outlined"
              value={userName}
              onChange={handleUserNameChange}
              style={{ margin: "15px", width: "100%" }}
              InputLabelProps={{ style: { color: "#fff" } }}
              InputProps={{
                style: { color: "#fff" },
                placeholder: "Escribe tu nombre de usuario",
              }}
            />
            <TextField
              label="Correo electrónico"
              variant="outlined"
              value={email}
              onChange={handleEmailChange}
              style={{ margin: "15px", width: "100%" }}
              InputLabelProps={{ style: { color: "#fff" } }}
              InputProps={{
                style: { color: "#fff" },
                placeholder: "Escribe tu correo electrónico",
              }}
            />
            <TextField
              label="Contraseña"
              variant="outlined"
              type="password"
              value={password}
              onChange={handlePasswordChange}
              style={{ margin: "15px", width: "100%" }}
              InputLabelProps={{ style: { color: "#fff" } }}
              InputProps={{
                style: { color: "#fff" },
                placeholder: "Escribe tu contraseña",
              }}
            />
            <Button
              variant="contained"
              onClick={handleSubmit}
              style={{ margin: "30px", width: "100%" }}
            >
              Registrarse
            </Button>
          </IonRow>
        </IonGrid>
      </IonCard>
      <Alert
        isOpen={alertIsOpen}
        message={alertMessage}
        onClose={() => setAlertIsOpen(false)}
      />
    </div>
  );
};

export default CreateUserCard;
