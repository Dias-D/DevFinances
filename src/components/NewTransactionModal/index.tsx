import ReactModal from "react-modal";
import { FormEvent, useState } from "react";

import expenseSvg from '../../assets/expense.svg';
import incomeSvg from '../../assets/income.svg';

import { Container, RadioBox, TransactionTypeContainer } from "./styles";
import { useTransactions } from "../../hooks/useTransaction";

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
    const { createTransaction } = useTransactions();

    const [type, setType] = useState('deposit');
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState(0);
    const [category, setCategory] = useState('');

    async function handleCreateTransaction(event: FormEvent) {
        event.preventDefault();

        await createTransaction({
            title, amount, type, category
        });

        setTitle('');
        setAmount(0);
        setType('');
        setCategory('');
        onRequestClose();
    }

    return (
        <ReactModal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <button type="button" onClick={onRequestClose} className="react-modal-close">
                X
            </button>
            <Container onSubmit={handleCreateTransaction}>
                <h2>Cadastrar Transação</h2>

                <input placeholder="Título" value={title} onChange={event => setTitle(event.target.value)} />
                <input type="number" placeholder="Valor" value={amount} onChange={event => setAmount(Number(event.target.value))} />
                <TransactionTypeContainer>
                    <RadioBox
                        type="button"
                        onClick={() => setType('deposit')}
                        isActive={type === 'deposit'}
                        activeColor="green"
                    >
                        <img src={incomeSvg} alt="Entrada" />
                        <span>Entrada</span>
                    </RadioBox>
                    <RadioBox
                        type="button"
                        onClick={() => setType('withdraw')}
                        isActive={type === 'withdraw'}
                        activeColor="red"
                    >
                        <img src={expenseSvg} alt="Saída" />
                        <span>Saída</span>
                    </RadioBox>
                </TransactionTypeContainer>
                <input placeholder="Categoria" value={category} onChange={event => setCategory(event.target.value)} />
                <button type="submit">Cadastrar</button>
            </Container>

        </ReactModal>
    );
}