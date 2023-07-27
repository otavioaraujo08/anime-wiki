import AnimeWallpaper from '../../../assets/images/saberWallpaper.jpg';
import { styled } from 'styled-components';

interface AnimeImageProps {
    hideOnMobile?: boolean;
}

export const Container = styled.div`
    height: 100vh;
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
    gap: 1rem;
    margin-left: 5rem;
    margin-top: 2.5rem;
`;

export const AnimeTitle = styled.h1`
    width: 30%;
    font-size: 3rem;
    font-weight: 600;
    color: #ffffff;
    font-family: 'Noto Sans', sans-serif;
`;

export const AnimeDescription = styled.h3`
    width: 40%;
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.4rem;
    color: #c4c4c4;
    font-family: 'Noto Sans', sans-serif;
`;

export const AnimeDetailsDiv = styled.div`
    display: flex;
    justify-content: left;
    align-items: center;
    gap: 5rem;
    margin-left: 5rem;
`;

export const AnimeCriticalDiv = styled.div<AnimeImageProps>`
    display: flex;
    text-align: center;
    gap: 1rem;

    ${(props) => props.hideOnMobile && 'overflow: hidden;'}
    ${(props) => !props.hideOnMobile && 'flex-wrap: wrap;'}
`;

export const AnimeDetail = styled.h3`
    font-size: 1rem;
    font-weight: 500;
    color: #c4c4c4;
    font-family: 'Noto Sans', sans-serif;
`;

export const AnimeDetailValue = styled.h3`
    font-size: 1rem;
    font-weight: 600;
    color: #ffb703;
    font-family: 'Noto Sans', sans-serif;
`;

export const AnimeImage = styled.img`
    width: 10rem;
    height: 7rem;
    border-radius: 0.5rem;
    object-fit: cover;
`;
