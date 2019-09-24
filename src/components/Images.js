import React from 'react';

/** @jsx jsx */
import { css, jsx } from '@emotion/core';

const containerStyle = css`
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
`;

const imageStyle = css`
  width: 200px;
  box-shadow: 0px 0px 13px -1px rgba(0, 0, 0, 0.4);
  margin: 16px;
  border-radius: 8px;
`;

const Images = ({ data }) => {
  return (
    <ul css={containerStyle}>
      {data.map(image => (
        <img
          key={image.id}
          alt={`img - ${image.id}`}
          src={image.src}
          css={imageStyle}
        />
      ))}
    </ul>
  );
};

export default Images;
