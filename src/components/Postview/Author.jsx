import React from 'react'
import styled from 'styled-components'

const StyledAuthorWrap = styled.dl`
    height: 6.4rem;
    font-size: 1.4rem;
    display: flex;
    gap: 1rem;
    color: #767676;
    @media (max-width: 1024px) {
        height: 5.2rem;
        margin-bottom: 1rem;
    }
    @media (max-width: 640px) {
        margin-bottom: 1rem;
        padding-left: 3rem;
    }
`

const StyledDd = styled.dd`
    display: flex;
    align-items: center;
    gap: 0.6rem;
`

const StyledImg = styled.img`
	width: 2em;
	height: 2em;
	border-radius: 50%;
`

const StyledCreated = styled.dd`
    display: flex;
	align-items: center;
	gap: 0.6rem;
    &::before {
        content: "";
        display: block;
        width: 1px;
        height: 0.8em;
        margin-right: 1rem;
        background: var(--border-color);
    }
`

const StyledA11yHidden = styled.dt `
    overflow: hidden;
	position: absolute;
	clip: rect(0, 0, 0, 0);
	width: 1px;
	height: 1px;
	margin: -1px;
	border: 0;
	padding: 0;
`

export default function Author() {
  return (
    <StyledAuthorWrap>
        <StyledA11yHidden>Author</StyledA11yHidden>
        <StyledDd><StyledImg src={require('../../assets/profile.jpg')} alt="profile image"/> Chilli</StyledDd>
        <StyledA11yHidden>Created</StyledA11yHidden>
        <StyledCreated>2022.05.25</StyledCreated>
    </StyledAuthorWrap>
  )
}
