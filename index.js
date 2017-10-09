import React from 'react';
import ReactDOM from 'react-dom';
import { XYFrame, Legend } from 'semiotic';
import { curveBasis } from 'd3-shape';
import { scaleTime } from 'd3-scale';

const colors = {
  deaths: '#393e41',
  pop: '#da4167',
}

var modified = {
  deaths: [],
  pop: [],
};


auto.forEach( function(d) {
  modified.deaths.push(
    {y: d.Deaths, x: yearToDate(d.Year), type:'death'});
  modified.pop.push(
    {y: d.Population, x: yearToDate(d.Year), type: 'pop'});
});

function yearToDate(year) {
  return new Date(`${year}-01-01 00:00:00`);
}

var deathDisplay = [
  {data: modified.deaths, color: colors.deaths, renderMode: "normal"}
];

var popDisplay = [
  {data: modified.pop, color: colors.pop}
];

const popAnnotations = [
  { type: 'x', x: yearToDate(1968),
    note: { label: "Seat belts required", align: "middle", wrap: 50},
    color: colors.annotation, dy: -10, dx: 0, connector: { end: "none" } },
  { type: "x", x: yearToDate(1984),
    note: { label: "NY seat belt law", align: "middle", wrap: 100},
    color: colors.annotation, dy: -5, dx: 0, connector: { end: "none" } },
  { type: "x", x: yearToDate(1994),
    note: { label: "Seat belt laws: 90% of states", align: "middle", wrap: 500},
    color: colors.annotation, dy: -20, dx: 0, connector: { end: "none" } },
  { type: "x", x: yearToDate(1998),
    note: { label: "Airbags required", align: "middle", wrap: 500},
    color: colors.annotation, dy: -5, dx: 35, connector: { end: "none" } },
  { type: "x", x: new Date("1945-08-15"),
    note: { label: "WW2 Ends", align: "middle", wrap: 500},
    color: colors.annotation, dy: -20, dx: 0, connector: { end: "none" } },
  { type: "x", x: new Date("1941-12-07"),
    note: { label: "WW2 Begins", align: "right", wrap: 500},
    color: colors.annotation, dy: -5, dx: 0, disable:["connector"] }
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
ReactDOM.render(
  <XYFrame
    { ...sharedProps }
    lines={popDisplay}
    defined={d => d.y !== null}
    lineDataAccessor="data"
    xAccessor="x"
    yAccessor="y"
    hoverAnnotation={true}
    lineRenderMode={"normal"}
    lineType={{type:"line", interpolator: curveBasis}}
    lineStyle={d => ({stroke: d.color, strokeWidth: "2px" })}
    customLineType={{ type: "dividedLine"}}
    axes={[
      { orient: 'bottom', ticks: 8, tickFormat: d => '' },
      { orient: 'right', ticks: 10, tickFormat: d => d.toLocaleString()}
    ]}
    margin={{ left: 60, bottom: 30, right: 100, top: 40 }}
    annotations={popAnnotations}
  />,
  document.getElementById('population')
);
