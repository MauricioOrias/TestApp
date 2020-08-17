import React from "react";
import logo from "assets/logo.svg";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

export default function MainPage() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edita el archivo <code>src/App.tsx</code> y guarda los cambios para
          recargar
        </p>
        <Link to="/help">
          <Button variant="contained" color="primary">
            Ir a ayuda
          </Button>
        </Link>
      </header>
    </div>
  );
}
