import { styled } from 'styled-components';

interface ButtonProps {
    text: string;
    children?: React.ReactNode;
    onClick?: () => void;
}

const ButtonRedirect = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 15rem;
    height: 2.5rem;
    border-radius: 0.5rem;
    background-color: #293ea5;
    border: none;
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 1rem;
    font-weight: 550;
    line-height: 1rem;
    letter-spacing: 1px;
    color: #ffffff;
    cursor: pointer;

    &:hover {
        background-color: #1e2d7a;
        transition: 0.3s ease-in-out;
    }

    @media (max-width: 600px) {
        width: 90%;
        max-width: 14rem;
        font-size: 0.7rem;
    }
`;

export const PatternButton = ({ text, children, onClick }: ButtonProps) => {
    return (
        <ButtonRedirect onClick={onClick}>
            {text} {children}
        </ButtonRedirect>
    );
};
