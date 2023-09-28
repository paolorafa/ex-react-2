import { nanoid } from "nanoid";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import CommentArea from "../commentarea/CommentArea";
import SpinnerCard from "../spinner/SpinnerCard";
import TextArea from "../textarea/TextArea";
import { ModalBody } from "react-bootstrap";

const ModalForm = (props) => {
  
  const [commentData, setCommentData] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(null);
  const { asin, modal , setModal} = props;

  const handleClose = () => {
    setModal(!modal)
  };



  const TOKEN =
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGUzMTE5ZjFmMTc1YzAwMTRjNTU4YmIiLCJpYXQiOjE2OTU4MTY1NjIsImV4cCI6MTY5NzAyNjE2Mn0.PAxwSAgm9hAnn0ElqVuD2OBFr6WVrTj5SbosEDgzXb4";
  const URL = `https://striveschool-api.herokuapp.com/api/comments`;

  const getCommented = async () => {
    setLoaded(true);
    try {
      const rensponse = await fetch(`${URL}/${asin}`, {
        method: "GET",
        headers: {
          Authorization: `${TOKEN}`,
        },
      });
      if (rensponse && rensponse.ok) {
        const data = await rensponse.json();
        setCommentData(data);
        console.log(data);
        setLoaded(false);
      }
    } catch (err) {
      setError(err);
    }
  };

  const deleteComment = async (commentid) => {
    try {
      const rensponse = await fetch(`${URL}/${commentid}`, {
        method: "DELETE",

        headers: {
          Authorization: `${TOKEN}`,
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      if (rensponse && rensponse.ok) {
        await getCommented();
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect (() => {getCommented()}, [])

  

  return (
    <>

      <Modal show={modal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Commenti</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {loaded && <SpinnerCard />}

          {!loaded &&
            !error &&
            commentData &&
            commentData.map((comment) => {
              return (
                <CommentArea
                  key={nanoid()}
                  comment={comment.comment}
                  author={comment.author}
                  onDeleteComment={() => deleteComment(comment._id)}
                />
              );
            })}
        </Modal.Body>
        <ModalBody>
          <TextArea getCommented={()=>getCommented()} id={asin} />
        </ModalBody>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalForm;
