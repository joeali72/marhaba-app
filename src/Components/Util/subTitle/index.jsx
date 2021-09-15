import Classes from "./subtitle.module.scss";

export default function Subtitle(props) {
  return (
    <h5 className={`${props.className} ${Classes.Subtitle}`}>
      {props.children}
    </h5>
  );
}
