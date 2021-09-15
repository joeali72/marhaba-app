import { useState } from 'react';
import { Col, Container, Row } from "react-bootstrap";
import AddCartForm from "../../../Components/Util/AddCartForm";
import ImgZoom from "../../../Components/Util/ImgZoom";
import Subtitle from "../../../Components/Util/subTitle";
import TabsComponent from '../../../Components/Util/Tabs';
import Text from "../../../Components/Util/Text";
import Classes from "./product.module.scss";

export default function ProductContentContainer(props) {
  const [spiks, setSpiks] = useState([
    {
      id: 'sp_1',
      name: 'SKU',
      text: '5294095',
    },
    {
      id: 'sp_2',
      name: 'Category',
      text: 'Uncategorized',
    },
    {
      id: 'sp_3',
      name: 'Tags',
      text: 'Cutting, Hair, Kit, Steel',
    },
  ]);
  return (
    <Container>
      <Row>
        <Col lg={5}>
          <ImgZoom />
        </Col>
        <Col lg={7}>
          <div className={`${Classes.content}`}>
            <Subtitle className={`text-start blkColor mb-3`}>
              EBC Hair Cutting Kit
            </Subtitle>
            <hr />
            <div className={`${Classes.content_price}`}>
              <del>$80.00</del>
              <span className={`${Classes.content_price_green}`}>$68.00</span>
            </div>
            <Text>
              And you know where you were then. Girls were girls and men were
              men. Mister we could use a man like Herbert Hoover again. So get a
              witch’s shawl on a broomstick you can crawl on. Were gonna pay a
              call on the Addams Family.
            </Text>
            {/* <hr />
            <AddCartForm /> */}
            <hr />
            {spiks.map((spiksL) => {
              return (
                <Text key={spiksL.id} className={`d-flex align-items-center mb-2`}>
              <span className={`fw-bold me-2`}>{spiksL.name}:</span>
              <span className={`graycolor`}>{spiksL.text}</span>
            </Text>
              )
            })}
            <hr />
          </div>
        </Col>
      </Row>

      <TabsComponent />
    </Container>
  );
}
