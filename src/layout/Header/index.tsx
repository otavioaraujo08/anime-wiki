import {
    GitHubLogoStyled,
    HeaderComponente,
    ImageLogo,
    List,
    ListText,
} from './styles';
import BerserkMark from '../../assets/images/berserkMark.png';

export const Header = () => {
    return (
        <HeaderComponente>
            <ImageLogo alt="Logo" src={BerserkMark} />

            <List>
                <ListText>Home</ListText>
                <ListText>Animes</ListText>
                <ListText>Mangás</ListText>
            </List>

            <GitHubLogoStyled size={30} color="#ff0000" weight="bold" />
        </HeaderComponente>
    );
};
