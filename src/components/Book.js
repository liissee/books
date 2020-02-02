import React from 'react'
import styled from 'styled-components/macro'

// <Book book={jsonObject} />  = mounted in App like this

export const Book = ({ book }) => {
  return (
    <Card>
      <TitleText>{book.title}</TitleText>
      <Text>by: {book.authors}</Text>
      <Text>Avarage rating: {book.average_rating}</Text>
      <Text>Language code: {book.language_code}</Text>
    </Card>
  )
}

const Card = styled.div`
display: flex;
flex-direction: column;
box-sizing:border-box;
padding: 20px;
border: solid black 2px;
border-radius: 1em;
margin: 5px;
`

const TitleText = styled.h1`
font-size: 25px;
margin:2px;
`
const Text = styled.p`
font-size: 20px;
margin:2px;
`
