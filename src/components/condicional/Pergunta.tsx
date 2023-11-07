import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";
import If from "./If";

interface PerguntaProps {
  pergunta: string;
  resposta: string;
  aberta: boolean;
  indice: number;
  onClick: (indice: number) => void;
}

export default function Pergunta({
  pergunta,
  resposta,
  aberta,
  indice,
  onClick,
}: Readonly<PerguntaProps>) {
  return (
    <div className="border border-zinc-600 rounded-md overflow-hidden">
      <div
        className="bg-zinc-800 p-5 cursor-pointer select-none flex justify-between"
        onClick={() => onClick(indice)}
      >
        <span>{pergunta}</span>
        {aberta ? <IconChevronUp /> : <IconChevronDown />}
      </div>
      <If teste={aberta}>
        <div className="p-5">{resposta}</div>
      </If>
    </div>
  );
}
