import { useState } from "react";
import { Table } from "react-bootstrap";
import Subtitle from "../../subTitle";
import Text from "../../Text";

export default function InformationTab(props) {
  const [information, setInformation] = useState({
    title: "Additional information",
    weight: {
      title: "WEIGHT",
      text: "0.5 kg",
    },
    dimensions: {
      title: "DIMENSIONS",
      text: "40 × 33 × 28 cm",
    },
  });
  return (
    <>
      <Subtitle className={`mb-4 blkColor2 text-start`}>
        {information.title}
      </Subtitle>

      <Table striped bordered hover>
        <tbody>
          <tr>
            <td className={`py-2 px-3`}>
              <Text className={`fw-bold blkColor mb-0`}>{information.weight.title}</Text>
            </td>
            <td className={`py-2 px-3`}>
              <Text className={`grayColor mb-0`}>{information.weight.text}</Text>
            </td>
          </tr>
          <tr>
            <td className={`py-2 px-3`}>
              <Text className={`fw-bold blkColor mb-0`}>{information.dimensions.title}</Text>
            </td>
            <td className={`py-2 px-3`}>
              <Text className={`grayColor mb-0`}>{information.dimensions.text}</Text>
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}
