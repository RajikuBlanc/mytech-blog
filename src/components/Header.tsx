import { center } from '@/styles/index.styles';
import { css } from '@emotion/react';
import { FC } from 'react';

const Header: FC = () => {
  const centerContainer = css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 5rem;
    margin-bottom: 5rem;
  `;
  return (
    <header css={centerContainer}>
      <div
        css={css`
          text-align: center;
        `}
      >
        <h1
          css={css`
            font-size: 3rem;
            letter-spacing: 1rem;
          `}
        >
          ４畳半からお届け
        </h1>
        <h2
          css={css`
            font-size: 1rem;
            letter-spacing: 0.5rem;
          `}
        >
          By Lanan
        </h2>
      </div>
    </header>
  );
};

export default Header;
