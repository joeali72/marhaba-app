import Classes from "./testimonialsCard.module.scss";
import Img from "../Img";
import Text from "../Text";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function TestimonialsCard(props) {
  return (
    <div className={`${Classes.TestimonialsCard}`}>
      <div className={`${Classes.TestimonialsCard_header}`}> 
        <div className={`${Classes.TestimonialsCard_header_img}`}>
          <Img src={props.src} alt="User Img" className={`br_50 `} />
        </div>
        <div className={`${Classes.TestimonialsCard_header_details} ps-2`}>
          <Text className={`fw-bold mb-1 fs-6`}>{props.name}</Text>
          <Text className="mb-0 graycolor" style={{fontSize: '.85rem'}}>{props.user}</Text>
        </div>
        <FontAwesomeIcon icon={props.icon} size='2x' className={`${Classes.TestimonialsCard_header_icon} ${props.iconClassName}`} />
      </div>
      <div className={`${Classes.TestimonialsCard_body}`}>
        <Text className={`graycolor`}>
          {props.text}
        </Text>
      </div>
    </div>
  );
}
