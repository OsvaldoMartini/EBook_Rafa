import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  overflow: hidden;
  width: 100%;
  height: 100%;
  svg {
    width: 100%;
    polygon {
      fill: #f2f2f2;
    }
    polyline {
      stroke: #777;
      stroke-width: 2.5;
      fill: none;
    }
  }
`;

// Price Chart SVG
export const PriceChart = props => {
  return (
    <Wrapper>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 287 100">
        <polygon
          points={`${props.points.map(
            p => ' ' + p[0] + ',' + p[1],
          )} 287,100 0,100`}
        />
        <polyline
          points={`${props.points.map(p => ' ' + p[0] + ',' + p[1])}`}
        />
      </svg>
    </Wrapper>
  );
};

export default PriceChart;
