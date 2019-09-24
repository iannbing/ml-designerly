import React, { useState } from 'react';
import { Global, css } from '@emotion/core';

import DropZone from './components/DropZone';
import Images from './components/Images';

const globalStyle = css`
  * {
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }
`;

function App() {
  const [images, setImages] = useState([]);

  return (
    <div>
      <Global styles={globalStyle} />
      <DropZone setImages={setImages} />
      <Images data={images}></Images>
    </div>
  );
}

export default App;
