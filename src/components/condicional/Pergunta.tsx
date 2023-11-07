import { useState } from "react";

export default function Pergunta() {
  const [aberta, setAberta] = useState(false);

  return (
    <div className="border border-white rounded-md">
      <div
        className="bg-zinc-700 p-5 cursor-pointer"
        onClick={() => setAberta((prev) => !prev)}
      >
        Pergunta
      </div>
      {aberta ? "Sim" : "Não"}
      <div className="p-5">Resposta</div>
    </div>
  );
}
