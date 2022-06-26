import React from 'react'
import styled from 'styled-components'
import Post from './Post'
import About from './About'

const StyledMaxWidth = styled.div`
    display: flex;
	flex-direction: row-reverse;
	gap: 2.4rem;
	position: relative;
	width: 1224px;
	max-width: calc(100% - 4rem);
	margin: 0 auto;
`

const StyledA11yHidden = styled.h2 `
    overflow: hidden;
	position: absolute;
	clip: rect(0, 0, 0, 0);
	width: 1px;
	height: 1px;
	margin: -1px;
	border: 0;
	padding: 0;
`

const StyledPosts = styled.ul`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 2.4rem;
	@media (max-width: 768px) {
		grid-template-columns: repeat(2, 1fr);
	}
	@media (max-width: 540px) {
		grid-template-columns: repeat(1, 1fr);
	}
`



export default function Main() {
  return (
	<main>
		<StyledMaxWidth>
			<StyledA11yHidden>Post</StyledA11yHidden>
			<StyledPosts>
				<Post />
			</StyledPosts>
			<About />
		</StyledMaxWidth>
	</main>
  )
}
