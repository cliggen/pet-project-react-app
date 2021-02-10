import React from 'react';
import './index.css';
import Post from './Post';

const PostsList = () => {
  const postList = [
    { date: '10.02.21 10:10', author: 'Karina', content: 'Пирожок с капустой буш?' },
    { date: '10.02.21 23:37', author: 'Alex', content: 'Худею' },
    { date: '10.02.21 23:37', author: 'Alex', content: 'Жирею' },
    { date: '10.02.21 23:37', author: 'Alex', content: 'Кодю' },

  ];
  return (
    <div className="posts_list">
      {postList.map(post => <Post date={post.date} author={post.author} content={post.content} />)}
    </div>
  );
};

export default PostsList;
