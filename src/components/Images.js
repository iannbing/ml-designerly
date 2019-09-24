import React, { setState } from 'react';

/** @jsx jsx */
import { css, jsx } from '@emotion/core';

import Image from './Image';

const containerStyle = css`
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  list-style: none;
`;

const Images = ({ data, classifier }) => {
  return (
    <ul css={containerStyle}>
      {data.map(image => (
        <li key={image.id}>
          <Image id={image.id} src={image.src} classifier={classifier}></Image>
        </li>
      ))}
    </ul>
  );
};

export default Images;
