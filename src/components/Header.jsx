import styled from "styled-components"
import { Link } from "react-router-dom"

const StyledHeader = styled.header`
    background: var(--white-color);
`

const StyledDiv = styled.div`
    display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 4rem;
	padding: 1rem 0;
    width: 1224px;
	max-width: calc(100% - 4rem);
	margin: 0 auto;
`

const StyledHeaderH1 = styled.h1`
    font-size: 3rem;
`

const StyledUl = styled.ul`
    display: flex;
	align-items: center;
	gap: 1rem;
`

const HeaderLink = styled(Link)`
    display: block;
	padding: 0.4rem;
	margin-left: -0.4rem;
`
const HeaderLogo = styled.img`
    display: block;
    vertical-align: bottom;
`

const HeaderProfileLink = styled(Link)`
    width: 4.4rem;
	height: 4.4rem;
	display: block;
	border-radius: 50%;
    overflow: hidden;
`
    

const HeaderProfile = styled.img`
    width: 100%;
	height: 100%;
	object-fit: cover;
`

const StyledWriteButton = styled.button`
    padding: 0.2rem 1.2em 0;
    background: var(--main-color);
    color: var(--white-color);
    text-transform: none;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;
    height: 4rem;
    border: 0;
    border-radius: var(--border-radius);
    font-weight: bold;
    line-height: 1;
    @media (max-width: 640px) {
        width: 4.4rem;
		height: 4.4rem;
		padding: 0;
		border-radius: 50%;
    }

`

const StyledButton = styled.button`
    padding: 0.2rem 0.8em 0;
	background: var(--white-color);
	color: var(--black-color);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;
    height: 4rem;
    border: 0;
    border-radius: var(--border-radius);
    font-weight: bold;
    line-height: 1;
    @media (max-width: 640px) {
        width: 4.4rem;
		height: 4.4rem;
		padding: 0;
		border-radius: 50%;
    }
`

const StyledButtonSpan = styled.span`
    @media (max-width: 640px) {
		overflow: hidden;
		position: absolute;
		clip: rect(0, 0, 0, 0);
		width: 1px;
		height: 1px;
		margin: -1px;
		border: 0;
		padding: 0;
	}
`

const HeaderModify = styled.img`
    height: 1.2em;
    margin-top: -0.2rem;
    vertical-align: middle;
    text-transform: none;
`


const HeaderLogout = styled.img`
    text-transform: none;
    height: 1.4em;
`

export default function Header() {
    return (
        <StyledHeader>
            <StyledDiv>
                <StyledHeaderH1>
                    <HeaderLink to='./'>
                        <HeaderLogo src={require('../assets/Logo.svg').default} />
                    </HeaderLink>
                </StyledHeaderH1>
                <StyledUl>
                    <li>
                        <HeaderProfileLink to='#'>
                            <HeaderProfile src={require('../assets/profile.jpg')}  />
                        </HeaderProfileLink>
                    </li>
                    <li>
                        <StyledWriteButton to='#'>
                            <HeaderModify src={require('../assets/icon-modify-white.svg').default}/>
                            <StyledButtonSpan>Write</StyledButtonSpan>
                        </StyledWriteButton>
                    </li>
                    <li>
                        <StyledButton>
                            <HeaderLogout src={require('../assets/icon-logout.svg').default}/>
                            <StyledButtonSpan>Logout</StyledButtonSpan>
                        </StyledButton>
                    </li>
                </StyledUl>
            </StyledDiv>
        </StyledHeader>
    )
}