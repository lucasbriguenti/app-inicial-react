import TabelaSerieA from "@/components/listas/tabelaSerieA";
import { IconBallFootball } from "@tabler/icons-react";

export default function PaginaListaBasica() {
  const times = [
    "Palmeiras",
    "São Paulo",
    "Santos",
    "Corinthians",
    "Botafogo",
    "Vasco",
    "Fluminense",
    "Flamengo",
  ];

  return (
    <div className="flex flex-col justify-center items-center h-screen gap-2">
      <h1 className="text-5xl font-black flex flex-row items-center gap-2">
        <IconBallFootball size={50} stroke={1} className="text-green-600" />
        <span>Tabela Serie A</span>
      </h1>
      <TabelaSerieA times={times} />
    </div>
  );
}
