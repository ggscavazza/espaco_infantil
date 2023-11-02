import home from '../../images/home.svg'
import fichas from '../../images/ficha.svg'
import cadastro from '../../images/cadastro.svg'
import styled from "styled-components"
import { Link } from "react-router-dom"

const OpcoesContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
`

const Opcoes = styled.ul`
    gap: 20px;
    margin: 0;
    padding: 0;
    width: 100%;
    display: flex;
    text-align: center;
    align-items: center;
    flex-direction: column;

    a {
        width: 100%;
        display: flex;
        justify-content: center;
    }
`

const Opcao = styled.li`
    width: 80%;
    padding: 5px;
    display: flex;
    color: #202020;
    cursor: pointer;
    font-size: 24px;
    font-weight: bold;
    align-items: center;
    border-radius: 10px;
    justify-content: center;
    background-color: #f9f9f9;
`

const Icone = styled.div`
    gap: 10px;
    display: flex;
    align-items: center;

    img {
        max-width: 30px;
    }
`

const linksOpcoes = ["Home", "Fichas", "Cadastro"]
const iconesOpcoes = {
    "Home": home,
    "Fichas": fichas,
    "Cadastro": cadastro
}

function OpcoesMenu() {
    return (
        <OpcoesContainer>
            <Opcoes>
                { linksOpcoes.map( (link) => (
                    <Link to={`/${link.toLowerCase()}`}>
                        <Opcao>
                            <Icone><img src={iconesOpcoes[link]} alt={`${'Icone '+link}`}></img> {link}</Icone>
                        </Opcao>
                    </Link>
                ) ) }
            </Opcoes>
        </OpcoesContainer>
    )
}

export default OpcoesMenu