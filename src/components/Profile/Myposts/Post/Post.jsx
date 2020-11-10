import cl from "./Post.module.css";
import React from "react";

const Post = (props) => {
  console.log(props.message);
  // debugger;
  return (
    <div className={cl.item}>
      <img src="https://static3.depositphotos.com/1004996/226/i/450/depositphotos_2260019-stock-photo-glowing-font-shiny-letter-s.jpg" />
      {props.message} <span className={cl.like}>{props.vlike} like(s)</span>
      <input value="" />
    </div>
  );
};

export default Post;
