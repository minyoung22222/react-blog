import React from 'react'
import styled from 'styled-components'
import Author from './Author'
import Category from './Category'
import { Link } from "react-router-dom"

import likeImg from "../../assets/icon-like.svg"
import likeWhiteImg from "../../assets/icon-like-white.svg"
import ModifyImg from "../../assets/icon-modify.svg"
import DeleteImg from "../../assets/icon-delete.svg"
import ArrowImg from "../../assets/ArrowLeft-blue.svg"
import ModifyWhiteImg from "../../assets/icon-modify-white.svg"
import DeleteWhiteImg from "../../assets/icon-delete-white.svg"

const StyledMaxWidth = styled.div`
    width: 1224px;
    max-width: calc(100% - 4rem);
    margin: 0 auto;
`

const StyledWrapBox = styled.section`
	position: relative;
    width: 91.2rem;
    max-width: 100%;
    margin: -30rem 0 auto auto;
    padding: 8rem;
	border-radius: var(--border-radius);
	background: var(--white-color);
	font-size: 4rem;
	transition: all 0.3s;
    @media (max-width: 1024px) {
        width: 100%;
        padding: 6rem
    }
    @media (max-width: 640px) {
        padding: 4rem;
    }
`

const StyledInner = styled.div`
    width: 100%;
    max-width: 100%;
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
    @media (max-width: 1024px) {
        flex-direction: column;
        gap: 2rem;
    }
`

const StyledTitleH2 = styled.h2`
	width: 100%;
	text-transform: none;
    margin-bottom: 0;
    font-size: 3.2rem;
    font-weight: bold;
`

const StyledBtnLike = styled.button`
    flex-shrink: 0;
    width: 12rem;
    height: 4rem;
    padding-left: 3rem;
    border: 1px solid rgba(var(--red-rgb), 0.5);
    border-radius: var(--border-radius);
    transition: all 0.3s;
    background: var(--white-color) url(${likeImg}) no-repeat 2.5rem 50% / 2.4rem;
    
    &:hover {
        background: var(--red-color) url(${likeWhiteImg}) no-repeat 2.5rem 50% / 2.4rem;
        color: var(--white-color);
    }   
`

const StyledHr = styled.hr`
    border: 1px solid var(--border-color);
    border-width: 1px 0 0 0;
    margin: 3.2rem 0;
`

const StyledContentsP = styled.p`
    font-size: 1.6rem;
	line-height: 1.6;
	text-align: justify;
	letter-spacing: -0.01em;
`

const StyledViewContentsImg = styled.img`
    max-width: 100%;
    margin: 3.2rem 0;
`

const StyledBtnGroup = styled.div`
    display: flex;
    align-items: center;
    gap: 0.8rem;
    position: absolute;
    top: 9.2rem;
    right: 8rem;
    font-size: 1.6rem;
    @media (max-width: 640px) {
        top: 4rem;
        right: 4rem;
    }
    @media (max-width: 1024px) {
        height: 5.2rem;
    }
`

const StyledBtnModify = styled(Link)`
    background: var(--gray-background) url(${ModifyImg}) no-repeat 50% 50% / 1.6rem;
    right: 13rem;
    width: 4rem;
    height: 4rem;
    border: 0;
    border-radius: var(--border-radius);
    transition: all 0.3s;
    &:hover {
        background: var(--main-color) url(${ModifyWhiteImg}) no-repeat 50% 50% / 1.6rem;
    }
`

const StyledBtnDelete = styled.button`
    background: var(--gray-background) url(${DeleteImg}) no-repeat 50% 50% / 1.6rem;
    width: 4rem;
    height: 4rem;
    border: 0;
    border-radius: var(--border-radius);
    transition: all 0.3s;
    &:hover {
        background: var(--red-color) url(${DeleteWhiteImg}) no-repeat 50% 50% / 1.6rem;
    }
`

const StyledBtnBack = styled(Link)`
    position: absolute;
    top: 8rem;
    left: 0;
    width: 6.4rem;
    height: 6.4rem;
    border-radius: 0 var(--border-radius) var(--border-radius) 0;
    background: var(--gray-background) url(${ArrowImg}) no-repeat 50% 50% / 4rem;
    font-size: 1.6rem;
    @media (max-width: 1024px) {
        top: 6rem;
        width: 5.2rem;
        height: 5.2rem;
    }
    @media (max-width: 640px) {
        top: 4rem;
    }
`

const StyledA11yHidden = styled.dt`
    overflow: hidden;
	position: absolute;
	clip: rect(0, 0, 0, 0);
	width: 1px;
	height: 1px;
	margin: -1px;
	border: 0;
	padding: 0;
`


export default function Postview() {
    return (
    <div class="view">
    <StyledMaxWidth>
        <StyledWrapBox>
            <StyledInner>
                <Author />
                <Category />
                <StyledTitleWrap>
                    <StyledTitleH2>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</StyledTitleH2>
                    <StyledBtnLike>Like</StyledBtnLike>
                </StyledTitleWrap>
                <StyledHr />
                <div class="view-contents">
                    <StyledContentsP>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore illum nostrum perferendis voluptas, voluptate soluta corrupti dolore quidem. Placeat, eaque! Exercitationem est
                        facilis dolor quas odio cum incidunt repudiandae vel. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore illum nostrum perferendis voluptas, voluptate soluta corrupti
                        dolore quidem. Placeat, eaque! Exercitationem est facilis dolor quas odio cum incidunt repudiandae vel. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore illum
                        nostrum perferendis voluptas, voluptate soluta corrupti dolore quidem. Placeat, eaque! Exercitationem est facilis dolor quas odio cum incidunt repudiandae vel. Lorem ipsum dolor sit
                        amet consectetur, adipisicing elit. Inventore illum nostrum perferendis voluptas, voluptate soluta corrupti dolore quidem. Placeat, eaque! Exercitationem est facilis dolor quas odio
                        cum incidunt repudiandae vel.
                    </StyledContentsP>
                    <StyledViewContentsImg src={require("../../assets/background.jpg").default} alt="" />
                    <StyledContentsP>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore illum nostrum perferendis voluptas, voluptate soluta corrupti dolore quidem. Placeat, eaque! Exercitationem est
                        facilis dolor quas odio cum incidunt repudiandae vel. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore illum nostrum perferendis voluptas, voluptate soluta corrupti
                        dolore quidem. Placeat, eaque! Exercitationem est facilis dolor quas odio cum incidunt repudiandae vel. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore illum
                        nostrum perferendis voluptas, voluptate soluta corrupti dolore quidem. Placeat, eaque! Exercitationem est facilis dolor quas odio cum incidunt repudiandae vel. Lorem ipsum dolor sit
                        amet consectetur, adipisicing elit. Inventore illum nostrum perferendis voluptas, voluptate soluta corrupti dolore quidem. Placeat, eaque! Exercitationem est facilis dolor quas odio
                        cum incidunt repudiandae vel.
                    </StyledContentsP>
                </div>
                <StyledBtnGroup>
                    <StyledBtnModify href="#" >
                        <StyledA11yHidden>modify</StyledA11yHidden>
                    </StyledBtnModify>
                    <StyledBtnDelete type="button">
                        <StyledA11yHidden>delete</StyledA11yHidden>
                    </StyledBtnDelete>
                </StyledBtnGroup>
                <StyledBtnBack href="./">
                    <StyledA11yHidden>Back</StyledA11yHidden>
                </StyledBtnBack>
            </StyledInner>
        </StyledWrapBox>
    </StyledMaxWidth>
    </div>
    )   
}
