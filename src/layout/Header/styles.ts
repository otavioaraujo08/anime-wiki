import { styled } from 'styled-components';
import { GithubLogo } from '@phosphor-icons/react';

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
`;

export const List = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-between;
    list-style: none;
    width: 30%;
`;

export const ListText = styled.li`
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
    color: #c4c4c4;
    transition: 0.3s;
    font-family: 'Noto Sans', sans-serif;
`;

export const GitHubLogoStyled = styled(GithubLogo)`
    cursor: pointer;
`;
