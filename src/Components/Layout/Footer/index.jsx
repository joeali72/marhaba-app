import { Container } from "react-bootstrap";
import Classes from './footer.module.scss';

export default function Footer(props) {
    return (
        <footer className={Classes.footer}>
            <Container>
                <p className={Classes.footer_copyright}>
                    Copyright 2021 - Marhaba AS
                </p>
            </Container>
        </footer>
    )
};
