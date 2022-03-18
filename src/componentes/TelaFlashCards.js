import React from "react";
import Cards from "./Cards";
import Header from "./Header";
import sad from "../assets/img/sad.png";
import party from "../assets/img/party.png";

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

  function randomCards(cards) {
    cards.sort(comparador);
  }
  function comparador() {
    return Math.random() - 0.5;
  }
  randomCards(cards);

  function checaRespondidas() {
    if (respondidas !== 4) {
      return <p>{respondidas}/4 concluidos</p>;
    } else {
      if (icons.includes("close-circle")) {
        return (
          <>
            <img src={sad} alt="" />
            <span> PUTZ!</span>
            <p>Ainda faltaram alguns.. </p>
            <p>Mas não desanime!</p>
          </>
        );
      } else {
        return (
          <>
            <img src={party} alt="" />
            <span> PARABÉNS!</span>
            <p>Você não esqueceu de nenhum flashcard!</p>
          </>
        );
      }
    }
  }

  return (
    <>
      <div className="tela2">
        <Header />
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
            {checaRespondidas()}
            <div className="icones-footer">
              {icons.map((icon, index) => {
                let css;
                if (icon === "close-circle") css = "resp-nao";
                if (icon === "help-circle") css = "resp-quase";
                if (icon === "checkmark-circle") css = "resp-zap";

                return (
                  <ion-icon key={index} class={css} name={icon}></ion-icon>
                );
              })}
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
