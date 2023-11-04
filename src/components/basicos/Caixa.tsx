export default function Caixa({ children }: any) {
  return (
    <div
      className={`bg-purple-500 p-2 rounded-md w-64 h-64 text-xl font-bold
      flex justify-center items-center`}
    >
      {children}
    </div>
  );
}
