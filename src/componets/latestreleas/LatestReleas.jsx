import React, { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CardBook from "../card/CardBook";
import { nanoid } from "nanoid";

import { PostProvider } from "../../contex/Boocontex";

const LatestReleas = () => {
  const { book, loading, error } = useContext(PostProvider);

  return (
    <>
      <Container>
        <Row>
          <Col className="d-flex flex-wrap gap-2 justify-content-center ">
            {error && <h1>Errore nel caricamento</h1>}
            {!error &&
              !loading &&
              book &&
              book.map((library) => {
                return (
                  <CardBook
                    key={nanoid()}
                    img={library.img}
                    title={library.title}
                    category={library.category}
                    price={library.price}
                    asin={library.asin}
                  />
                );
              })}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default LatestReleas;
