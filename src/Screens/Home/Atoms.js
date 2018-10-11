
import React from 'react'
import styled from 'styled-components'

// TITLE COMPONENTS
const LI = styled.li`
  text-align: center;
  width: 20%;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  margin-bottom:1rem;
`

const Img = styled.img`
  border: 2px solid #333;
`

const H3 = styled.h3`
  font-size: 1.25rem;
  font-weight: 400;
  font-style: italic;
  color: #333;
`

const P = styled.p`
  color: #666;
`

// TITLE COMPOSITION
export const Title = ({ title, artistName, artKey }) => (
  <LI>
    <Img src={`https://d2snwnmzyr8jue.cloudfront.net/${artKey}_270.jpeg`} alt={`${title} Cover`} />
    <H3>{title}</H3>
    <P>{artistName}</P>
  </LI>
)

export const TitleList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`
