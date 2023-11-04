import { useState } from "react";

export default function Evento() {
  const [contador, setContador] = useState(0);

  return (
    <button
      className={`h-72 w-72 bg-green-600 flex justify-center text-4xl items-center
      cursor-pointer`}
      onClick={() => setContador(contador + 1)}
    >
      {contador}
    </button>
  );
}
