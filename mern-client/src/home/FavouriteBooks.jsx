import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';  // Import Link component
import BookCarts from '../components/BookCarts';


// BEST-SELLER-BOOKS OR FAVOURITE-BOOKS
const FavouriteBooks = () => {
    const [books, setBooks]=useState([]);

    useEffect(()=>{
        // fetching api
        fetch("http://localhost:5000/all-books").then(res=>res.json()).then(data=>setBooks(data.slice(0,8)))
    },[])
  return (
    <div>
        {/* //to make bookcarts as reusable components */}
        <BookCarts books={books} headline="Best Seller Book"/>
    </div>
  )
}

export default FavouriteBooks