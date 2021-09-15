import Classes from "./steal.module.scss";

import Subtitle from "../subTitle";

export default function StealBox(props) {
  return (
    <div className={`${Classes.Stealbox}`}>
      <div className={`${Classes.Stealbox_box}`}>
        {props.icon}
        <Subtitle className={`whtColor mdTitle`}>{props.title}</Subtitle>
      </div>
    </div>
  );
}
