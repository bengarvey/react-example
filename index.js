import React from 'react';
import ReactDOM from 'react-dom';
import { XYFrame, Mark } from 'semiotic';
import { curveBasis } from 'd3-shape';
import { scaleTime } from 'd3-scale';
var libs = [
  {name: "Semiotic",    speed: 0.65, flex: 0.6, logo: "img/semiotic.png"},
  {name: "Vanilla JS",  speed: 0.10, flex: 0.90, logo: "img/js.png"},
  {name: "D3",          speed: 0.20, flex: 0.80, logo: "img/d3.png"},
  {name: "chart.js",    speed: 0.85, flex: 0.30, logo: "img/chartjs.svg"},
  {name: "Highcharts",  speed: 0.75, flex: 0.40, logo: "img/highcharts.png"},
  {name: "Plotly",      speed: 0.70, flex: 0.50, logo: "img/plotly.png"},
  {name: "Excel",       speed: 0.7, flex: 0.10, logo: "img/excel.png"},
  {name: "Google",      speed: 0.8, flex: 0.20, logo: "img/google.png"}
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

var modified = {
  lib: []
};

libs.forEach( function(d) {
  modified.lib.push(
    {x: d.flex, y:d.speed, name: d.name, logo: d.logo, cy:-20});
 });

var display =
  {data: modified.lib, color: colors.lib, renderMode: "normal"};

var sharedProps = {
  size: [700, 700],
  xAccessor: "x",
  yAccessor: "y",
  hoverAnnotation: true,
  margin:{ left: 10, bottom: 30, right: 10, top: 10 }
};

ReactDOM.render(
  <XYFrame
    { ...sharedProps }
    yExtent={[0,1]}
    xExtent={[0,1]}
    points={display.data}
    pointStyle={ d => ({fill: "#666", r: '5px'})}
    tooltipContent={d => d.name}
    customPointMark={ ({d}) => ( <Mark markType="image" transform="translate(-20,-20)" height="40px" href={d.logo}/> ) }
    axes={[
      { orient: 'bottom', ticks: 5, tickFormat: d => d, label: "Flexibility"},
      { orient: 'left', ticks: 5, tickFormat: d => d, label: "Speed"}
    ]}
    margin={{ left: 70, bottom: 60, right: 10, top: 40 }}
  />,
  document.getElementById('libraries')
);

