interface BotaoPersonalizadoProps {
  onClick: () => void;
  children: string;
}

export default function BotaoPersonalizado(props: BotaoPersonalizadoProps) {
  return (
    <button
      className="bg-blue-500 px-4 py-2 rounded-md text-white"
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}
