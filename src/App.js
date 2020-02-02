import React, { useState, useEffect } from 'react'
import { Book } from 'components/Book.js'
import styled from 'styled-components/macro'

export const App = () => {
  const [books, setBooks] = useState([])
  const [page, setPage] = useState(0)
  const [totalPages, setTotalPages] = useState()

  useEffect(() => {
    fetch(`http://localhost:8080/page?page=${page}`)
      .then((res) => res.json())
      .then((json) => {
        setBooks(json.data)
        setTotalPages(json.totalPages)
      })
  }, [page])

  return (
    <Container>
      <Content>
        <TitleText><span role="img" aria-label="emoji">📗</span> Showing page {page + 1} of {totalPages + 1} <span role="img" aria-label="emoji">📙</span></TitleText>

        {books.map((book) => (
          <Book key={book.bookID} book={book} />
        ))}

        {/* Only show prev.button if there is one.  */}
        <ButtonContainer>
          {page > 0 && (
            <Button type="button" onClick={() => setPage(page - 1)}>
              Previous page
            </Button>
          )}

          {/* Only show next.button if there is one.  */}
          {page < totalPages && (
            <Button type="button" onClick={() => setPage(page + 1)}>
              Next page
            </Button>
          )}
        </ButtonContainer>
      </Content>
    </Container>
  )
}

const Container = styled.div`
display: flex; 
flex-direction: column;
justify-content:center;
align-items: center;
`
const Content = styled.div`
width: 70%;
`
const TitleText = styled.h1`
font-size: 40px;
text-align: center;`

const ButtonContainer = styled.div`
display: flex; 
justify-content: space-evenly;
margin: 20px;
`

const Button = styled.button`
  display: inline-block;
  font-size: 1.5em;
  margin: 1.5em;
  padding: 0.25em 1em;
  border-radius: 3px;
  display: block;
  color: tomato;
  border-color: tomato;
  border: 2px solid;
`;
