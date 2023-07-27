import AnimeWallpaper from '../../../assets/images/saberWallpaper.jpg';
import { styled } from 'styled-components';

export const Container = styled.div`
    min-height: 100vh;
    height: 100%;
    width: 100%;
    background-image: url(${AnimeWallpaper});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    gap: 3rem;
`;

export const AnimeInformationsDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    margin-left: 5rem;
    margin-top: 2.5rem;
`;

export const AnimeTitle = styled.h1`
    width: 30%;
    font-size: 3rem;
    font-weight: 600;
    color: #ffffff;
    font-family: 'Noto Sans', sans-serif;

    @media (max-width: 768px) {
        font-size: 2.4rem;
    }
`;

export const AnimeDescription = styled.h3`
    width: 50%;
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.4rem;
    color: #c4c4c4;
    font-family: 'Noto Sans', sans-serif;

    @media (max-width: 768px) {
        font-size: 0.8rem;
    }
`;

export const AnimeDetailsDiv = styled.div`
    display: flex;
    justify-content: left;
    align-items: center;
    gap: 5rem;
    margin-left: 5rem;

    @media (max-width: 768px) {
        flex-direction: column;
        margin-left: 0;
        gap: 2rem;
    }
`;

export const AnimeCriticalDiv = styled.div`
    display: flex;
    text-wrap: wrap;
    text-align: center;
    gap: 1rem;

    @media (max-width: 600px) {
        gap: 2rem;
        flex-direction: column;
    }
`;

export const AnimeCriticalDivImage = styled.div`
    display: flex;
    text-align: center;
    gap: 1rem;
    overflow: hidden;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

export const AnimeDetail = styled.h3`
    font-size: 1rem;
    font-weight: 500;
    color: #c4c4c4;
    font-family: 'Noto Sans', sans-serif;

    @media (max-width: 600px) {
        font-size: 0.9rem;
    }
`;

export const AnimeDetailValue = styled.h3`
    font-size: 1rem;
    font-weight: 600;
    color: #ffb703;
    font-family: 'Noto Sans', sans-serif;

    @media (max-width: 768px) {
        font-size: 0.9rem;
    }
`;

export const AnimeImage = styled.img`
    width: 10rem;
    height: 7rem;
    border-radius: 0.5rem;
    object-fit: cover;

    @media (max-width: 768px) {
        margin: 0.5rem 0;
    }
`;
