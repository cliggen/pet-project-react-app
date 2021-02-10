import React from 'react';
import './index.css';

const Post = (props) => (
  <div className="post">
    <div className="post_date">{props.date}</div>
    <div className="post_author">{props.author}</div>
    <div className="post_content">{props.content}</div>
  </div>
);

export default Post;
