import React from "react";
import Cards from "./Cards";

export default function TelaFlashCards() {
  const [respondidas, setRespondidas] = React.useState(0);
  const [icons, setIcons] = React.useState([]);
  const cards = [
    {
      pergunta: "O que é JSX?",
      resposta: "JSX é uma extensão de linguagem do JavaScript",
    },
    {
      pergunta: "React é:",
      resposta:
        "React é uma biblioteca JavaScript para construção de interfaces",
    },
    {
      pergunta: "Componentes devem iniciar com",
      resposta: "Componentes devem iniciar com letra maiúscula",
    },
    {
      pergunta: "Podemos colocar __ dentro do JSX",
      resposta: "Podemos colocar expressões dentro do JSX",
    },
  ];

  return (
    <>
      <div className="tela2">
        <header>
          <img src="./assets/img/logo-pequeno.png" alt="logo"></img>
          <h1>ZapRecall</h1>
        </header>
        <main>
          <div className="perguntas">
            {cards.map((card, index) => (
              <Cards
                key={index}
                index={index}
                pergunta={card.pergunta}
                resposta={card.resposta}
                callback={(icon) => {
                  setRespondidas(respondidas + 1);
                  setIcons([...icons, icon]);
                }}
              />
            ))}
          </div>
        </main>
        <footer>
          <div>
            <p> {respondidas}/4 concluidos </p>
            <div className="icones-footer">
              {icons.map((icon) => {
                let css;
                if (icon === "close-circle") css = "resp-nao";
                if (icon === "help-circle") css = "resp-quase";
                if (icon === "checkmark-circle") css = "resp-zap";

                return <ion-icon class={css} name={icon}></ion-icon>;
              })}
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
