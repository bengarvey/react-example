import React from 'react';
import ReactDOM from 'react-dom';
import { XYFrame, Mark } from 'semiotic';
import { curveBasis } from 'd3-shape';
import { scaleTime } from 'd3-scale';
var libs = [
  {name: "Semiotic",    speed: 0.65, flex: 0.65, logo: "img/semiotic.png"},
  {name: "Vanilla JS",  speed: 0.10, flex: 0.90, logo: "img/js.png"},
  {name: "D3",          speed: 0.20, flex: 0.80, logo: "img/d3.png"},
  {name: "chart.js",    speed: 0.75, flex: 0.40, logo: "img/chartjs.svg"},
  {name: "Highcharts",  speed: 0.85, flex: 0.30, logo: "img/highcharts.png"},
  {name: "Plotly",      speed: 0.50, flex: 0.50, logo: "img/plotly.png"}
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
    {x: d.flex, y:d.speed, name: d.name, logo: d.logo});
 });

var display =
  {data: modified.lib, color: colors.lib, renderMode: "normal"};

var sharedProps = {
  size: [600,600],
  xAccessor: "x",
  yAccessor: "y",
  hoverAnnotation: true,
  margin:{ left: 10, bottom: 30, right: 10, top: 10 }
};

console.log(JSON.stringify(display));

var markProps = {
  href:'img/js.png'
};

ReactDOM.render(
  <XYFrame
    { ...sharedProps }
    yExtent={[0,1]}
    xExtent={[0,1]}
    points={display.data}
    pointStyle={ d => ({fill: "#666", r: '5px'})}
    tooltipContent={d => d.name}
    customPointMark={ ({d}) => ( <Mark markType="image" height="40px" href={d.logo}/> ) }
    axes={[
      { orient: 'bottom', ticks: 5, tickFormat: d => d},
      { orient: 'left', ticks: 5, tickFormat: d => d}
    ]}
    margin={{ left: 50, bottom: 30, right: 10, top: 40 }}
  />,
  document.getElementById('libraries')
);

