import { Container } from "react-bootstrap";
import CartTable from "../../Components/Util/CartTable"
import TotalTable from "../../Components/Util/TotalTable"

export default function CartContentContainer(props) {
  return (
    <Container>
      <CartTable />
      <TotalTable />
    </Container>
  );
}
