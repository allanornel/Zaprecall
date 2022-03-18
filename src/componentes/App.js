import React from "react";
import TelaInicial from "./TelaInicial";
import TelaFlashCards from "./TelaFlashCards";

import "../assets/css/reset.css";
import "../assets/css/style.css";

export default function App() {
  const [tela2, setTela2] = React.useState(false);

  if (!tela2) {
    return (
      <>
        <TelaInicial callback={() => setTela2(true)} />
      </>
    );
  } else {
    return (
      <>
        <TelaFlashCards />
      </>
    );
  }
}
