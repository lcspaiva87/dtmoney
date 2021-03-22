import { Container } from "./styles";
import  incomeImg  from '../../assets/income.svg';
import  Total  from '../../assets/total.svg';
import  outcomeImg  from '../../assets/outcome.svg';
export function Summary() {
    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="Entradas" />
                </header>
                <strong>R$1000,00</strong>
            </div>
            <div>
                <header>
                    <p>Saidas</p>
                    <img src={outcomeImg} alt="Saidas" />
                </header>
                <strong>-R$1000,00</strong>
            </div>
            <div className="highline-background">
                <header>
                    <p>Entradas</p>
                    <img src={Total} alt="Total" />
                </header>
                <strong>R$00,00</strong>
            </div>
        </Container>
    );
}