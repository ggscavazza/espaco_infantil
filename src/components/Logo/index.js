import logo from '../../images/logo-branco.png'
import styled from 'styled-components'

const LogoContainer = styled.div`
    gap: 5px;
    display: flex;
    font-size: 30px;
    align-items: center;
    flex-direction: column;

    img {
        max-width: 240px;
    }

    p {
        margin: 0;
        padding: 0;
    }

    hr {
        width: 95%;
    }
`

function Logo () {
    return (
        <LogoContainer>
            <img src={logo} alt='logo' />
            <p><strong>Espaço</strong>Infantil</p>
            <hr/>
        </LogoContainer>
    )
}

export default Logo