import { PatternButton } from '../../../components/PatternButton';
import { Header } from '../../../layout/Header';
import {
    AnimeCriticalDiv,
    AnimeDescription,
    AnimeDetail,
    AnimeDetailValue,
    AnimeDetailsDiv,
    AnimeImage,
    AnimeInformationsDiv,
    AnimeTitle,
    Container,
} from './styles';
import { ArrowSquareRight } from '@phosphor-icons/react';
import FateBabylonia from '../../../assets/images/fateGrandOrderBabylonia.jpg';
import FateCamelot from '../../../assets/images/fateGrandOrderCamelot.jpeg';
import FateSingularity from '../../../assets/images/FateGrandOrderSingularity.webp';

export const MainContent = () => {
    return (
        <Container>
            <Header />

            <AnimeInformationsDiv>
                <AnimeTitle>Fate/ Grand Order</AnimeTitle>

                <AnimeDescription>
                    A Guerra do Santo Graal: uma violenta batalha entre magos em
                    que sete mestres e seus servos convocados lutam pelo Santo
                    Graal, um artefato mágico que pode realizar qualquer desejo
                    do vencedor.
                </AnimeDescription>

                <PatternButton
                    text="Infomações"
                    style={{
                        backgroundColor: '#F2F2F2',
                        color: '#210303',
                        border: '2px solid #210303',
                    }}
                >
                    <ArrowSquareRight size={20} color="#210303" weight="bold" />
                </PatternButton>
            </AnimeInformationsDiv>

            <AnimeDetailsDiv>
                <AnimeCriticalDiv>
                    <AnimeDetail>Classificação:</AnimeDetail>

                    <AnimeDetailValue>7.7</AnimeDetailValue>

                    <AnimeDetail>Gênero:</AnimeDetail>

                    <AnimeDetailValue>fantasia</AnimeDetailValue>

                    <AnimeDetail>Status</AnimeDetail>

                    <AnimeDetailValue>Finalizado</AnimeDetailValue>
                </AnimeCriticalDiv>

                <AnimeCriticalDiv hideOnMobile={true}>
                    <AnimeImage
                        alt="Fate/ Grand Order image"
                        src={FateBabylonia}
                    />

                    <AnimeImage
                        alt="Fate/ Grand Order image"
                        src={FateCamelot}
                    />

                    <AnimeImage
                        alt="Fate/ Grand Order image"
                        src={FateSingularity}
                    />
                </AnimeCriticalDiv>
            </AnimeDetailsDiv>
        </Container>
    );
};
