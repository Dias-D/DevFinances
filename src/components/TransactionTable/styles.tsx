import styled from "styled-components";

export const Container = styled.div`
    margin-top: 4rem;

    table {
        width: 100%;
        border-spacing: 0 .5rem;

        th {
            color: white;
            padding: 1rem 2rem;
            text-align: left;
            line-height: 1.5rem;
        }
        
        td  {
            padding: 1rem 2rem;
            background: white;
            border: 0;
            
            &.deposit {
                color: green;
            }
            
            &.withdraw {
                color: red;
            }

            &:first-of-type {
                border-radius: .25rem 0 0 .25rem;
            }
            
            &:last-of-type {
                border-radius: 0 .25rem .25rem 0;
            }
        }
    }
`;