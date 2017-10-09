import React from 'react';
import ReactDOM from 'react-dom';
import { XYFrame, Legend } from 'semiotic';
import { curveBasis } from 'd3-shape';

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
  {data: modified.deaths}
];

ReactDOM.render(
  <XYFrame
    size={[1000,400]}
    xAccessor="x"
    yAccessor="y"
    lineDataAccessor="data"
    hoverAnnotation={true}
    lines={deathDisplay}
    defined={d => d.y !== null}
    lineDataAccessor="data"
    lineType={{type:"line", interpolator: curveBasis}}
    lineRenderMode={d => d.renderMode}
    lineStyle={d => ({stroke: '#393e41', strokeWidth: "2px" })}
    margin={{ left: 60, bottom: 30, right: 100, top: 40 }}
  />,
  document.getElementById('deathPopulation')
);

