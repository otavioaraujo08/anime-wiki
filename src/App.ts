import styled from 'styled-components';
import skyWallpaper from './assets/images/skyWallpaper.png';

interface BoxProps {
    isLogin: boolean;
}

export const AppBox = styled.div`
    background-image: url(${skyWallpaper});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ChoosenBox = styled.div<BoxProps>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: ${(props) => (props.isLogin ? '2rem' : '10rem')};
    height: 30rem;
    width: 30rem;

    background: rgba(255, 255, 255, 0.55);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(3.5px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);

    @media (max-width: 500px) {
        width: 90%;
    }
`;

export const MaintenanceImage = styled.img`
    width: 90%;
    height: 80%;
`;

export const MaintenanceText = styled.h1`
    font-size: 1.4rem;
    font-family: 'IBM Plex Sans', sans-serif;
    font-weight: 500;
    color: #701313;
    margin-top: 2rem;
    text-align: center;

    @media (max-width: 600px) {
        font-size: 1.2rem;
        width: 80%;
    }

    @media (max-width: 460px) {
        font-size: 1rem;
    }
`;

export const ChoosenTitle = styled.h1`
    font-size: 1.7rem;
    font-family: 'IBM Plex Sans', sans-serif;
    font-weight: 600;
    color: #363636;
    margin-top: 2rem;
    text-align: center;

    @media (max-width: 600px) {
        font-size: 1.5rem;
        width: 80%;
    }

    @media (max-width: 460px) {
        font-size: 1.2rem;
    }
`;

export const ChoosenBoxContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
`;

export const ChoosenButton = styled.button`
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

export const AuxiliarText = styled.p`
    font-size: 0.9rem;
    font-family: 'IBM Plex Sans', sans-serif;
    font-weight: 400;
    cursor: pointer;
    color: #46464a;

    &:hover {
        color: #000000;
        text-decoration: underline;
        transition: 0.3s ease-in-out;
    }

    @media (max-width: 600px) {
        font-size: 0.8rem;
        width: 80%;
    }
`;
