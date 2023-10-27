import { RiShutDownLine } from "react-icons/ri"
import { Container,Profile,Logout} from "./styles";

export function Header(){
    return(
        <Container>
            <Profile to="/profile">
                <img src="https://github.com/breno-okra.png" alt="foto do ussuario" />

                <div>
                    <span>Bem-Vindo</span>
                    <strong>Breno-okra</strong>
                </div>
            </Profile>

            <Logout>
                <RiShutDownLine/>
            </Logout>
        </Container>
    )
}