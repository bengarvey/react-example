import React from 'react';
import ReactDOM from 'react-dom';
import { XYFrame } from 'semiotic';
import { curveBasis } from 'd3-shape';

var deathsPerYear = [
  {year: 1876,deaths: 51},
  {year: 1877,deaths: 64},
  {year: 1878,deaths: 102},
  {year: 1879,deaths: 85},
  {year: 1880,deaths: 256},
  {year: 1881,deaths: 73},
  {year: 1882,deaths: 200},
  {year: 1883,deaths: 292},
  {year: 1884,deaths: 252},
  {year: 1885,deaths: 58},
  {year: 1886,deaths: 129},
  {year: 1887,deaths: 60},
  {year: 1888,deaths: 48},
  {year: 1889,deaths: 32},
  {year: 1890,deaths: 244},
  {year: 1891,deaths: 36},
  {year: 1892,deaths: 114},
  {year: 1893,deaths: 294},
  {year: 1894,deaths: 124},
  {year: 1895,deaths: 30},
  {year: 1896,deaths: 537},
  {year: 1897,deaths: 60},
  {year: 1898,deaths: 162},
  {year: 1899,deaths: 227},
  {year: 1900,deaths: 101},
  {year: 1901,deaths: 52},
  {year: 1902,deaths: 157},
  {year: 1903,deaths: 216},
  {year: 1904,deaths: 87},
  {year: 1905,deaths: 184},
  {year: 1906,deaths: 70},
  {year: 1907,deaths: 80},
  {year: 1908,deaths: 477},
  {year: 1909,deaths: 404},
  {year: 1910,deaths: 12},
  {year: 1911,deaths: 55},
  {year: 1912,deaths: 175},
  {year: 1913,deaths: 346},
  {year: 1914,deaths: 41},
  {year: 1915,deaths: 84},
  {year: 1916,deaths: 150},
  {year: 1917,deaths: 551},
  {year: 1918,deaths: 136},
  {year: 1919,deaths: 206},
  {year: 1920,deaths: 499},
  {year: 1921,deaths: 202},
  {year: 1922,deaths: 135},
  {year: 1923,deaths: 110},
  {year: 1924,deaths: 376},
  {year: 1925,deaths: 794},
  {year: 1926,deaths: 144},
  {year: 1927,deaths: 540},
  {year: 1928,deaths: 95},
  {year: 1929,deaths: 274},
  {year: 1930,deaths: 179},
  {year: 1931,deaths: 36},
  {year: 1932,deaths: 394},
  {year: 1933,deaths: 362},
  {year: 1934,deaths: 47},
  {year: 1935,deaths: 71},
  {year: 1936,deaths: 552},
  {year: 1937,deaths: 29},
  {year: 1938,deaths: 183},
  {year: 1939,deaths: 91},
  {year: 1940,deaths: 65},
  {year: 1941,deaths: 53},
  {year: 1942,deaths: 384},
  {year: 1943,deaths: 58},
  {year: 1944,deaths: 275},
  {year: 1945,deaths: 210},
  {year: 1946,deaths: 78},
  {year: 1947,deaths: 313},
  {year: 1948,deaths: 139},
  {year: 1949,deaths: 211},
  {year: 1950,deaths: 70},
  {year: 1951,deaths: 34},
  {year: 1952,deaths: 230},
  {year: 1953,deaths: 519},
  {year: 1954,deaths: 36},
  {year: 1955,deaths: 129},
  {year: 1956,deaths: 83},
  {year: 1957,deaths: 193},
  {year: 1958,deaths: 67},
  {year: 1959,deaths: 58},
  {year: 1960,deaths: 46},
  {year: 1961,deaths: 52},
  {year: 1962,deaths: 30},
  {year: 1963,deaths: 31},
  {year: 1964,deaths: 73},
  {year: 1965,deaths: 301},
  {year: 1966,deaths: 98},
  {year: 1967,deaths: 114},
  {year: 1968,deaths: 131},
  {year: 1969,deaths: 66},
  {year: 1970,deaths: 73},
  {year: 1971,deaths: 159},
  {year: 1972,deaths: 27},
  {year: 1973,deaths: 89},
  {year: 1974,deaths: 366},
  {year: 1975,deaths: 60},
  {year: 1976,deaths: 44},
  {year: 1977,deaths: 43},
  {year: 1978,deaths: 53},
  {year: 1979,deaths: 84},
  {year: 1980,deaths: 28},
  {year: 1981,deaths: 24},
  {year: 1982,deaths: 64},
  {year: 1983,deaths: 34},
  {year: 1984,deaths: 122},
  {year: 1985,deaths: 94},
  {year: 1986,deaths: 15},
  {year: 1987,deaths: 59},
  {year: 1988,deaths: 32},
  {year: 1989,deaths: 50},
  {year: 1990,deaths: 53},
  {year: 1991,deaths: 39},
  {year: 1992,deaths: 39},
  {year: 1993,deaths: 33},
  {year: 1994,deaths: 69},
  {year: 1995,deaths: 30},
  {year: 1996,deaths: 25},
  {year: 1997,deaths: 67},
  {year: 1998,deaths: 130},
  {year: 1999,deaths: 94},
  {year: 2000,deaths: 41},
  {year: 2001,deaths: 40},
  {year: 2002,deaths: 55},
  {year: 2003,deaths: 54},
  {year: 2004,deaths: 35},
  {year: 2005,deaths: 39},
  {year: 2006,deaths: 67},
  {year: 2007,deaths: 81},
  {year: 2008,deaths: 126},
  {year: 2009,deaths: 21},
  {year: 2010,deaths: 45},
  {year: 2011,deaths: 553},
  {year: 2012,deaths: 70},
  {year: 2013,deaths: 55},
  {year: 2014,deaths: 47},
  {year: 2015,deaths: 36},
  {year: 2016,deaths: 18},
  {year: 2017,deaths: 38}
];

function getFloating(items, window, key) {
  var floating = [];
  for(var i=window; i<items.length; i++) {
    var value = 0; 
    for(var j=window-1; j>=0; j--) {
      value += items[i-j][key];
    }
    floating.push({year: items[i].year, deaths:value/window});
  }
  return floating;
}

var floating = getFloating(deathsPerYear, 10, "deaths");
console.log([deathsPerYear, floating]);
var display = {
  data: [deathsPerYear, floating]
};

ReactDOM.render(
  <XYFrame
    size={[800,400]}
    lines={display}
    lineDataAccessor={d => d.data}
    xAccessor={d => d.year}
    yAccessor={d => d.deaths}
    lineType={{type:"line", interpolator: curveBasis}}
    lineStyle={() => ({ stroke: "#00a2ce", strokeWidth: "1px" })}
    customLineType={{ type: "dividedLine"}}
    axes={[
      { orient: 'left', tickFormat: d => d },
      { orient: 'bottom', tickFormat: d => d }
    ]}
  />,
  document.getElementById('container')
);
