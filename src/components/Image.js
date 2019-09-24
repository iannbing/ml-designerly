import React, { Component } from 'react';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';

const classifyImg = (classifier, image) =>
  classifier.predict(image, 5, (err, results) => {
    if (err) console.error('Unable to make a prediction.');
    return results;
  });

const imageStyle = css`
  width: 200px;
  box-shadow: 0px 0px 13px -1px rgba(0, 0, 0, 0.4);
  margin: 16px;
  border-radius: 8px;
`;

const predictionStyle = css`
  display: flex;
  justify-content: space-between;
  padding: 10px;
`;

export default class Image extends Component {
  state = { predictions: [] };

  constructor(props) {
    super(props);
    this.imgRef = React.createRef();
  }

  componentDidMount() {
    this.generatePredictions();
  }

  generatePredictions = async () => {
    const { classifier } = this.props;
    const predictions = await classifyImg(classifier, this.imgRef.current);
    this.setState({ predictions });
  };

  render() {
    const { id, src } = this.props;
    const { predictions } = this.state;
    return (
      <div>
        <img
          key={id}
          alt={`img - ${id}`}
          src={src}
          css={imageStyle}
          ref={this.imgRef}
        />
        {predictions.map((pred, i) => {
          const { label, confidence } = pred;
          const roundedConfidence = Math.floor(confidence * 10000) / 100 + '%';
          return (
            <div key={i} css={predictionStyle}>
              <span>{label}</span>
              <span>{roundedConfidence}</span>
            </div>
          );
        })}
      </div>
    );
  }
}
