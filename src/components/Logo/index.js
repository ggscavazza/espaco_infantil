import logo from '../../images/logo.png'
import styled from 'styled-components'

const LogoContainer = styled.div`
    gap: 5px;
    display: flex;
    font-size: 30px;
    align-items: center;
    flex-direction: column;
    background-color: #fff;

    img {
        max-width: 240px;
    }

    p {
        margin: 0;
        padding: 0;
    }
`

function Logo () {
    return (
        <LogoContainer>
            <img src={logo} alt='logo' />
            <p><strong>Espaço</strong>Infantil</p>
        </LogoContainer>
    )
}

export default Logo