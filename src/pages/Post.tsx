import { css } from '@emotion/react';
import Link from 'next/link';
import React, { FC } from 'react';

type Props = {
  href: string;
};

const Post: FC<Props> = ({ href }) => {
  const postStyle = css`
    width: 100%;
    color: #000;
    padding: 1rem 2rem 1rem 2rem;
    border: 2px solid #000;
    border-radius: 20px;
    transition: all 0.3s;
    &:hover {
      border: 2px solid pink;
      color: pink;
    }
  `;
  return (
    <Link href={href}>
      <li css={postStyle}>
        {/* postTitle */}
        <h2>PostTitle1</h2>
      </li>
    </Link>
  );
};

export default Post;
