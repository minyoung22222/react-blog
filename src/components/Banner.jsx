import React from 'react'
import styled from 'styled-components'
import backgroundImg from "../assets/background.jpg"

const StyledBanner = styled.div`
    position: relative;
	background: url(${backgroundImg}) no-repeat 50% 50% / cover;
	height: 27em;
	margin-bottom: -7em;
`

const StyledMaxwidth = styled.div`
    width: 1224px;
	max-width: calc(100% - 4rem);
	margin: 0 auto;
`

const StyledBannercontents = styled.div`
    width: 28rem;
	padding: 7rem 0 14.5rem;
	text-align: center;
	color: var(--gray-background-light);

    &::before {
        content: "";
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: calc((100% - 1224px) / 2 + 44rem);
        height: 100%;
        background: rgba(40, 48, 63, 0.5);
    }
    @media (max-width: 1280px){
        &::before {
            width: 44rem;
        }
    }
    @media (max-width: 768px) {
	width: 100%;
	&::before {
		width: 100%;
	}
    margin: 0 auto;
    }
`

const StyledSubText = styled.p`
    border: 1px solid rgba(249, 249, 249, 0.3);
	border-width: 1px 0;
	padding: 1rem 0 0.8rem;
	font-size: 2rem;
	letter-spacing: 0.2em;
    position: relative;
`

const StyledMainText = styled.p`
    font-weight: bold;
	font-size: 5.4rem;
	margin: 1.6rem 0;
    position: relative;
`

const StyledDescription = styled.p`
    font-size: 1.2rem;
	text-align: left;
	word-break: break-all;
	padding: 0 0.8rem;
    position: relative;
`

export default function banner() {
  return (
    <StyledBanner>
        <StyledMaxwidth>
            <StyledBannercontents>
                <StyledSubText>React Blog</StyledSubText>
                <StyledMainText>My BLOG</StyledMainText>
                <StyledDescription>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis nostrum dolor provident beatae deserunt magnam, illo neque. Maiores ipsum commodi dolorum beatae aliquid laboriosam est
                </StyledDescription>
            </StyledBannercontents>
        </StyledMaxwidth>
    </StyledBanner>
  )
}
