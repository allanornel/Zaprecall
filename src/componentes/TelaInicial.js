import React from "react";

export default function TelaInicial() {
  const [visible, setVisible] = React.useState(true);

  if (visible) {
    return (
      <>
        <div className="tela1">
          <div className="titulo-inicio">
            <img src="./assets/img/logo.png" alt="logo"></img>
            <h1>ZapRecall</h1>
          </div>

          <div className="inicio-recall" onClick={() => setVisible(false)}>
            <p>Iniciar Recall!</p>
          </div>
        </div>
      </>
    );
  } else {
    return <></>;
  }
}
