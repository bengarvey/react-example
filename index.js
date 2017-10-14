import React from 'react';
import ReactDOM from 'react-dom';
import { XYFrame, Legend } from 'semiotic';
import { curveBasis } from 'd3-shape';

var modified = {
  miles: [],
};

console.log(auto);

auto.forEach( function(d) {
  modified.miles.push(
    {y: d['Vehicle miles travelled (billions)'], x: yearToDate(d.Year), type:'death'});
});

function yearToDate(year) {
  return new Date(`${year}-01-01 00:00:00`);
}

var deathDisplay = [
  {data: modified.miles}
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
    lineStyle={d => ({stroke: '#15b097', strokeWidth: "2px" })}
    margin={{ left: 60, bottom: 30, right: 100, top: 40 }}
  />,
  document.getElementById('deathPopulation')
);

