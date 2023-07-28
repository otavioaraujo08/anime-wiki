import { styled } from 'styled-components';

export const Container = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    background-color: #090909;
    color: #fff;
`;

export const GenreContent = styled.div`
    width: 20%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (max-width: 650px) {
        display: none;
    }
`;

export const GenreListBox = styled.div`
    margin: 2rem 0;
    width: 85%;
    padding-left: 0.8rem;
    display: flex;
    flex-direction: column;
    gap: 0.7rem;
    overflow-y: scroll;

    &::-webkit-scrollbar {
        width: 0.7rem;
        height: 0.5rem;
    }

    &::-webkit-scrollbar-thumb {
        background-color: #b35555;
        border-radius: 0.5rem;
        border: 0.2rem solid #1f1f1f;
    }

    &::-webkit-scrollbar-thumb:hover {
        background-color: #ff0000;
    }
`;

export const GenreName = styled.h1`
    height: 2rem;
    display: flex;
    align-items: center;
    color: #ffffff;
    font-size: 1.4rem;
    font-weight: 500;
    font-family: 'Noto Sans', sans-serif;

    @media (max-width: 768px) {
        font-size: 1.2rem;
    }
`;

export const GenreList = styled.li`
    height: 2.3rem;
    display: flex;
    align-items: center;
    padding-left: 20px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    border-radius: 0.5rem;
    color: #c4c4c4;
    font-size: 1rem;
    font-weight: 500;
    font-family: 'Noto Sans', sans-serif;

    @media (max-width: 940px) {
        font-size: 0.7rem;
    }

    &:hover {
        background-color: #565151;
        color: #fafafa;
    }
`;

export const AnimeContent = styled.div`
    width: 80%;

    @media (max-width: 650px) {
        width: 100%;
    }
`;
