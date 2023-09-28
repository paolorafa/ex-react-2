import Button from "react-bootstrap/Button";
import React, { useState } from "react";
import Form from "react-bootstrap/Form";

const TextArea = (props) => {
  const { getCommented, id } = props;
  const [postCommentData, setPostCommentData] = useState([]);
  const [input, setInput] = useState({
    author: "",
    comment: "",
    rate: "",
    elementId: `${id}`,
  });

  const TOKEN =
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGUzMTE5ZjFmMTc1YzAwMTRjNTU4YmIiLCJpYXQiOjE2OTU4MTY1NjIsImV4cCI6MTY5NzAyNjE2Mn0.PAxwSAgm9hAnn0ElqVuD2OBFr6WVrTj5SbosEDgzXb4";
  const URL = `https://striveschool-api.herokuapp.com/api/comments`;

  const handleTextPostComment = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };

  const postComment = async (e) => {
    e.preventDefault();
    try {
      const rensponse = await fetch(`${URL}`, {
        method: "POST",
        body: JSON.stringify(input),
        headers: {
          Authorization: `${TOKEN}`,
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      if (rensponse && rensponse.ok) {
        const data = await rensponse.json();
        console.log("commento inviato");
        setPostCommentData(data);
        await getCommented();
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Form>
        <Form.Label>
          {" "}
          <h3>Lascia un commento</h3>{" "}
        </Form.Label>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>
            <span>Inserisci la tua mail</span>
          </Form.Label>
          <Form.Control
            type="email"
            placeholder="name@example.com"
            name="author"
            onChange={handleTextPostComment}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>
            <span>Scrivi il commento</span>
          </Form.Label>

          <Form.Control
            as="textarea"
            rows={3}
            name="comment"
            type="txt"
            onChange={handleTextPostComment}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>
            <span>Voto da 1 a 5</span>
          </Form.Label>

          <Form.Control
            rows={3}
            name="rate"
            type="string"
            placeholder="valutation"
            onChange={handleTextPostComment}
          />
        </Form.Group>

        <Button onClick={postComment}>Invia commento</Button>
      </Form>
    </>
  );
};

export default TextArea;
