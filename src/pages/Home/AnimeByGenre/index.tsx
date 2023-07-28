import { AnimeBox } from '../../../components/AnimeBox';
import { Container } from './styles';

export const AnimesByGenre = () => {
    const animeBoxes = Array.from({ length: 10 }).map((_, i) => (
        <AnimeBox key={i} />
    ));

    return <Container>{animeBoxes}</Container>;
};
