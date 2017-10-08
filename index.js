import React from 'react';
import ReactDOM from 'react-dom';
import { XYFrame, Mark } from 'semiotic';
import { curveBasis } from 'd3-shape';
import { scaleTime } from 'd3-scale';
var libs = [
  {name: "Semiotic",    speed: 0.75, flex: 0.75},
  {name: "Vanilla JS",  speed: 0.0, flex: 1},
  {name: "D3",          speed: 0.1, flex: 0.9},
  {name: "chart.js",    speed: 0.75, flex: 0.4},
  {name: "Highcharts",  speed: 0.85, flex: 0.3},
  {name: "Plotly",      speed: 0.5, flex: 0.5}
];

const colors = {
  lib: '#393e41',
  pop: '#da4167',
  miles: '#15b097',
  alc: '#fcde9c',
  nonAlc: '#f4d35e',
  annotationInfo: "#009ddc",
  annotation: "#666666",
  gasAdjusted: '#d86641'
}
/*
const deathLegend = [
  {
    type: "line",
    styleFn: d => ({ stroke: d.color }),
    items: [
      { label: "US Auto Fatalities", color: colors.deaths },
      { label: "US Population", color: colors.pop }
    ]
  }
];

var display = {
  data: auto
};
*/

var modified = {
  lib: []
};

libs.forEach( function(d) {
  modified.lib.push(
    {x: d.flex, y:d.speed, name: d.name});
 });

var display = [
  {data: modified.lib, color: colors.lib, renderMode: "normal"}
];

var sharedProps = {
  size: [600,600],
  xAccessor: "x",
  yAccessor: "y",
  hoverAnnotation: true,
  margin:{ left: 10, bottom: 30, right: 10, top: 10 }
};

console.log(display[0].data);

ReactDOM.render(
  <XYFrame
    { ...sharedProps }
    //points={[{price: 1.25, size: 15}, {price: 2.25, size: 12}]}
    points={display[0].data}
    defined={d => d.price !== null}
    pointDataAccessor={"data"}
    customPointMark={ d => (<Mark markType="image" width="40px" href="img/magento.svg" style={{fill:"red"}} />) }
    pointStyle={d => ({fill: '#333'})}
    axes={[
      { orient: 'bottom', ticks: 5, tickFormat: d => d},
      { orient: 'left', ticks: 5, tickFormat: d => d}
    ]}
    margin={{ left: 50, bottom: 30, right: 10, top: 40 }}
  />,
  document.getElementById('libraries')
);

