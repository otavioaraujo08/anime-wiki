import AnimeWallpaper from '../../../assets/images/saberWallpaper.jpg';
import { styled } from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    width: 100%;
    background-image: url(${AnimeWallpaper});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
`;
