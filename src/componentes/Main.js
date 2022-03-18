import Cards from "./Cards";

export default function Main({ respondidas, setRespondidas, setIcons, icons }) {
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

  return (
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
  );
}
