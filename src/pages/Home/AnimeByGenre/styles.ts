import { styled } from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    overflow-y: scroll;

    @media (max-width: 650px) {
        justify-content: center;
        align-items: center;
    }
`;
