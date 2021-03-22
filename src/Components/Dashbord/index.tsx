import { Summary } from "../Summary";
import { Transitionstable } from "../Transactions";
import { Container } from "./styles";

export function Dashbord() {
    return (
        <Container>
            <Summary/>
            <Transitionstable/>
        </Container>

    );
}