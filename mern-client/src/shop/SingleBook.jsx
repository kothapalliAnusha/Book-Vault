import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleBook = () => {
    const { _id, bookTitle, authorName, imageURL, category, bookDescription, bookPdfURL } = useLoaderData();

    return (
        <div className='mt-28 px-4 lg:px-24 space-x-1 space-y-1'>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 items-center mr-150">
                <div className='space-y-7'>
                <div className="flex justify-center">
                    <img src={imageURL} alt={bookTitle} className='h-96 object-contain' />
                </div>
                <div className="flex justify-center">
                        <a href={bookPdfURL} target="_blank" rel="noopener noreferrer" className="bg-green-500 hover:bg-black-700 text-white py-2 px-4 rounded inline-block text-center">
                            Read Book
                        </a>
                    </div>
                    </div>
                <div className='mr-50'>
                    <h2 className="text-5xl lg:text-4xl font-bold mb-5">{bookTitle}</h2>
                    <p className="text-lg lg:text-xl text-gray-600 mb-5"><strong>Author:</strong> {authorName}</p>
                    <p className="text-lg lg:text-xl text-gray-600 mb-5"><strong>Category:</strong> {category}</p>
                    <p className="text-base lg:text-lg mb-5">{bookDescription}</p>
                    
                </div>
            </div>
        </div>
    );
}

export default SingleBook;
