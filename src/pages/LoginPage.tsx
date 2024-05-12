import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { IonCard, IonGrid, IonRow, IonCol } from "@ionic/react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Header from "../components/Header";
import Alert from "../components/Alert";
import Usuario from "../entities/Usuario";
import useHasVoted from "../store/useIsLogged";

export const LoginPage = () => {
  const history = useHistory();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [alertIsOpen, setAlertIsOpen] = useState<boolean>(false);
  const [alertMessage, setAlertMessage] = useState<string>("");
  const setLogged = useHasVoted((s) => s.setLogged);

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (!email || !password) {
      setAlertMessage("Por favor completa todos los campos.");
      setAlertIsOpen(true);
      return;
    }

    const storedUsers = localStorage.getItem("users");
    if (storedUsers) {
      const users: Usuario[] = JSON.parse(storedUsers);
      const user = users.find(
        (user: Usuario) => user.email === email && user.password === password
      );
      if (user) {
        history.push("/");
        setLogged(true);
        localStorage.setItem("currentUser", JSON.stringify({ email: user.email, hasVoted: false }));
      } else {
        setAlertMessage(
          "Credenciales incorrectas. Por favor, inténtalo de nuevo."
        );
        setAlertIsOpen(true);
      }
    } else {
      setAlertMessage("No hay usuarios registrados. Regístrate primero.");
      setAlertIsOpen(true);
    }
  };

  return (
    <div>
      <Header to="/" title="Login" />
      <IonCard>
        <IonGrid>
          <IonRow>
            <IonCol size="12">
              <h2 className="ion-text-center">Inicio de Sesión</h2>
            </IonCol>
          </IonRow>
          <IonRow>
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
              Iniciar sesión
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
