import React from 'react'
import styled from 'styled-components'

const StyledMaxWidth = styled.div`
    display: flex;
	flex-direction: row-reverse;
	gap: 2.4rem;
	position: relative;
	width: 1224px;
	max-width: calc(100% - 4rem);
	margin: 0 auto;
`

const StyledWrapBox = styled.section`
	position: relative;
	width: 60rem;
	max-width: calc(100% - 4rem);
	margin: -22rem auto 0;
	padding: 8rem 0;
	border-radius: var(--border-radius);
	background: var(--white-color);
	font-size: 4rem;
	transition: all 0.3s;
`

const StyledInner = styled.div`
	width: 39.2rem;
	max-width: calc(100% - 8rem);
	margin: 0 auto;
	font-size: 1.6rem;
`

const StyledTitleWrap = styled.div`
	display: flex;
	align-items: flex-end;
	justify-content: space-between;
	gap: 8rem;
	margin-bottom: 1rem;
	font-size: 1.6rem;
`

const StyledTitleH2 = styled.h2`
	width: 100%;
	text-transform: none;
`

const StyledContentsP = styled.p`
    font-size: 1.6rem;
	line-height: 1.6;
	text-align: justify;
	letter-spacing: -0.01em;
`

export default function Postview() {
  return (
    <div class="view">
    <StyledMaxWidth>
        <StyledWrapBox>
            <StyledInner>
        <StyledTitleWrap>
        <StyledTitleH2>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</StyledTitleH2>
        <button class="btn-like">Like</button>
        </StyledTitleWrap>
    <hr />
    <div class="view-contents">
        <StyledContentsP>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore illum nostrum perferendis voluptas, voluptate soluta corrupti dolore quidem. Placeat, eaque! Exercitationem est
            facilis dolor quas odio cum incidunt repudiandae vel. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore illum nostrum perferendis voluptas, voluptate soluta corrupti
            dolore quidem. Placeat, eaque! Exercitationem est facilis dolor quas odio cum incidunt repudiandae vel. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore illum
            nostrum perferendis voluptas, voluptate soluta corrupti dolore quidem. Placeat, eaque! Exercitationem est facilis dolor quas odio cum incidunt repudiandae vel. Lorem ipsum dolor sit
            amet consectetur, adipisicing elit. Inventore illum nostrum perferendis voluptas, voluptate soluta corrupti dolore quidem. Placeat, eaque! Exercitationem est facilis dolor quas odio
            cum incidunt repudiandae vel.
        </StyledContentsP>
        <img src="./images/post-background6.jpg" alt="" />
        <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore illum nostrum perferendis voluptas, voluptate soluta corrupti dolore quidem. Placeat, eaque! Exercitationem est
            facilis dolor quas odio cum incidunt repudiandae vel. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore illum nostrum perferendis voluptas, voluptate soluta corrupti
            dolore quidem. Placeat, eaque! Exercitationem est facilis dolor quas odio cum incidunt repudiandae vel. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore illum
            nostrum perferendis voluptas, voluptate soluta corrupti dolore quidem. Placeat, eaque! Exercitationem est facilis dolor quas odio cum incidunt repudiandae vel. Lorem ipsum dolor sit
            amet consectetur, adipisicing elit. Inventore illum nostrum perferendis voluptas, voluptate soluta corrupti dolore quidem. Placeat, eaque! Exercitationem est facilis dolor quas odio
            cum incidunt repudiandae vel.
        </p>
    </div>
    <div class="btn-group">
        <a href="#" class="btn-modify">
            <span class="a11y-hidden">modify</span>
        </a>
        <button type="button" class="btn-delete">
            <span class="a11y-hidden">delete</span>
        </button>
    </div>
    <a href="./" class="btn-back">
        <span class="a11y-hidden">Back</span>
    </a>
            </StyledInner>
        </StyledWrapBox>
    </StyledMaxWidth>
    </div>
  )
}
