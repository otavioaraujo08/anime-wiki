interface Filter {
    id: number;
    name: string;
    params: string;
}

export const filtersByGenre: Filter[] = [
    {
        id: 1,
        name: 'Todos',
        params: 'all',
    },
    {
        id: 2,
        name: 'Recentes',
        params: 'airing',
    },
    {
        id: 3,
        name: 'Previstos',
        params: 'upcoming',
    },
    {
        id: 4,
        name: 'Tv',
        params: 'tv',
    },
    {
        id: 5,
        name: 'Ova',
        params: 'ova',
    },
    {
        id: 6,
        name: 'Filme',
        params: 'movie',
    },
    {
        id: 7,
        name: 'Especial',
        params: 'special',
    },
    {
        id: 8,
        name: 'Popularidade',
        params: 'bypopularity',
    },
    {
        id: 9,
        name: 'Favoritos',
        params: 'favorite',
    },
];
