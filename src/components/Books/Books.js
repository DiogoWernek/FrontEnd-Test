import React, { useEffect, useState } from 'react';
import './Books.css';

function Books() {
  const [books, setBooks] = useState([]);
  const bookTitles = [
    "Harry Potter e a Câmara Secreta", 
    "Harry Potter e a Pedra Filosofal", 
    "Harry Potter e o prisioneiro de Azkaban", 
    "Harry Potter e o Cálice de Fogo"
  ];

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const responses = await Promise(
          bookTitles.map(title => 
            fetch(`https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(title)}`)
          )
        );

        const fetchedBooks = responses.map(response => {
          const book = response.data.items[0];
          return {
            title: book.volumeInfo.title,
            authors: book.volumeInfo.authors || ["Autor Desconhecido"],
            image: book.volumeInfo.imageLinks?.thumbnail || '/images/cape.png'
          };
        });

        setBooks(fetchedBooks);
      } catch (error) {
        console.error("Erro ao buscar livros:", error);
      }
    };

    fetchBooks();
  }, );

  return (
    <div className="books-container">
      {books.map(book => (
        <div key={book.id}>
          <img src={book.image} alt='Imagem capa' />
          <h1>{book.title}</h1>
          <p>{book.authors.join(', ')}</p>
        </div>
      ))}
    </div>
  );
}

export default Books;
