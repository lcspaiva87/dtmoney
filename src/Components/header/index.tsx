import Logo from '../../assets/logo.svg';

import { Container, Content } from './styles';

interface HeaderProps{
    onOpenNewTransactions:()=>void;
}
export function Header({onOpenNewTransactions}:HeaderProps) {

    return (
        <Container>
            <Content>
                <img src={Logo} alt="dt Money" />
                <button type="button" onClick={onOpenNewTransactions}>
                    Nova transação
                </button>

            </Content>
        </Container>
    )
}