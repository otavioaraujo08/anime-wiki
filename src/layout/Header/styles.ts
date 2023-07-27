import { styled } from 'styled-components';
import { GithubLogo } from '@phosphor-icons/react';

interface GithubLogoProps {
    hideOnMobile?: boolean;
}

export const HeaderComponente = styled.header`
    height: 80px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem 2rem;
`;

export const ImageLogo = styled.img`
    height: 3rem;
    width: 3rem;
    object-fit: contain;
    cursor: pointer;

    @media (max-width: 568px) {
        height: 2rem;
        width: 2rem;
    }
`;

export const List = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-between;
    list-style: none;
    width: 30%;

    @media (max-width: 768px) {
        width: 50%;
    }

    @media (max-width: 368px) {
        width: 70%;
    }
`;

export const ListText = styled.li`
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
    color: #c4c4c4;
    transition: 0.3s;
    font-family: 'Noto Sans', sans-serif;

    &:hover {
        color: #fff;
    }

    @media (max-width: 568px) {
        font-size: 0.8rem;
    }
`;

export const GitHubLogoStyled = styled(GithubLogo)<GithubLogoProps>`
    cursor: pointer;

    &:hover {
        background-color: #c4c4c4;
        border-radius: 30%;
        transition: 0.3s;
        color: #fff;
    }

    ${({ hideOnMobile }) =>
        hideOnMobile && '@media (max-width: 768px) { display: none; }'}
`;
