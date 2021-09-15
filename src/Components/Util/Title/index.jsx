import Classes from "./title.module.scss";

export default function Title(props) {
  return (
    <h3 className={`${Classes.Title} ${props.className}`}>
      <span>{props.children}</span>
    </h3>
  );
}
