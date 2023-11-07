import { useState } from "react";
import Pergunta from "./Pergunta";

export default function Faq() {
  const [ativo, setAtivo] = useState(0);

  function alternarVisibilidade(indice: number) {
    if (indice === ativo) {
      setAtivo(-1);
      return;
    }

    setAtivo(indice);
  }

  return (
    <div className="flex flex-col gap-2 w-3/4">
      <Pergunta
        pergunta="Pergunta1"
        resposta="resposta1"
        aberta={ativo === 0}
        indice={0}
        onClick={alternarVisibilidade}
      />
      <Pergunta
        pergunta="Pergunta2"
        aberta={ativo === 1}
        resposta="resposta2"
        indice={1}
        onClick={alternarVisibilidade}
      />
      <Pergunta
        pergunta="Pergunta3"
        resposta="resposta3"
        aberta={ativo === 2}
        indice={2}
        onClick={alternarVisibilidade}
      />
      <Pergunta
        pergunta="Pergunta4"
        aberta={ativo === 3}
        resposta="resposta4"
        indice={3}
        onClick={alternarVisibilidade}
      />
    </div>
  );
}
