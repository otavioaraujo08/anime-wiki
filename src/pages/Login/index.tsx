import maintenance from '../../assets/images/maintenance.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import {
    AppBox,
    AuxiliarText,
    ChoosenBox,
    ChoosenBoxContent,
    ChoosenButton,
    ChoosenTitle,
    MaintenanceImage,
    MaintenanceText,
} from './styles';

export const Login = () => {
    const [login, setLogin] = useState(false);

    const handleSetLogin = () => {
        setLogin(!login);
    };

    return (
        <AppBox>
            <ChoosenBox isLogin={login}>
                <ChoosenTitle>
                    {login
                        ? 'Insira os dados abaixo'
                        : 'Você deseja realizar login ?'}
                </ChoosenTitle>

                {login ? (
                    <ChoosenBoxContent>
                        <MaintenanceImage
                            alt="maintencance image"
                            src={maintenance}
                        />

                        <MaintenanceText>
                            Em desenvolvimento....
                        </MaintenanceText>

                        <Link to="/home">
                            <AuxiliarText>
                                Redirecionar para página principal
                            </AuxiliarText>
                        </Link>
                    </ChoosenBoxContent>
                ) : (
                    <ChoosenBoxContent>
                        <ChoosenButton onClick={handleSetLogin}>
                            Realizar login
                        </ChoosenButton>

                        <Link to="/home">
                            <AuxiliarText>
                                Redirecionar para página principal
                            </AuxiliarText>
                        </Link>
                    </ChoosenBoxContent>
                )}
            </ChoosenBox>
        </AppBox>
    );
};
