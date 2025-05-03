import "./home.css";
import CommentsComponent from "../CommentsComponent/comments";
import React from "react";
import { useState } from "react";

const Home = () => {
  const submitAction = () => {
    const userDetails = {
      name: name,
      comment: comment,
    };
    if (name === undefined || comment === undefined) {
      alert("Enter your Details!");
    } else if (name === "" || comment === "") {
      alert("Enter your Details!");
    } else {
      setComments((prevComments) => [...prevComments, userDetails]);
      setName("");
      setComment("");
    }
  };
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const onEntryname = (e) => {
    setName(e.target.value);
  };
  const onEntrycomment = (e) => {
    setComment(e.target.value);
  };
  return (
    <div className="home">
      <div className="form">
        <input
          type="text"
          value={name}
          onChange={onEntryname}
          placeholder="Enter Comment Name"
          className="comment-name"
        ></input>
        <textarea
          type="text"
          value={comment}
          onChange={onEntrycomment}
          placeholder="Enter Description"
          className="comment-desc"
        ></textarea>

        <button className="submit" onClick={submitAction}>
          Submit
        </button>
      </div>
      <div className="comments">
        {comments.map((eachComment) => (
          <CommentsComponent comments={eachComment} />
        ))}
      </div>
    </div>
  );
};
export default Home;
