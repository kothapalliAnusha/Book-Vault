import React, { useState } from 'react'
import { Button, Checkbox, Label, Select, TextInput, Textarea } from "flowbite-react";


const UploadBooks = () => {
  const bookCategories=[
    "Fiction",
    "Non-Fiction",
    "Romance",
    "Science",
    "Mystery",
    "Thriller",
    "Horror",
    "Programming",
    "History",
    "Science Fiction",
    "Fantasy",
    "Biography",
    "Autobiography",
    "Self-help",
    "Memoir",
    "Business",
    "Children Books",
    "Travel",
    "Religion",
    "Art and Design"
  ]

  const [selectedBookCategory, setSelectedBookCategory]=useState(bookCategories[0]);


  const handleChangeSelectedValues=(event)=>{
    console.log(event.target.value);
    setSelectedBookCategory(event.target.value)
  }

  // Handle book submission
  const handleBookSubmit=(event)=>{
    event.preventDefault();
    const form=event.target;

    const bookTitle=form.bookTitle.value;
    const authorName=form.authorName.value;
    const imageURL=form.imageURL.value;
    const category=form.categoryName.value;
    const bookDescription=form.bookDescription.value;
    const bookPdfURL=form.bookPdfURL.value;

    // defining the object
    const bookObj={
      bookTitle, authorName, imageURL, category, bookDescription, bookPdfURL
    }
    console.log(bookObj);

    //send data to db
    fetch('http://localhost:5000/upload-book', {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(bookObj)
    })
    .then(res => res.json())
    .then(data => {
      alert("Book uploaded successfully😃");
      form.reset();
    })
    .catch(error => {
      console.error('Error uploading book:', error);
      alert('Failed to upload book. Please try again later.');
    });
    
    
  }

  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Upload a Book</h2>

      <form onSubmit={handleBookSubmit} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
        {/* First Row */}
        <div className='flex gap-8'>
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="bookTitle" value="bookTitle" />
            </div>
            <TextInput id="bookTitle" name="bookTitle" type="text" placeholder="Input: Book-Title" required />
          </div>

          {/* Author Name */}
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="authorName" value="Author Name" />
            </div>
            <TextInput id="authorName" name="authorName" type="text" placeholder="Input: Author-Name" required />
          </div>
        </div>

        {/* Second Row */}
        <div className='flex gap-8'>
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="imageURL" value="Book Image URL" />
            </div>
            <TextInput id="imageURL" name="imageURL" type="text" placeholder="Input: Book-Image-url" required />
          </div>

          {/* Category */}
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="inputState" value="Book Category" />
            </div>
            <Select id='inputState' name='categoryName' className='w-full rounded' value={selectedBookCategory} onChange={handleChangeSelectedValues}>
              {
                bookCategories.map((option) => <option key={option} value={option}>{option}</option>)
              }
            </Select> 
          </div>
        </div>

      {/* Book Description */}
      <div>
        <div className="mb-2 block">
          <Label htmlFor="bookDescription" value="Book -Description" />
        </div>
        <Textarea id="bookDescription"  name="bookDescription" type="text" placeholder="Write Book Description🖊️..." required rows={6} className='w-full' />
        
      </div>

      {/* book pdf link */}
    

      
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="bookPdfURL" value="Book-Pdf-URL" />
            </div>
            <TextInput id="bookPdfURL" name="bookTitle" type="text" placeholder="Input: Book Pdf URL" required />
          </div>

          <button type="submit" className='mt-5 bg-green-100'>Upload-Book</button>

          

      </form>
    </div>
  )
}

export default UploadBooks
