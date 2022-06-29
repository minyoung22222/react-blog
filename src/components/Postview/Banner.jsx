import React from 'react'
import styled from 'styled-components'
import backgroundImg from "../../assets/background.jpg"

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

const StyledToday = styled.p`
	padding-left: 0.8em;
	font-size: 5rem;
	font-weight: bold;
	text-align: left;
	line-height: 1.1;
	@media (max-width: 1260px) {
		font-size: 3rem;
		padding-left: 0.2em;
	}
	@media (max-width: 768px) {
		text-align: center;
		padding-left: 0;
	}
`

const StyledEm = styled.em`
	display: block;
	font-size: 2em;
	margin-bottom: -0.15em;
	@media (max-width: 1260px) {
		display: inline;
		font-size: 1.4em;
	}
`

export default function Banner() {
  return (
    // <!-- banner -->
		<StyledBanner>
			<StyledMaxwidth>
				<StyledBannercontents>
					<StyledToday>May <StyledEm>25</StyledEm> Wednesday</StyledToday>
				</StyledBannercontents>
			</StyledMaxwidth>
		</StyledBanner>
		// <!-- //banner -->

  )
}
