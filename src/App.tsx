import {
    AppBox,
    AuxiliarText,
    ChoosenBox,
    ChoosenBoxButtons,
    ChoosenButton,
    ChoosenTitle,
} from './App.ts';
import { useState } from 'react';

function App() {
    const [login, setLogin] = useState(false);

    const handleSetLogin = () => {
        setLogin(!login);
    };

    const handleRedirectUser = () => {
        window.location.href = 'https://www.google.com.br';
    };

    return (
        <AppBox>
            {login ? (
                <h1>Home</h1>
            ) : (
                <ChoosenBox>
                    <ChoosenTitle>Você deseja realizar login ?</ChoosenTitle>

                    <ChoosenBoxButtons>
                        <ChoosenButton onClick={handleSetLogin}>
                            Realizar login
                        </ChoosenButton>
                        <AuxiliarText onClick={handleRedirectUser}>
                            Redirecionar para página principal
                        </AuxiliarText>
                    </ChoosenBoxButtons>
                </ChoosenBox>
            )}
        </AppBox>
    );
}

export default App;
