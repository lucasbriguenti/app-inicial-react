import { ReactNode } from "react";

interface CirculoProps {
  texto: string;
  quasePerfeito?: boolean;
  children?: ReactNode;
}

export function Circulo(props: Readonly<CirculoProps>) {
  return (
    <div
      className={`h-64 w-64 text-white text-3xl
     bg-cyan-500 flex flex-col justify-center items-center
     ${props.quasePerfeito ? "rounded-3xl" : "rounded-full"}`}
    >
      <h1>{props.texto}</h1>
    </div>
  );
}
