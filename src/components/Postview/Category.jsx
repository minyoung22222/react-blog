import React from 'react'
import styled from 'styled-components'

const StyledCategory = styled.dl`
    display: flex;
	flex-wrap: wrap;
	color: var(--main-color);
	margin: 2rem 0 1rem 0;
`

const StyledDd = styled.dd`
    margin-right: 0.4rem;
	padding: 0.2rem 1.2rem;
	border-radius: calc(var(--border-radius) * 2);
	background: var(--gray-background);
	font-size: 1.2rem;
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

export default function Category() {
  return (
    <StyledCategory>
        <StyledA11yHidden>Category</StyledA11yHidden>
        <StyledDd>Life</StyledDd>
        <StyledDd>Style</StyledDd>
    </StyledCategory>
  )
}
