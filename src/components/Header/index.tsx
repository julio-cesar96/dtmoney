import logoIMG from '../../assets/logo.svg';
import { Container, Content } from './styles';


export function Header () {
    return (
        <>
            <Container>
                <Content>
                <img src={logoIMG} alt="dt money" />
                <button type="button"> 
                    Nova transação 
                </button>
                </Content>
            </Container>
        </>
    )
}