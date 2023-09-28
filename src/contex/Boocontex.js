import React, { useEffect, useState, createContext } from "react";

export const PostProvider = createContext();

const PostContext = ({children}) => {
  const [libraryOriginal, setlibraryOriginal] = useState([]);
  const [book, setBook] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getBooksFromApi = async () => {
    setLoading(true);
    try {
      const response = await fetch(`https://epibooks.onrender.com/`);
      const data = await response.json();
      
      setBook(data);
      
      setlibraryOriginal(data);
      setLoading(false);
    } catch (err) {
      setError(err);
    }
  }


  useEffect (() => {
    getBooksFromApi()}, [])


  return (
    <PostProvider.Provider value= {{book, loading, error, libraryOriginal, setBook, setlibraryOriginal}}>
        {children}
    </PostProvider.Provider>
  )
};

export default PostContext;
