import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../fetch/fetcHook";
import CardBook from "../componets/card/CardBook";
import { Link } from "react-router-dom";
import Navigation from "../componets/navbar/Navigation";
import SpinnerCard from "../componets/spinner/SpinnerCard";
import { Button } from "react-bootstrap";

const Bookdetails = () => {
  const { bookId } = useParams();

  const { isLoading, dataBook } = useFetch(
    `https://epibooks.onrender.com/${bookId}`
  );
  console.log(dataBook);

  return (
    <>
      <div>
        <Navigation />
        <div style={{ backgroundColor: "#d2c9ff" }}>
          <div class="container-fluid p-3 gap-2 h-100 d-flex flex-column justify-content-center align-items-center">
            <div class="row  h-100">
              {isLoading && <SpinnerCard/>}
              {!isLoading && dataBook && (
                <CardBook
                  img={dataBook[0].img}
                  title={dataBook[0].title}
                  category={dataBook[0].category}
                  price={dataBook[0].price}
                  asin={dataBook[0].asin}
                />
              )}</div>
              
              <Button className="button">
              <Link to="/">Torna alla pagina principale</Link>
            </Button>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Bookdetails;
