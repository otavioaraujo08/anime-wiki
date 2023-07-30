import { api as apiService, ApiService, defaultUrl } from './api';

interface AnimeListParams {
    ranking_type: string;
}

class AnimeService {
    constructor(private readonly api: ApiService) {}

    public getAnimeList = async ({
        ranking_type,
    }: AnimeListParams): Promise<void> => {
        return this.api.get(
            `${defaultUrl}/anime/ranking?ranking_type=${ranking_type}&limit=${10}`
        );
    };
}
export const animeService = new AnimeService(apiService);
