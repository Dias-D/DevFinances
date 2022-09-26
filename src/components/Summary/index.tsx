import { useContext } from "react";
import expenseSvg from '../../assets/expense.svg';
import incomeSvg from '../../assets/income.svg';
import totalSvg from '../../assets/total.svg';
import { useTransactions } from "../../hooks/useTransaction";

import { Container } from "./styles";

export function Summary() {
    const { transactions } = useTransactions();

    const summary = transactions.reduce((acc, transaction) => {
        if (transaction.type === 'deposit') {
            acc.deposits += transaction.amount;
            acc.total += transaction.amount;
        }
        if (transaction.type === 'withdraw') {
            acc.withdraws += transaction.amount;
            acc.total -= transaction.amount;
        }

        return acc;
    }, {
        deposits: 0,
        withdraws: 0,
        total: 0
    });

    const floatFormat = (value: number) => {
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(value);
    };

    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeSvg} alt="Entradas" />
                </header>
                <strong>
                    {floatFormat(summary.deposits)}
                </strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={expenseSvg} alt="Saídas" />
                </header>
                <strong>-
                    {floatFormat(summary.withdraws)}
                </strong>
            </div>
            <div className="blabla">
                <header>
                    <p>Total</p>
                    <img src={totalSvg} alt="Total" />
                </header>
                <strong>{floatFormat(summary.total)}</strong>
            </div>
        </Container>
    );
}