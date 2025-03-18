import { useState, useEffect } from 'react'
import './App.css'
import BookSearch from './components/BookSearch';
import Form from './components/Form'
// import { Carousel } from "@material-tailwind/react";
// import Carousel from './components/Carousel'
console.log(import.meta.env.VITE_GOOGLEBOOK_API_KEY)

function App() {
  const [books, setBooks] = useState([]);
  const apiKey = import.meta.env.VITE_GOOGLEBOOK_API_KEY
  const getBooks = async(searchTerm)=>{
    try{
      const res= await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&key=${apiKey}`);
      const data= await res.json();
      console.log(data);
      setBooks(data.items);
    }
    catch(e){
      console.error(e);
      setBooks([]);
    }
  };

  return (
   <div>
    <h1 className="heading">Welcome to Sree's BookHive</h1>
    
    <Form BookSearch = {getBooks}/>
    <BookSearch books={books}/>
    
  </div>
      
  )
}

export default App
