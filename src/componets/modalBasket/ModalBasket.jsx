import { useEffect, useState } from "react";
import SpinnerCard from "../spinner/SpinnerCard";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import TableBasket from "../table/TableBasket";
import { nanoid } from "nanoid";

function ModalBasket(props) {
  const { asin,  modalBasket, setModal  } = props;

  const handleClose = () => {
    setModal(!modalBasket);
  };

 
  const [error, setError] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const [cart, setCart] = useState([]); // Stato per tenere traccia dei libri nel carrello

  // Funzione per aggiungere un libro al carrello
  const addCart = (product) => {
    setCart([...cart, product]);
  };
  console.log(cart);



  const getBasket = async () => {
    setLoaded(true);

    try {
      const response = await fetch(`https://epibooks.onrender.com/${asin}`);
      const data = await response.json();

     
     addCart(data);

      const total = data.reduce((acc, book) => acc + book.price, 0);
      setTotalPrice(total);
      setCart(data);
      setLoaded(false);
    } catch (err) {
      setError(err);
    }
  };
 
  useEffect(() => {
    getBasket();
  }, []);

  return (
    <>
      <Modal show={modalBasket} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {loaded && <SpinnerCard />}
          {!loaded &&
            !error &&
            cart &&
            cart.map((element, index) => {
              return (
                <TableBasket
                  key={index}
                  title={element.title}
                  price={element.price}
                />
              );
            })}
          <div>Total Price: ${totalPrice}</div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalBasket;
