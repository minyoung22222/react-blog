import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const StyledAbout = styled.aside`
    flex-basis: calc((100% - 2.4rem * 3) / 4);
	flex-shrink: 0;
	align-self: flex-start;
	padding: 4rem 2.4rem 7rem;
	box-sizing: border-box;
	border-radius: var(--border-radius);
	background: var(--white-color);
	text-align: center;
	font-size: 2rem;
    @media (max-width: 1024px) {
		width: 100%;
}
`

const StyledH2 = styled.h2`
    margin-bottom: 2rem;
	font-size: 1.2rem;
	font-weight: bold;
	text-transform: uppercase;
	text-decoration: underline;
	letter-spacing: 0.1em;
`

const StyledH3 = styled.h3`
    margin-bottom: 2rem;
	font-size: 1.2rem;
	font-weight: bold;
	text-transform: uppercase;
	text-decoration: underline;
	letter-spacing: 0.1em;
    margin-top: 6rem;
`

const StyledUserProfile = styled.img`
    width: 8rem;
	height: 8rem;
	object-fit: cover;
	border-radius: 50%;
`

const StyledUserName = styled.p`
    color: var(--main-color);
	font-weight: bold;
	font-size: 1.6rem;
	margin: 1.2rem 0 0.8rem;
`

const StyledUserDescription = styled.p`
    font-size: 1.4rem;
	padding: 0 0.4rem;
`

const StyledCategories = styled.ul`
    display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;
	gap: 0.8rem;
`

const StyledLiA = styled(Link)`
    background: var(--gray-background);
	color: var(--gray-text);
	font-size: 1.2rem;
	border-radius: calc(var(--border-radius) * 2);
	padding: 0.2rem 1.2rem;
`

const StyledSns = styled.ul`
    display: flex;
	gap: 0.6rem;
	justify-content: center;
	margin-top: -0.4rem;
`

const StyledSnsA = styled(Link)`
    display: block;
	padding: 0.4rem;
	line-height: 1;
`

const StyledSnsImg = styled.img`
    width: 1.6rem;
	display: block;
`

export default function About() {
  return (
    <StyledAbout>
        <StyledH2>About Me</StyledH2>
        <StyledUserProfile src={require('../../assets/profile.jpg')} />
        <StyledUserName>Chilli</StyledUserName>
        <StyledUserDescription>Lorem ipsum dolor sit amet consectetur adipisicing elit.</StyledUserDescription>
        <StyledH3>Categories</StyledH3>
        <StyledCategories>
            <li><StyledLiA href="#">Life</StyledLiA></li>
            <li><StyledLiA href="#">Style</StyledLiA></li>
            <li><StyledLiA href="#">Tech</StyledLiA></li>
            <li><StyledLiA href="#">Sport</StyledLiA></li>
            <li><StyledLiA href="#">Photo</StyledLiA></li>
            <li><StyledLiA href="#">Develop</StyledLiA></li>
            <li><StyledLiA href="#">Music</StyledLiA></li>
        </StyledCategories>
        <StyledH3>Follow</StyledH3>
        <StyledSns>
            <li>
                <StyledSnsA href="#">
                    <StyledSnsImg src={require('../../assets/Facebook.svg').default} alt="Facebook" />
                </StyledSnsA>
            </li>
            <li>
                <a href="!#">
                    <StyledSnsImg src={require('../../assets/Twitter.svg').default}alt="Twitter" />
                </a>
            </li>
            <li>
                <a href="!#">
                    <StyledSnsImg src={require('../../assets/Instagram.svg').default} alt="Instagram" />
                </a>
            </li>
            <li>
                <a href="!#">
                    <StyledSnsImg src={require('../../assets/Github.svg').default} alt="GitHub" />
                </a>
            </li>
        </StyledSns>
    </StyledAbout>
  )
}
