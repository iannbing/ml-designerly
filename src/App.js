import React, { useState, useEffect } from 'react';
import { Global, css } from '@emotion/core';
import * as ml5 from 'ml5';

import DropZone from './components/DropZone';
import Images from './components/Images';

const globalStyle = css`
  * {
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }
`;

// Initialize the Image Classifier method with MobileNet

const initClassifier = callback =>
  ml5.imageClassifier('MobileNet', () => callback && callback());

let classifier;

function App() {
  const [images, setImages] = useState([]);
  const [loaded, setLoaded] = useState(false);
  classifier = classifier || initClassifier(() => setLoaded(true));

  return (
    <div>
      <Global styles={globalStyle} />
      {!loaded && <h1>Loading ml5 model...</h1>}
      {loaded && <DropZone setImages={setImages} />}
      {loaded && <Images data={images} classifier={classifier}></Images>}
    </div>
  );
}

export default App;
