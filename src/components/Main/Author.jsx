import React from 'react'
import styled from 'styled-components'

const StyledAuthorWrap = styled.dl`
    display: flex;
	gap: 1rem;
	color: #767676;
	font-size: 1.2rem;
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
        <StyledDd><StyledImg src={require('../../assets/profile.jpg')} /> Chilli</StyledDd>
        <StyledA11yHidden>Created</StyledA11yHidden>
        <StyledDd>
            <StyledCreated>2022.05.25</StyledCreated>
        </StyledDd>
    </StyledAuthorWrap>
  )
}
