import React from 'react';
import { Global, css } from '@emotion/core';

import ImagePlaceHolder from './components/ImagePlaceHolder';

const globalStyle = css`
  * {
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }
`;

function App() {
  return (
    <div>
      <Global styles={globalStyle} />
      <ImagePlaceHolder />
    </div>
  );
}

export default App;
