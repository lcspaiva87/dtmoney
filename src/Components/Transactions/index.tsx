
import { useEffect } from 'react';
import { api } from '../../Services/api';
import { Container } from './styles';
export function Transitionstable() {

    useEffect(() => {
        api.get('transactions')
        .then(response => response.data)
    }, []);


    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>titulo</th>
                        <th>valor</th>
                        <th>categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>dev site</td>
                        <td>R$1200,00</td>
                        <td>web</td>
                        <td>20/20/2019</td>
                    </tr>
                    <tr>
                        <td>Agua</td>
                        <td className="deposito">R$80,00</td>
                        <td>Contas</td>
                        <td>20/20/2019</td>
                    </tr>
                    <tr>
                        <td>Compras</td>
                        <td className="withdraw">- R$ 100,00</td>
                        <td>Casa</td>
                        <td>20/20/2019</td>
                    </tr>
                    <tr>
                        <td>PetShop</td>
                        <td>R$1200,00</td>
                        <td>Animal</td>
                        <td>20/20/2019</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}