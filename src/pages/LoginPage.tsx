import React, { useState } from "react";
import { IonCard, IonGrid, IonRow, IonCol } from "@ionic/react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Header from "../components/Header";

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    // Aquí puedes agregar la lógica para enviar los datos del inicio de sesión
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
    </div>
  );
};
