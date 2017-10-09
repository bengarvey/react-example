import React from 'react';
import ReactDOM from 'react-dom';
import { XYFrame, Legend } from 'semiotic';
import { curveBasis } from 'd3-shape';
import { scaleTime } from 'd3-scale';

const colors = {
  deaths: '#393e41',
}

var modified = {
  deaths: [],
};

auto.forEach( function(d) {
  modified.deaths.push(
    {y: d.Deaths, x: yearToDate(d.Year), type:'death'});
});

function yearToDate(year) {
  return new Date(`${year}-01-01 00:00:00`);
}

var deathDisplay = [
  {data: modified.deaths, color: colors.deaths, renderMode: "normal"}
];

var sharedProps = {
  size: [1000,400],
  xAccessor: "x",
  yAccessor: "y",
  lineDataAccessor: "data",
  hoverAnnotation: true,
  margin:{ left: 10, bottom: 30, right: 10, top: 10 }
};

ReactDOM.render(
  <XYFrame
    { ...sharedProps }
    lines={deathDisplay}
    defined={d => d.y !== null}
    lineDataAccessor="data"
    lineType={{type:"line", interpolator: curveBasis}}
    lineRenderMode={d => d.renderMode}
    lineStyle={d => ({stroke: d.color, strokeWidth: "2px" })}
    customLineType={{ type: "dividedLine"}}
    axes={[
      { orient: 'bottom', ticks: 8, tickFormat: d => new Date(d).getFullYear() },
      { orient: 'left', ticks: 10, tickFormat: d => d.toLocaleString()}
    ]}
    margin={{ left: 60, bottom: 30, right: 100, top: 40 }}
  />,
  document.getElementById('deathPopulation')
);

