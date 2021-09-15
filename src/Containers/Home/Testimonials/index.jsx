import { Container, Row, Col } from "react-bootstrap";
import Title from "../../../Components/Util/Title";
import TestimonialsSlider from '../../../Containers/Slider/Testimonials';

export default function TestimonialsContainer(props) {
  return (
    <Container>
      <Title className={`mb-4`}>WORDS FROM OUR CLIENTS</Title>
        <TestimonialsSlider />
    </Container>
  );
}
