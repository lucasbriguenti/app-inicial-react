interface SerieAProps {
  times: string[];
}

export default function TabelaSerieA(props: Readonly<SerieAProps>) {
  return (
    <ol>
      {props.times.map((time, i) => (
        <li
          className={`text-xl list-decimal
            ${i % 2 === 0 ? "text-blue-500" : "text-yellow-500"}`}
          key={time}
        >
          {time}
        </li>
      ))}
    </ol>
  );
}
