import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

/** @jsx jsx */
import { css, jsx } from '@emotion/core';

const style = css`
  display: flex;
  width: 80%;
  height: 400px;
  margin: 100px auto 0 auto;
  background: lightgray;
  border: 4px dotted darkgray;
  justify-content: center;
  align-items: center;
`;

const ImagePlaceHolder = () => {
  const onDrop = useCallback(acceptedFiles => {
    // Do something with the files
    console.log(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  return (
    <div {...getRootProps()} css={style}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the files here ...</p>
      ) : (
        <p>Drag 'n' drop some files here, or click to select files</p>
      )}
    </div>
  );
};

export default ImagePlaceHolder;
