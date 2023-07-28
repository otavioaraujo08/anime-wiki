import { styled } from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
`;

const AnimeImage = styled.img`
    width: 8rem;
    height: 8rem;
    object-fit: contain;
    border-radius: 0.5rem;
`;

const AnimeName = styled.h3`
    font-size: 1.1rem;
    font-weight: 500;
    font-family: 'IBM Plex Sans', sans-serif;
    color: #fafafa;
`;

const AnimeRanking = styled.p`
    font-size: 0.9rem;
    font-weight: 400;
    font-family: 'IBM Plex Sans', sans-serif;
    color: #fafafa;

    strong {
        font-weight: 700;
        color: #ff9f1c;
    }

    strong::after {
        content: '°';
    }
`;

export const AnimeBox = () => {
    return (
        <Container>
            <AnimeImage
                src="https://cdn.myanimelist.net/images/anime/5/17407.jpg"
                alt="Anime"
            />
            <AnimeName>Nome do anime</AnimeName>
            <AnimeRanking>
                Ranking: <strong>1</strong>
            </AnimeRanking>
        </Container>
    );
};
