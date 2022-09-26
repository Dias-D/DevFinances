import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-top: -10rem;

    .blabla {
        background: var(--green);
        color: #fff;
    }

    div {
        background: var(--light-white);
        padding: 1.5rem 2rem;
        border-radius: 0.25rem;


        header {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        strong {
            margin-top: 1rem;
            font-size: 2rem;
            line-height: 3rem;
        }
    }
`;