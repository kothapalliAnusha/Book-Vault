import React, { useEffect, useState } from 'react'
import BookCarts from '../components/BookCarts';

function OtherBooks() {
    const [books, setBooks]=useState([]);

    useEffect(()=>{
        // fetching api
        fetch("http://localhost:5000/all-books").then(res=>res.json()).then(data=>setBooks(data.slice(5,20)))
    },[])
  return (
    <div>
        {/* //to make bookcarts as reusable components */}
        <BookCarts books={books} headline="Other Books"/>
    </div>
  )
}

export default OtherBooks