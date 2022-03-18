import React from "react";

export default function Cards(props) {
  const { pergunta, resposta, index } = props;
  const [estado, setEstado] = React.useState(0);

  const [respBotao, setRespBotao] = React.useState();
  console.log(index);
  //   function clickResposta(resp) {
  //     resp = "pergunta " + resp;
  //     setEstado(estado + 1);
  //     // setRespBotao(resp);
  //   }

  if (estado === 0) {
    return (
      <div className="pergunta">
        <div className="pergunta-frente" onClick={() => setEstado(estado + 1)}>
          <p>Pergunta {index + 1}</p>
          <ion-icon name="play-outline"></ion-icon>
        </div>
      </div>
    );
  }
  if (estado === 1) {
    return (
      <div className="pergunta">
        <div className="pergunta-costa">
          <div className="pergunta-costa-intro">
            <p>{pergunta}</p>
            <img
              src="./assets/img/icone.png"
              alt=""
              onClick={() => setEstado(estado + 1)}
            />
          </div>
        </div>
      </div>
    );
  }
  if (estado === 2) {
    return (
      <div className="pergunta">
        <div className="pergunta-costa">
          <div className="pergunta-costa-resposta">
            <p>{resposta}</p>
            <div className="buttons">
              <button
                className="btn-nao-lembrei"
                onClick={() => {
                  setEstado(estado + 1);
                  setRespBotao("resp-nao");
                }}
              >
                Não lembrei
              </button>
              <button
                className="btn-quase-nao"
                onClick={() => {
                  setEstado(estado + 1);
                  setRespBotao("resp-quase");
                }}
              >
                Quase não lembrei
              </button>
              <button
                className="btn-zap"
                onClick={() => {
                  setEstado(estado + 1);
                  setRespBotao("resp-zap");
                }}
              >
                Zap!
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (estado === 3) {
    const css = `pergunta ${respBotao}`;
    let icon;
    if (respBotao === "resp-nao") icon = "close-circle";
    if (respBotao === "resp-quase") icon = "help-circle";
    if (respBotao === "resp-zap") icon = "checkmark-circle";
    return (
      <div className={css}>
        <div className="pergunta-frente">
          <p>Pergunta {index + 1}</p>
          <ion-icon name={icon}></ion-icon>
        </div>
      </div>
    );
  }
}

// import { useState } from "react/cjs/react.production.min"

// // useState(0);
// // 1 -- pergunta
// // 2 -- resposta
// // 3 -- 0 riscado + icone
