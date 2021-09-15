import Classes from "./text.module.scss";

export default function Text(props) {
  return (
    <p className={`${props.className} ${Classes.Text}`}>{props.children}</p>
  );
}
