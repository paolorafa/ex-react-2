import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { PostProvider } from "../../contex/Boocontex";
import { Search } from 'react-bootstrap-icons';


export default function FormNavbar() {
  const { setBook,  libraryOriginal } = useContext(PostProvider);

  const [input, setInput] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;


    setInput({
      ...input,
      [name]: value,
    });
  };

  const serchInput = (e) => {
    e.preventDefault();

    const searchResault = libraryOriginal.filter((product) =>
      product.title.toLowerCase().includes(input.searchbook.toLowerCase())
    );

    setBook(searchResault);

    
    
  };
  return (
    <>
      <div >
        <Form onSubmit={serchInput} className="d-flex">


          <Form.Control
            name="searchbook"
            type="text"
            placeholder="search book"
            onChange={handleInputChange}
          />

          <Button variant="primary" type="search">
            <Search />
          </Button>
        </Form>
      </div>

    </>


  )
}



