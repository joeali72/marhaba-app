import Subtitle from "../../subTitle";
import Text from "../../Text";
import RatingForm from "./RatingForm";
import { Row, Col } from "react-bootstrap";
import  Img  from '../../Img';
import aminImg from '../../../../Assets/global/admin.png';

export default function ReviewsTab(props) {
  let today = new Date();
  return (
    <>
      <Subtitle className={`text-start blkColor2`}>
        1 review for EBC Hair Cutting Kit
      </Subtitle>
      <div className="w-25">
        <Row className="g-0">
          <Col xs={3}>
            <div className="img">
              <Img src={aminImg} alt='admin' style={{borderRadius: '50%'}}  />
            </div>
          </Col>
          <Col xs={9}>
            <Text className={`d-flex align-items-center mb-2`}>
              <span className={`fw-bold`}>admin</span>
              &nbsp; - &nbsp;
              <time className="graycolor">
                {today.getFullYear() +
                  "-" +
                  (today.getMonth() + 1) +
                  "-" +
                  today.getDate()}
              </time>
            </Text>
            <Text className="graycolor">
              The Best Kit I could ever get! Great Product..Thanks.
            </Text>
          </Col>
        </Row>
      </div>

      <hr />

      <RatingForm />
    </>
  );
}
