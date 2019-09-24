import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import cuid from 'cuid';

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

const DropZone = ({ setImages }) => {
  const onDrop = useCallback(
    acceptedFiles => {
      acceptedFiles.forEach(file => {
        // Initialize FileReader browser API
        const reader = new FileReader();
        // onload callback gets called after the reader reads the file data
        reader.onload = function(e) {
          // add the image into the state. Since FileReader reading process is asynchronous, its better to get the latest snapshot state (i.e., prevState) and update it.
          setImages(prevState => [
            ...prevState,
            { id: cuid(), src: e.target.result }
          ]);
        };
        // Read the file as Data URL (since we accept only images)
        reader.readAsDataURL(file);
      });
    },
    [setImages]
  );

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

export default DropZone;
