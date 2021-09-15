import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getNumCart } from "../../../Store/Actions";
import { Table, Col, Row } from "react-bootstrap";
import Classes from "./totalTable.module.scss";

export default function TotalTable(props) {
  const numData = useSelector((state) => state.addCart.numCart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNumCart());
  }, []);

  return (
    <div className="mt-5">
      <Row>
        <Col md={{ span: 6, offset: 6 }}>
          <Table
            striped
            bordered
            hover
            responsive="lg"
            className={`${Classes.TotalTable}`}
          >
            <thead>
              <tr>
                <th colSpan="2">CART TOTALS</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan="1" className="fw-bold bgColor2">
                  Subtotal
                </td>
                <td colSpan="1" className="secColor">
                  ${(numData * 68.00).toFixed(2)}
                </td>
              </tr>
              <tr>
                <td colSpan="1" className="fw-bold bgColor2">
                  Total
                </td>
                <td colSpan="1" className="secColor">
                  ${(numData * 68.00).toFixed(2)}
                </td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </div>
  );
}
