import { Circulo } from "@/components/basicos/Circulo";

function gerarNumero() {
  return Math.round(Math.random() * 100).toString();
}

export default function PaginaCirculos() {
  return (
    <div className={`flex justify-around items-center h-screen`}>
      <Circulo texto={gerarNumero()} quasePerfeito></Circulo>
      <Circulo texto={gerarNumero()}></Circulo>
      <Circulo texto={gerarNumero()}></Circulo>
    </div>
  );
}
