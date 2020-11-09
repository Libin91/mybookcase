import React, { useState } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './components/Header';
import About from './pages/About';
import Search from './components/Search';
import Book from './components/Book';
import BookList from './components/BookList';
import data from './models/books.json';
const App = (props) => {
  
  const [books, setBooks] = useState(data);
  const [keyword,setKeyword] = useState('');

  async function findBooks(value) {
   const results = await
  fetch(`https://www.googleapis.com/books/v1/volumes?q=${value}&filter=paid-ebooks&print-ty
  pe=books&projection=lite`).then(res => res.json());
   if (!results.error) {
   setBooks(results.items);
   }
  }

 function addBook(title) {
  console.log(`The Book ${title} was clicked`);
  const newBooks = books.filter(book => {
    if (title === book.volumeInfo.title){
      return false;
    }
    return true;
  });
  setBooks(newBooks);
  }


   if (books.length === 0) {
       return 'No books found';
   }
 /*   return (
    <div>
     <BookList books = {books} addBook = {addBook}>
      
    </BookList>
    </div>
 ); */

 return (
   <BrowserRouter>
     <Route exact path = "/" render ={() => (
       <>
         <Header />
         <Search findBooks ={findBooks} keyword = {keyword} setKeyword = {setKeyword}/>
         <BookList books = {books} addBook = {addBook}/>
        
       </>

     )} />
      <Route path = "/bookcase"  render ={() => (
       <>
         <Header />
         <BookList books = {books} addBook = {addBook}/>
       </>
       )}/>
     <Route path = "/pages/About" component = {About}/>
     
    
       
       
      
       
   </BrowserRouter>
 )
}

export default App;

