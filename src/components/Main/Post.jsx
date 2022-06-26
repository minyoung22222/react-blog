import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Category from './Category'
import Author from './Author'

const StyledPost = styled(Link)`
    display: block;
	overflow: hidden;
	border-radius: var(--border-radius);
	background: var(--white-color);
	font-size: 2rem;
`

const StyledArticleImg = styled.img`
    width: 100%;
`

const StyledContentsWrap = styled.div`
    padding: 1.6rem 2.4rem 2.4rem;
`

const StyledH3 = styled.h3`
    display: -webkit-box;
	-webkit-box-orient: vertical;
	overflow: hidden;
	text-overflow: ellipsis;
	word-break: break-all;
    height: calc(1.8rem * 1.4 * 2);
	margin: 1rem 0;
	font-size: 1.8rem;
	font-weight: bold;
	-webkit-line-clamp: 2;
	letter-spacing: -0.02em;
    @media (max-width: 540px) {
		height: auto;
		-webkit-line-clamp: 1;
    }
`

const StyledPostDescription = styled.p`
	height: calc(1.4rem * 1.4 * 3);
	margin-top: 1.6rem;
	color: var(--gray-color);
	font-size: 1.4rem;
	-webkit-line-clamp: 3;
	text-indent: 0.5em;
    @media (max-width: 540px) {
		height: auto;
		-webkit-line-clamp: 2;
	}
`


export default function Post() {
    const [postObj, setPostObj] = useState({});
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        async function getData() {
            const res = await fetch('/data.json');
            const data = await res.json();
            setPostObj(data.posts);
            setIsLoaded(true);
        }
        getData();
    }, []);

    if (isLoaded) {
        console.log({postObj})
        return (
            <>
                {postObj.map(item => (
                    <li key={item.id}>
                        <StyledPost to="postview">
                            <article>
                                <StyledArticleImg src={item.thumbnail} alt="" />
                                <Category/>
                                <StyledContentsWrap>
                                    <StyledH3>
                                        {item.title}
                                    </StyledH3>
                                <Author />
                                    <StyledPostDescription>
                                        {item.contents.text}
                                    </StyledPostDescription>
                                </StyledContentsWrap>
                            </article>                     
                        </StyledPost>
                    </li>
                ))}
            </>
        )
    }
}


{/* <li key={post.id}>
                    <StyledPost to="postview">
                        <article>
                            <StyledArticleImg src="./images/post-img6.jpg" alt="" />
                            <Category/>
                            <StyledContentsWrap>
                                <StyledH3>Lorem, ipsum dolor sit amet consectetur adipisicing elit</StyledH3>
                            <Author />
                                <StyledPostDescription>
                                    {post.contents.text}
                                </StyledPostDescription>
                            </StyledContentsWrap>
                        </article>                     
                    </StyledPost>
                </li> */}