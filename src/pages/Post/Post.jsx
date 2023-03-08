import React from 'react';
import { useParams } from 'react-router-dom';
import { useFetchDoc } from '../../hooks/useFetchDoc';
import styles from './Post.module.css';

const Post = () => {
  const { id } = useParams();
  const { document: post } = useFetchDoc('posts', id);

  return (
    <div>
      {post && (
        <>
          <h1>{post.title}</h1>
        </>
      )}
    </div>
  );
};

export default Post;
