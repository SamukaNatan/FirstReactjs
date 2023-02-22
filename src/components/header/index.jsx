import { RiShutDownLine } from 'react-icons/ri';
import { Container, Profile, Logout } from "./style";

export function Header(){
    return(
        <Container>
            <Profile to="/profile">
                <img src="https://github.com/SamukaNatan.png" alt="Foto do usuario" />
                <div>
                    <span>Bem Vindo,</span>
                    <strong>Samuel Natã</strong>
                </div>
            </Profile>

            <Logout>
                <RiShutDownLine />
            </Logout>

        </Container>
    );
}