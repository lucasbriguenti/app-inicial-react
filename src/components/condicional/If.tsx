export default function If(props: Readonly<{ teste: boolean; children: any }>) {
  if (props.teste) {
    return props.children;
  }

  return null;
}
