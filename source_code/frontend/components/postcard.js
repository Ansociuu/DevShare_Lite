// frontend/components/PostCard.js
import React from 'react';

const PostCard = ({ post }) => {
  return (
    <div>
      <h3>{post.title}</h3>
      <p>{post.excerpt}</p>
    </div>
  );
};

export default PostCard;
