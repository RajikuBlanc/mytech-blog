import Post from '@/pages/Post';
import { center } from '@/styles/index.styles';
import { postsStyle } from '@/styles/posts.style';
import { FC } from 'react';

const Posts: FC = () => {
  return (
    <div css={center}>
      <ul css={postsStyle}>
        <Post href='#' />
        <Post href='#' />
        <Post href='#' />
        <Post href='#' />
      </ul>
    </div>
  );
};

export default Posts;
