import React from 'react'
import styled from 'styled-components'

import ArrowTopImg from  "../assets/ArrowTop.svg"

const StyledFooter = styled.div`
    background: var(--white-color);
	margin-top: 10rem;
`

const StyledMaxWidth = styled.div`
    display: flex;
	align-items: center;
	justify-content: center;
	height: 8rem;
	position: relative;
	width: 1224px;
	max-width: calc(100% - 4rem);
	margin: 0 auto;
`

const StyeldH2 = styled.h2`
    color: var(--gray-color);
`

const StyledTopbutton = styled.button`
    position: absolute;
	bottom: 0;
	right: 0;
	width: 6.4rem;
	height: 6.4rem;
	padding-top: 2.2rem;
	border: 0;
	border-radius: var(--border-radius) var(--border-radius) 0 0;
	background: var(--main-color) url(${ArrowTopImg}) no-repeat 50% 0.4rem / 4rem;
	color: var(--white-color);
	text-align: center;
	font-weight: bold;
`

export default function Footer() {
  return (
    <StyledFooter>
        <StyledMaxWidth>
            <StyeldH2>©Weniv Corp.</StyeldH2>
            <StyledTopbutton>TOP</StyledTopbutton>
        </StyledMaxWidth>
    </StyledFooter>
  )
}
