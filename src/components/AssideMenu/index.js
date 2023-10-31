import styled from "styled-components"
import Logo from "../Logo"
import { Link } from "react-router-dom"

const HeaderContainer = styled.aside`
    gap: 20px;
    margin: 0;
    width: 250px;
    height: 100vh;
    display: flex;
    padding: 0px 0px 10px;
    align-items: center;
    flex-direction: column;
    background-color: #202020;

    a {
        margin: 0;
        width: 100%;
        color: #202020;
        padding: 10px 0px;
        text-decoration: none;
        background-color: #fff;
    }
`

function Header () {
    return (
        <HeaderContainer>
            <Link to='/'><Logo /></Link>
        </HeaderContainer>
    )
}

export default Header