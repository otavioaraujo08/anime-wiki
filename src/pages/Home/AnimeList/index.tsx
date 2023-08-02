import { useState, useEffect } from 'react';
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
import { animeService } from '../../../services/animeService';

export const AnimeList = () => {
    const [genre, setGenre] = useState('all');

    const handleSetGenre = (genre: string) => () => {
        setGenre(genre);
    };

    const handleGetAnimeByGenre = async () => {
        try {
            const response = await animeService.getAnimeList({
                ranking_type: genre,
            });

            console.log(response);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        handleGetAnimeByGenre();
    }, [genre]);

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
