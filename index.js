import React from 'react';
import ReactDOM from 'react-dom';
import { XYFrame } from 'semiotic';

function getLine(total) {
  var prevX = 0;
  var prevY = Math.random() * 100;
  var data = [];
  for(var i=0; i<total; i++) {
    var datum = [prevX, prevY];
    prevY += 15 - (Math.random()*30);
    prevX += 1;
    data.push(datum);
  };
  var display = {
    data: data
  };
  return display;
}

function getLines(total) {
  var lines = [];
  for(var i=0; i<total; i++) {
    lines.push(getLine(1000));
  }
  return lines;
}

ReactDOM.render(
  <XYFrame
    size={[800,100]}
    lines={getLines(3)}
    lineDataAccessor={d => d.data}
    xAccessor={d => d[0]}
    yAccessor={d => d[1]}
    lineStyle={() => ({ stroke: "#00a2ce", strokeWidth: "1px" })}
    customLineType={{ type: "dividedLine"}}
    lineRenderMode={() => "sketchy"}
  />,
  document.getElementById('container')
);
