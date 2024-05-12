import React, { useState } from "react";
import { IonCard, IonGrid, IonRow, IonCol } from "@ionic/react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Header from "../components/Header";

const CreateUserCard = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleUserNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    // Aquí puedes agregar la lógica para enviar los datos del usuario
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
    </div>
  );
};

export default CreateUserCard;
