import Image from "next/image";
import { useState } from "react";
import BotaoPersonalizado from "../basicos/BotaoPersonalizado";

export default function ImagemAleatoria() {
  const [pesquisa, setPesquisa] = useState("abstract");
  const [tamanho, setTamanho] = useState(300);
  const url = `https://source.unsplash.com/featured/${tamanho}x${tamanho}?${pesquisa}`;

  return (
    <div className="flex flex-col gap-3 border border-zinc-500 p-7 rounded-md">
      <Image src={url} height={300} width={300} alt="image"></Image>
      <div className="flex gap-5 justify-between">
        <BotaoPersonalizado onClick={() => setPesquisa("abstract")}>
          abstract
        </BotaoPersonalizado>
        <BotaoPersonalizado onClick={() => setPesquisa("city")}>
          city
        </BotaoPersonalizado>
        <BotaoPersonalizado onClick={() => setPesquisa("person")}>
          person
        </BotaoPersonalizado>
      </div>
      <div className="flex flex-row">
        <input
          type="number"
          value={tamanho}
          className="p-2 rounded-md text-black w-[100%]"
          onChange={(value) => setTamanho(+value.target.value)}
        />
      </div>
    </div>
  );
}
