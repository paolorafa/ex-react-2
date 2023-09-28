import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import "./cardBook.css";
import ModalForm from "../modal/ModalForm";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import ModalBasket from "../modalBasket/ModalBasket";

const CardBook = ({ img, title, category, price, asin }) => {
  const [selected, setSelected] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [modalBasket, setModalBasket] = useState(false);
  
  const toggleModal = () => {
    setModalShow(!modalShow);
  };

  const toggleBook = () => {
    setModalBasket(!modalBasket);
  };

  const toogleSelected = (e) => {
    setSelected((prevstate) => !prevstate);
  };

  const borderStyle = selected ? "2px solid red" : "none";

  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          className="my-card"
          variant="top"
          src={img}
          style={{ border: borderStyle }}
          onClick={toogleSelected}
        />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{category}</Card.Text>
          <Card.Text>€ {price}</Card.Text>
          <div className="d-flex gap-2 justify-content-center">
            <Button className="button">
              <Link to={`/book/${asin}`}>Dettagli</Link>
            </Button>

            <Button className="button" onClick={toggleModal}>
              {!modalShow ? "Leggi i Commenti" : ""}
            </Button>

            <Button className="button" onClick={toggleBook}>
              {!modalBasket ? "Aggiungi al carrello " : ""}
            </Button>

            {modalBasket && (
              <ModalBasket
                asin={asin}
                modalBasket={modalBasket}
                setModal={setModalBasket}
              />
            )}

            {modalShow && (
              <ModalForm
                asin={asin}
                modal={modalShow}
                setModal={setModalShow}
              />
            )}
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default CardBook;
