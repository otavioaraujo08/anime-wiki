import { useState } from 'react';
import { filtersByGenre } from './filters';
import {
    AnimeContent,
    Container,
    GenreContent,
    GenreList,
    GenreListBox,
    GenreName,
} from './styles';
import { AnimesByGenre } from '../AnimeByGenre';

export const AnimeList = () => {
    const [genre, setGenre] = useState('Todos');

    const handleSetGenre = (genre: string) => () => {
        setGenre(genre);
    };

    console.log(genre);

    return (
        <Container>
            <GenreContent>
                <GenreListBox>
                    <GenreName>Filtros</GenreName>

                    {filtersByGenre.map((genre) => {
                        const { id, name } = genre;

                        return (
                            <GenreList onClick={handleSetGenre(name)} key={id}>
                                {name}
                            </GenreList>
                        );
                    })}
                </GenreListBox>
            </GenreContent>

            <AnimeContent>
                <AnimesByGenre />
            </AnimeContent>
        </Container>
    );
};
