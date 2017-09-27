import React from 'react';
import ReactDOM from 'react-dom';
import { XYFrame } from 'semiotic';

var auto = [
   {
     "Alcohol related deaths": null,
     "Year": 1899,
     "Deaths": 26,
     "Vehicle miles travelled (billions)": null,
     "Fatalities per 100 million VMT": null,
     "Population": 74889168,
     "Fatalities per 100,000 population": null,
     "Change (in percent)": null
   },
   {
     "Alcohol related deaths": null,
     "Year": 1900,
     "Deaths": 36,
     "Vehicle miles travelled (billions)": null,
     "Fatalities per 100 million VMT": null,
     "Population": 76094000,
     "Fatalities per 100,000 population": 0.047,
     "Change (in percent)": null
   },
   {
     "Alcohol related deaths": null,
     "Year": 1901,
     "Deaths": 54,
     "Vehicle miles travelled (billions)": null,
     "Fatalities per 100 million VMT": null,
     "Population": 77584000,
     "Fatalities per 100,000 population": 0.07,
     "Change (in percent)": 0.4712
   },
   {
     "Alcohol related deaths": null,
     "Year": 1902,
     "Deaths": 79,
     "Vehicle miles travelled (billions)": null,
     "Fatalities per 100 million VMT": null,
     "Population": 79163000,
     "Fatalities per 100,000 population": 0.1,
     "Change (in percent)": 0.4338
   },
   {
     "Alcohol related deaths": null,
     "Year": 1903,
     "Deaths": 117,
     "Vehicle miles travelled (billions)": null,
     "Fatalities per 100 million VMT": null,
     "Population": 80632000,
     "Fatalities per 100,000 population": 0.145,
     "Change (in percent)": 0.454
   },
   {
     "Alcohol related deaths": null,
     "Year": 1904,
     "Deaths": 172,
     "Vehicle miles travelled (billions)": null,
     "Fatalities per 100 million VMT": null,
     "Population": 82166000,
     "Fatalities per 100,000 population": 0.209,
     "Change (in percent)": 0.4426
   },
   {
     "Alcohol related deaths": null,
     "Year": 1905,
     "Deaths": 252,
     "Vehicle miles travelled (billions)": null,
     "Fatalities per 100 million VMT": null,
     "Population": 83822000,
     "Fatalities per 100,000 population": 0.301,
     "Change (in percent)": 0.4362
   },
   {
     "Alcohol related deaths": null,
     "Year": 1906,
     "Deaths": 338,
     "Vehicle miles travelled (billions)": null,
     "Fatalities per 100 million VMT": null,
     "Population": 85450000,
     "Fatalities per 100,000 population": 0.396,
     "Change (in percent)": 0.3157
   },
   {
     "Alcohol related deaths": null,
     "Year": 1907,
     "Deaths": 581,
     "Vehicle miles travelled (billions)": null,
     "Fatalities per 100 million VMT": null,
     "Population": 87008000,
     "Fatalities per 100,000 population": 0.668,
     "Change (in percent)": 0.6882
   },
   {
     "Alcohol related deaths": null,
     "Year": 1908,
     "Deaths": 751,
     "Vehicle miles travelled (billions)": null,
     "Fatalities per 100 million VMT": null,
     "Population": 88710000,
     "Fatalities per 100,000 population": 0.847,
     "Change (in percent)": 0.2678
   },
   {
     "Alcohol related deaths": null,
     "Year": 1909,
     "Deaths": 1174,
     "Vehicle miles travelled (billions)": null,
     "Fatalities per 100 million VMT": null,
     "Population": 90490000,
     "Fatalities per 100,000 population": 1.297,
     "Change (in percent)": 0.5325
   },
   {
     "Alcohol related deaths": null,
     "Year": 1910,
     "Deaths": 1599,
     "Vehicle miles travelled (billions)": null,
     "Fatalities per 100 million VMT": null,
     "Population": 92407000,
     "Fatalities per 100,000 population": 1.73,
     "Change (in percent)": 0.3338
   },
   {
     "Alcohol related deaths": null,
     "Year": 1911,
     "Deaths": 2043,
     "Vehicle miles travelled (billions)": null,
     "Fatalities per 100 million VMT": null,
     "Population": 93863000,
     "Fatalities per 100,000 population": 2.177,
     "Change (in percent)": 0.2579
   },
   {
     "Alcohol related deaths": null,
     "Year": 1912,
     "Deaths": 2968,
     "Vehicle miles travelled (billions)": null,
     "Fatalities per 100 million VMT": null,
     "Population": 95335000,
     "Fatalities per 100,000 population": 3.113,
     "Change (in percent)": 0.4303
   },
   {
     "Alcohol related deaths": null,
     "Year": 1913,
     "Deaths": 4079,
     "Vehicle miles travelled (billions)": null,
     "Fatalities per 100 million VMT": null,
     "Population": 97225000,
     "Fatalities per 100,000 population": 4.195,
     "Change (in percent)": 0.3476
   },
   {
     "Alcohol related deaths": null,
     "Year": 1914,
     "Deaths": 4468,
     "Vehicle miles travelled (billions)": null,
     "Fatalities per 100 million VMT": null,
     "Population": 99111000,
     "Fatalities per 100,000 population": 4.508,
     "Change (in percent)": 0.0745
   },
   {
     "Alcohol related deaths": null,
     "Year": 1915,
     "Deaths": 6779,
     "Vehicle miles travelled (billions)": null,
     "Fatalities per 100 million VMT": null,
     "Population": 100546000,
     "Fatalities per 100,000 population": 6.742,
     "Change (in percent)": 0.4956
   },
   {
     "Alcohol related deaths": null,
     "Year": 1916,
     "Deaths": 7766,
     "Vehicle miles travelled (billions)": null,
     "Fatalities per 100 million VMT": null,
     "Population": 101961000,
     "Fatalities per 100,000 population": 7.617,
     "Change (in percent)": 0.1297
   },
   {
     "Alcohol related deaths": null,
     "Year": 1917,
     "Deaths": 9630,
     "Vehicle miles travelled (billions)": null,
     "Fatalities per 100 million VMT": null,
     "Population": 103268000,
     "Fatalities per 100,000 population": 9.325,
     "Change (in percent)": 0.2243
   },
   {
     "Alcohol related deaths": null,
     "Year": 1918,
     "Deaths": 10390,
     "Vehicle miles travelled (billions)": null,
     "Fatalities per 100 million VMT": null,
     "Population": 103208000,
     "Fatalities per 100,000 population": 10.067,
     "Change (in percent)": 0.0795
   },
   {
     "Alcohol related deaths": null,
     "Year": 1919,
     "Deaths": 10896,
     "Vehicle miles travelled (billions)": null,
     "Fatalities per 100 million VMT": null,
     "Population": 104514000,
     "Fatalities per 100,000 population": 10.425,
     "Change (in percent)": 0.0356
   },
   {
     "Alcohol related deaths": null,
     "Year": 1920,
     "Deaths": 12155,
     "Vehicle miles travelled (billions)": null,
     "Fatalities per 100 million VMT": null,
     "Population": 106461000,
     "Fatalities per 100,000 population": 11.417,
     "Change (in percent)": 0.0951
   },
   {
     "Alcohol related deaths": null,
     "Year": 1921,
     "Deaths": 13253,
     "Vehicle miles travelled (billions)": 55.03,
     "Fatalities per 100 million VMT": 24.09,
     "Population": 108538000,
     "Fatalities per 100,000 population": 12.21,
     "Change (in percent)": 0.0695
   },
   {
     "Alcohol related deaths": null,
     "Year": 1922,
     "Deaths": 14859,
     "Vehicle miles travelled (billions)": 67.7,
     "Fatalities per 100 million VMT": 21.95,
     "Population": 110049000,
     "Fatalities per 100,000 population": 13.502,
     "Change (in percent)": 0.1058
   },
   {
     "Alcohol related deaths": null,
     "Year": 1923,
     "Deaths": 17870,
     "Vehicle miles travelled (billions)": 85,
     "Fatalities per 100 million VMT": 21.03,
     "Population": 111947000,
     "Fatalities per 100,000 population": 15.963,
     "Change (in percent)": 0.1822
   },
   {
     "Alcohol related deaths": null,
     "Year": 1924,
     "Deaths": 18400,
     "Vehicle miles travelled (billions)": 104.84,
     "Fatalities per 100 million VMT": 17.55,
     "Population": 114109000,
     "Fatalities per 100,000 population": 16.125,
     "Change (in percent)": 0.0101
   },
   {
     "Alcohol related deaths": null,
     "Year": 1925,
     "Deaths": 20771,
     "Vehicle miles travelled (billions)": 122.35,
     "Fatalities per 100 million VMT": 16.98,
     "Population": 115829000,
     "Fatalities per 100,000 population": 17.932,
     "Change (in percent)": 0.1121
   },
   {
     "Alcohol related deaths": null,
     "Year": 1926,
     "Deaths": 22194,
     "Vehicle miles travelled (billions)": 140.74,
     "Fatalities per 100 million VMT": 15.77,
     "Population": 117397000,
     "Fatalities per 100,000 population": 18.905,
     "Change (in percent)": 0.0542
   },
   {
     "Alcohol related deaths": null,
     "Year": 1927,
     "Deaths": 24470,
     "Vehicle miles travelled (billions)": 158.45,
     "Fatalities per 100 million VMT": 15.44,
     "Population": 119035000,
     "Fatalities per 100,000 population": 20.557,
     "Change (in percent)": 0.0874
   },
   {
     "Alcohol related deaths": null,
     "Year": 1928,
     "Deaths": 26557,
     "Vehicle miles travelled (billions)": 172.86,
     "Fatalities per 100 million VMT": 15.36,
     "Population": 120509000,
     "Fatalities per 100,000 population": 22.037,
     "Change (in percent)": 0.072
   },
   {
     "Alcohol related deaths": null,
     "Year": 1929,
     "Deaths": 29592,
     "Vehicle miles travelled (billions)": 197.72,
     "Fatalities per 100 million VMT": 14.97,
     "Population": 121767000,
     "Fatalities per 100,000 population": 24.302,
     "Change (in percent)": 0.1028
   },
   {
     "Alcohol related deaths": null,
     "Year": 1930,
     "Deaths": 31204,
     "Vehicle miles travelled (billions)": 206.32,
     "Fatalities per 100 million VMT": 15.12,
     "Population": 123076741,
     "Fatalities per 100,000 population": 25.353,
     "Change (in percent)": 0.0433
   },
   {
     "Alcohol related deaths": null,
     "Year": 1931,
     "Deaths": 31963,
     "Vehicle miles travelled (billions)": 216.15,
     "Fatalities per 100 million VMT": 14.79,
     "Population": 124039648,
     "Fatalities per 100,000 population": 25.768,
     "Change (in percent)": 0.0164
   },
   {
     "Alcohol related deaths": null,
     "Year": 1932,
     "Deaths": 27979,
     "Vehicle miles travelled (billions)": 200.52,
     "Fatalities per 100 million VMT": 13.95,
     "Population": 124840471,
     "Fatalities per 100,000 population": 22.412,
     "Change (in percent)": -0.1303
   },
   {
     "Alcohol related deaths": null,
     "Year": 1933,
     "Deaths": 29746,
     "Vehicle miles travelled (billions)": 200.64,
     "Fatalities per 100 million VMT": 14.83,
     "Population": 125578763,
     "Fatalities per 100,000 population": 23.687,
     "Change (in percent)": 0.0569
   },
   {
     "Alcohol related deaths": null,
     "Year": 1934,
     "Deaths": 34240,
     "Vehicle miles travelled (billions)": 215.56,
     "Fatalities per 100 million VMT": 15.88,
     "Population": 126373773,
     "Fatalities per 100,000 population": 27.094,
     "Change (in percent)": 0.1438
   },
   {
     "Alcohol related deaths": null,
     "Year": 1935,
     "Deaths": 34494,
     "Vehicle miles travelled (billions)": 228.57,
     "Fatalities per 100 million VMT": 15.09,
     "Population": 127250232,
     "Fatalities per 100,000 population": 27.107,
     "Change (in percent)": 0.0005
   },
   {
     "Alcohol related deaths": null,
     "Year": 1936,
     "Deaths": 36126,
     "Vehicle miles travelled (billions)": 252.13,
     "Fatalities per 100 million VMT": 14.33,
     "Population": 128053180,
     "Fatalities per 100,000 population": 28.212,
     "Change (in percent)": 0.0407
   },
   {
     "Alcohol related deaths": null,
     "Year": 1937,
     "Deaths": 37819,
     "Vehicle miles travelled (billions)": 270.11,
     "Fatalities per 100 million VMT": 14,
     "Population": 128824829,
     "Fatalities per 100,000 population": 29.357,
     "Change (in percent)": 0.0406
   },
   {
     "Alcohol related deaths": null,
     "Year": 1938,
     "Deaths": 31083,
     "Vehicle miles travelled (billions)": 271.18,
     "Fatalities per 100 million VMT": 11.46,
     "Population": 129824939,
     "Fatalities per 100,000 population": 23.942,
     "Change (in percent)": -0.1844
   },
   {
     "Alcohol related deaths": null,
     "Year": 1939,
     "Deaths": 30895,
     "Vehicle miles travelled (billions)": 285.4,
     "Fatalities per 100 million VMT": 10.83,
     "Population": 130879718,
     "Fatalities per 100,000 population": 23.606,
     "Change (in percent)": -0.0141
   },
   {
     "Alcohol related deaths": null,
     "Year": 1940,
     "Deaths": 32914,
     "Vehicle miles travelled (billions)": 302.19,
     "Fatalities per 100 million VMT": 10.89,
     "Population": 132122446,
     "Fatalities per 100,000 population": 24.912,
     "Change (in percent)": 0.0553
   },
   {
     "Alcohol related deaths": null,
     "Year": 1941,
     "Deaths": 38142,
     "Vehicle miles travelled (billions)": 333.61,
     "Fatalities per 100 million VMT": 11.43,
     "Population": 133402471,
     "Fatalities per 100,000 population": 28.592,
     "Change (in percent)": 0.1477
   },
   {
     "Alcohol related deaths": null,
     "Year": 1942,
     "Deaths": 27007,
     "Vehicle miles travelled (billions)": 268.22,
     "Fatalities per 100 million VMT": 10.07,
     "Population": 134859553,
     "Fatalities per 100,000 population": 20.026,
     "Change (in percent)": -0.2996
   },
   {
     "Alcohol related deaths": null,
     "Year": 1943,
     "Deaths": 22727,
     "Vehicle miles travelled (billions)": 208.19,
     "Fatalities per 100 million VMT": 10.92,
     "Population": 136739353,
     "Fatalities per 100,000 population": 16.621,
     "Change (in percent)": -0.17
   },
   {
     "Alcohol related deaths": null,
     "Year": 1944,
     "Deaths": 23165,
     "Vehicle miles travelled (billions)": 212.71,
     "Fatalities per 100 million VMT": 10.89,
     "Population": 138397345,
     "Fatalities per 100,000 population": 16.738,
     "Change (in percent)": 0.0071
   },
   {
     "Alcohol related deaths": null,
     "Year": 1945,
     "Deaths": 26785,
     "Vehicle miles travelled (billions)": 250.17,
     "Fatalities per 100 million VMT": 10.71,
     "Population": 139928165,
     "Fatalities per 100,000 population": 19.142,
     "Change (in percent)": 0.1436
   },
   {
     "Alcohol related deaths": null,
     "Year": 1946,
     "Deaths": 31874,
     "Vehicle miles travelled (billions)": 340.88,
     "Fatalities per 100 million VMT": 9.35,
     "Population": 141388566,
     "Fatalities per 100,000 population": 22.544,
     "Change (in percent)": 0.1777
   },
   {
     "Alcohol related deaths": null,
     "Year": 1947,
     "Deaths": 31193,
     "Vehicle miles travelled (billions)": 370.89,
     "Fatalities per 100 million VMT": 8.41,
     "Population": 144126071,
     "Fatalities per 100,000 population": 21.643,
     "Change (in percent)": -0.04
   },
   {
     "Alcohol related deaths": null,
     "Year": 1948,
     "Deaths": 30775,
     "Vehicle miles travelled (billions)": 397.96,
     "Fatalities per 100 million VMT": 7.73,
     "Population": 146631302,
     "Fatalities per 100,000 population": 20.988,
     "Change (in percent)": -0.0303
   },
   {
     "Alcohol related deaths": null,
     "Year": 1949,
     "Deaths": 30246,
     "Vehicle miles travelled (billions)": 424.46,
     "Fatalities per 100 million VMT": 7.13,
     "Population": 149188130,
     "Fatalities per 100,000 population": 20.274,
     "Change (in percent)": -0.034
   },
   {
     "Alcohol related deaths": null,
     "Year": 1950,
     "Deaths": 33186,
     "Vehicle miles travelled (billions)": 458.25,
     "Fatalities per 100 million VMT": 7.24,
     "Population": 152271417,
     "Fatalities per 100,000 population": 21.794,
     "Change (in percent)": 0.075
   },
   {
     "Alcohol related deaths": null,
     "Year": 1951,
     "Deaths": 35309,
     "Vehicle miles travelled (billions)": 491.09,
     "Fatalities per 100 million VMT": 7.19,
     "Population": 154877889,
     "Fatalities per 100,000 population": 22.798,
     "Change (in percent)": 0.0461
   },
   {
     "Alcohol related deaths": null,
     "Year": 1952,
     "Deaths": 36088,
     "Vehicle miles travelled (billions)": 513.58,
     "Fatalities per 100 million VMT": 7.03,
     "Population": 157552740,
     "Fatalities per 100,000 population": 22.905,
     "Change (in percent)": 0.0047
   },
   {
     "Alcohol related deaths": null,
     "Year": 1953,
     "Deaths": 36190,
     "Vehicle miles travelled (billions)": 544.43,
     "Fatalities per 100 million VMT": 6.65,
     "Population": 160184192,
     "Fatalities per 100,000 population": 22.593,
     "Change (in percent)": -0.0136
   },
   {
     "Alcohol related deaths": null,
     "Year": 1954,
     "Deaths": 33890,
     "Vehicle miles travelled (billions)": 561.96,
     "Fatalities per 100 million VMT": 6.03,
     "Population": 163025854,
     "Fatalities per 100,000 population": 20.788,
     "Change (in percent)": -0.0799
   },
   {
     "Alcohol related deaths": null,
     "Year": 1955,
     "Deaths": 36688,
     "Vehicle miles travelled (billions)": 605.65,
     "Fatalities per 100 million VMT": 6.06,
     "Population": 165931202,
     "Fatalities per 100,000 population": 22.11,
     "Change (in percent)": 0.0636
   },
   {
     "Alcohol related deaths": null,
     "Year": 1956,
     "Deaths": 37965,
     "Vehicle miles travelled (billions)": 627.84,
     "Fatalities per 100 million VMT": 6.05,
     "Population": 168903031,
     "Fatalities per 100,000 population": 22.477,
     "Change (in percent)": 0.0166
   },
   {
     "Alcohol related deaths": null,
     "Year": 1957,
     "Deaths": 36932,
     "Vehicle miles travelled (billions)": 647,
     "Fatalities per 100 million VMT": 5.71,
     "Population": 171984130,
     "Fatalities per 100,000 population": 21.474,
     "Change (in percent)": -0.0446
   },
   {
     "Alcohol related deaths": null,
     "Year": 1958,
     "Deaths": 35331,
     "Vehicle miles travelled (billions)": 664.65,
     "Fatalities per 100 million VMT": 5.32,
     "Population": 174881904,
     "Fatalities per 100,000 population": 20.203,
     "Change (in percent)": -0.0592
   },
   {
     "Alcohol related deaths": null,
     "Year": 1959,
     "Deaths": 36223,
     "Vehicle miles travelled (billions)": 700.48,
     "Fatalities per 100 million VMT": 5.17,
     "Population": 177829628,
     "Fatalities per 100,000 population": 20.369,
     "Change (in percent)": 0.0083
   },
   {
     "Alcohol related deaths": null,
     "Year": 1960,
     "Deaths": 36399,
     "Vehicle miles travelled (billions)": 718.76,
     "Fatalities per 100 million VMT": 5.06,
     "Population": 180671158,
     "Fatalities per 100,000 population": 20.147,
     "Change (in percent)": -0.0109
   },
   {
     "Alcohol related deaths": null,
     "Year": 1961,
     "Deaths": 36285,
     "Vehicle miles travelled (billions)": 737.42,
     "Fatalities per 100 million VMT": 4.92,
     "Population": 183691481,
     "Fatalities per 100,000 population": 19.753,
     "Change (in percent)": -0.0195
   },
   {
     "Alcohol related deaths": null,
     "Year": 1962,
     "Deaths": 38980,
     "Vehicle miles travelled (billions)": 766.73,
     "Fatalities per 100 million VMT": 5.08,
     "Population": 186537737,
     "Fatalities per 100,000 population": 20.897,
     "Change (in percent)": 0.0579
   },
   {
     "Alcohol related deaths": null,
     "Year": 1963,
     "Deaths": 41723,
     "Vehicle miles travelled (billions)": 805.25,
     "Fatalities per 100 million VMT": 5.18,
     "Population": 189241798,
     "Fatalities per 100,000 population": 22.047,
     "Change (in percent)": 0.0551
   },
   {
     "Alcohol related deaths": null,
     "Year": 1964,
     "Deaths": 45645,
     "Vehicle miles travelled (billions)": 846.3,
     "Fatalities per 100 million VMT": 5.39,
     "Population": 191888791,
     "Fatalities per 100,000 population": 23.787,
     "Change (in percent)": 0.0789
   },
   {
     "Alcohol related deaths": null,
     "Year": 1965,
     "Deaths": 47089,
     "Vehicle miles travelled (billions)": 887.81,
     "Fatalities per 100 million VMT": 5.3,
     "Population": 194302963,
     "Fatalities per 100,000 population": 24.235,
     "Change (in percent)": 0.0188
   },
   {
     "Alcohol related deaths": null,
     "Year": 1966,
     "Deaths": 50894,
     "Vehicle miles travelled (billions)": 925.9,
     "Fatalities per 100 million VMT": 5.5,
     "Population": 196560338,
     "Fatalities per 100,000 population": 25.892,
     "Change (in percent)": 0.0684
   },
   {
     "Alcohol related deaths": null,
     "Year": 1967,
     "Deaths": 50724,
     "Vehicle miles travelled (billions)": 964.01,
     "Fatalities per 100 million VMT": 5.26,
     "Population": 198712056,
     "Fatalities per 100,000 population": 25.526,
     "Change (in percent)": -0.0141
   },
   {
     "Alcohol related deaths": null,
     "Year": 1968,
     "Deaths": 52725,
     "Vehicle miles travelled (billions)": 1015.87,
     "Fatalities per 100 million VMT": 5.19,
     "Population": 200706052,
     "Fatalities per 100,000 population": 26.27,
     "Change (in percent)": 0.0291
   },
   {
     "Alcohol related deaths": null,
     "Year": 1969,
     "Deaths": 53543,
     "Vehicle miles travelled (billions)": 1061.79,
     "Fatalities per 100 million VMT": 5.04,
     "Population": 202676946,
     "Fatalities per 100,000 population": 26.418,
     "Change (in percent)": 0.0056
   },
   {
     "Alcohol related deaths": null,
     "Year": 1970,
     "Deaths": 52627,
     "Vehicle miles travelled (billions)": 1109.72,
     "Fatalities per 100 million VMT": 4.74,
     "Population": 205052174,
     "Fatalities per 100,000 population": 25.665,
     "Change (in percent)": -0.0285
   },
   {
     "Alcohol related deaths": null,
     "Year": 1971,
     "Deaths": 52542,
     "Vehicle miles travelled (billions)": 1178.81,
     "Fatalities per 100 million VMT": 4.46,
     "Population": 207660677,
     "Fatalities per 100,000 population": 25.302,
     "Change (in percent)": -0.0142
   },
   {
     "Alcohol related deaths": null,
     "Year": 1972,
     "Deaths": 54589,
     "Vehicle miles travelled (billions)": 1259.79,
     "Fatalities per 100 million VMT": 4.33,
     "Population": 209896021,
     "Fatalities per 100,000 population": 26.008,
     "Change (in percent)": 0.0279
   },
   {
     "Alcohol related deaths": null,
     "Year": 1973,
     "Deaths": 54052,
     "Vehicle miles travelled (billions)": 1313.11,
     "Fatalities per 100 million VMT": 4.12,
     "Population": 211908788,
     "Fatalities per 100,000 population": 25.507,
     "Change (in percent)": -0.0192
   },
   {
     "Alcohol related deaths": null,
     "Year": 1974,
     "Deaths": 45196,
     "Vehicle miles travelled (billions)": 1280.54,
     "Fatalities per 100 million VMT": 3.53,
     "Population": 213853928,
     "Fatalities per 100,000 population": 21.134,
     "Change (in percent)": -0.1714
   },
   {
     "Alcohol related deaths": null,
     "Year": 1975,
     "Deaths": 44525,
     "Vehicle miles travelled (billions)": 1327.66,
     "Fatalities per 100 million VMT": 3.35,
     "Population": 215973199,
     "Fatalities per 100,000 population": 20.616,
     "Change (in percent)": -0.0245
   },
   {
     "Alcohol related deaths": null,
     "Year": 1976,
     "Deaths": 45523,
     "Vehicle miles travelled (billions)": 1402.38,
     "Fatalities per 100 million VMT": 3.25,
     "Population": 218035164,
     "Fatalities per 100,000 population": 20.879,
     "Change (in percent)": 0.0127
   },
   {
     "Alcohol related deaths": null,
     "Year": 1977,
     "Deaths": 47878,
     "Vehicle miles travelled (billions)": 1467.03,
     "Fatalities per 100 million VMT": 3.26,
     "Population": 220239425,
     "Fatalities per 100,000 population": 21.739,
     "Change (in percent)": 0.0412
   },
   {
     "Alcohol related deaths": null,
     "Year": 1978,
     "Deaths": 50331,
     "Vehicle miles travelled (billions)": 1544.7,
     "Fatalities per 100 million VMT": 3.26,
     "Population": 222584545,
     "Fatalities per 100,000 population": 22.612,
     "Change (in percent)": 0.0402
   },
   {
     "Alcohol related deaths": null,
     "Year": 1979,
     "Deaths": 51093,
     "Vehicle miles travelled (billions)": 1529.13,
     "Fatalities per 100 million VMT": 3.34,
     "Population": 225055487,
     "Fatalities per 100,000 population": 22.702,
     "Change (in percent)": 0.004
   },
   {
     "Alcohol related deaths": null,
     "Year": 1980,
     "Deaths": 51091,
     "Vehicle miles travelled (billions)": 1527.3,
     "Fatalities per 100 million VMT": 3.35,
     "Population": 227224681,
     "Fatalities per 100,000 population": 22.485,
     "Change (in percent)": -0.0096
   },
   {
     "Alcohol related deaths": null,
     "Year": 1981,
     "Deaths": 49301,
     "Vehicle miles travelled (billions)": 1552.8,
     "Fatalities per 100 million VMT": 3.18,
     "Population": 229465714,
     "Fatalities per 100,000 population": 21.485,
     "Change (in percent)": -0.0445
   },
   {
     "Alcohol related deaths": 26173,
     "Year": 1982,
     "Deaths": 43945,
     "Vehicle miles travelled (billions)": 1595.01,
     "Fatalities per 100 million VMT": 2.76,
     "Population": 231664458,
     "Fatalities per 100,000 population": 18.969,
     "Change (in percent)": -0.1171
   },
   {
     "Alcohol related deaths": 24365,
     "Year": 1983,
     "Deaths": 42589,
     "Vehicle miles travelled (billions)": 1652.79,
     "Fatalities per 100 million VMT": 2.58,
     "Population": 233791994,
     "Fatalities per 100,000 population": 18.217,
     "Change (in percent)": -0.0397
   },
   {
     "Alcohol related deaths": 24762,
     "Year": 1984,
     "Deaths": 44257,
     "Vehicle miles travelled (billions)": 1720.27,
     "Fatalities per 100 million VMT": 2.57,
     "Population": 235824902,
     "Fatalities per 100,000 population": 18.767,
     "Change (in percent)": 0.0302
   },
   {
     "Alcohol related deaths": 23167,
     "Year": 1985,
     "Deaths": 43825,
     "Vehicle miles travelled (billions)": 1774.18,
     "Fatalities per 100 million VMT": 2.47,
     "Population": 237923795,
     "Fatalities per 100,000 population": 18.42,
     "Change (in percent)": -0.0185
   },
   {
     "Alcohol related deaths": 25017,
     "Year": 1986,
     "Deaths": 46087,
     "Vehicle miles travelled (billions)": 1834.87,
     "Fatalities per 100 million VMT": 2.51,
     "Population": 240132887,
     "Fatalities per 100,000 population": 19.192,
     "Change (in percent)": 0.0419
   },
   {
     "Alcohol related deaths": 24094,
     "Year": 1987,
     "Deaths": 46390,
     "Vehicle miles travelled (billions)": 1921.2,
     "Fatalities per 100 million VMT": 2.42,
     "Population": 242288918,
     "Fatalities per 100,000 population": 19.147,
     "Change (in percent)": -0.0024
   },
   {
     "Alcohol related deaths": 23833,
     "Year": 1988,
     "Deaths": 47087,
     "Vehicle miles travelled (billions)": 2025.96,
     "Fatalities per 100 million VMT": 2.32,
     "Population": 244498982,
     "Fatalities per 100,000 population": 19.259,
     "Change (in percent)": 0.0058
   },
   {
     "Alcohol related deaths": 22424,
     "Year": 1989,
     "Deaths": 45582,
     "Vehicle miles travelled (billions)": 2096.46,
     "Fatalities per 100 million VMT": 2.17,
     "Population": 246819230,
     "Fatalities per 100,000 population": 18.468,
     "Change (in percent)": -0.0411
   },
   {
     "Alcohol related deaths": 22587,
     "Year": 1990,
     "Deaths": 44599,
     "Vehicle miles travelled (billions)": 2144.36,
     "Fatalities per 100 million VMT": 2.08,
     "Population": 249464396,
     "Fatalities per 100,000 population": 17.878,
     "Change (in percent)": -0.0319
   },
   {
     "Alcohol related deaths": 20159,
     "Year": 1991,
     "Deaths": 41508,
     "Vehicle miles travelled (billions)": 2172.05,
     "Fatalities per 100 million VMT": 1.91,
     "Population": 252153092,
     "Fatalities per 100,000 population": 16.461,
     "Change (in percent)": -0.0792
   },
   {
     "Alcohol related deaths": 18290,
     "Year": 1992,
     "Deaths": 39250,
     "Vehicle miles travelled (billions)": 2247.15,
     "Fatalities per 100 million VMT": 1.75,
     "Population": 255029699,
     "Fatalities per 100,000 population": 15.39,
     "Change (in percent)": -0.0651
   },
   {
     "Alcohol related deaths": 17908,
     "Year": 1993,
     "Deaths": 40150,
     "Vehicle miles travelled (billions)": 2296.38,
     "Fatalities per 100 million VMT": 1.75,
     "Population": 257782608,
     "Fatalities per 100,000 population": 15.575,
     "Change (in percent)": 0.012
   },
   {
     "Alcohol related deaths": 17308,
     "Year": 1994,
     "Deaths": 40716,
     "Vehicle miles travelled (billions)": 2358,
     "Fatalities per 100 million VMT": 1.73,
     "Population": 260327021,
     "Fatalities per 100,000 population": 15.6403,
     "Change (in percent)": 0.0042
   },
   {
     "Alcohol related deaths": 17732,
     "Year": 1995,
     "Deaths": 41817,
     "Vehicle miles travelled (billions)": 2423,
     "Fatalities per 100 million VMT": 1.73,
     "Population": 262803276,
     "Fatalities per 100,000 population": 15.9119,
     "Change (in percent)": 0.0174
   },
   {
     "Alcohol related deaths": 17749,
     "Year": 1996,
     "Deaths": 42065,
     "Vehicle miles travelled (billions)": 2486,
     "Fatalities per 100 million VMT": 1.69,
     "Population": 265228572,
     "Fatalities per 100,000 population": 15.8599,
     "Change (in percent)": -0.0033
   },
   {
     "Alcohol related deaths": 16711,
     "Year": 1997,
     "Deaths": 42013,
     "Vehicle miles travelled (billions)": 2562,
     "Fatalities per 100 million VMT": 1.64,
     "Population": 267783607,
     "Fatalities per 100,000 population": 15.6892,
     "Change (in percent)": -0.0108
   },
   {
     "Alcohol related deaths": 16673,
     "Year": 1998,
     "Deaths": 41501,
     "Vehicle miles travelled (billions)": 2632,
     "Fatalities per 100 million VMT": 1.58,
     "Population": 270248003,
     "Fatalities per 100,000 population": 15.3566,
     "Change (in percent)": -0.0212
   },
   {
     "Alcohol related deaths": 16572,
     "Year": 1999,
     "Deaths": 41717,
     "Vehicle miles travelled (billions)": 2691,
     "Fatalities per 100 million VMT": 1.55,
     "Population": 272690813,
     "Fatalities per 100,000 population": 15.2983,
     "Change (in percent)": -0.0038
   },
   {
     "Alcohol related deaths": 17380,
     "Year": 2000,
     "Deaths": 41945,
     "Vehicle miles travelled (billions)": 2747,
     "Fatalities per 100 million VMT": 1.53,
     "Population": 282216952,
     "Fatalities per 100,000 population": 14.8627,
     "Change (in percent)": -0.0285
   },
   {
     "Alcohol related deaths": 17400,
     "Year": 2001,
     "Deaths": 42196,
     "Vehicle miles travelled (billions)": 2797,
     "Fatalities per 100 million VMT": 1.51,
     "Population": 285226284,
     "Fatalities per 100,000 population": 14.794,
     "Change (in percent)": -0.0046
   },
   {
     "Alcohol related deaths": 17524,
     "Year": 2002,
     "Deaths": 43005,
     "Vehicle miles travelled (billions)": 2856,
     "Fatalities per 100 million VMT": 1.51,
     "Population": 288125973,
     "Fatalities per 100,000 population": 14.926,
     "Change (in percent)": 0.0089
   },
   {
     "Alcohol related deaths": 17013,
     "Year": 2003,
     "Deaths": 42884,
     "Vehicle miles travelled (billions)": 2890,
     "Fatalities per 100 million VMT": 1.48,
     "Population": 290796023,
     "Fatalities per 100,000 population": 14.747,
     "Change (in percent)": -0.0175
   },
   {
     "Year": 2004,
     "Deaths": 42836,
     "Alcohol related deaths": 16919,
     "Vehicle miles travelled (billions)": 2965,
     "Fatalities per 100 million VMT": 1.44,
     "Population": 293638158,
     "Fatalities per 100,000 population": 14.588,
     "Change (in percent)": -0.0052
   },
   {
     "Year": 2005,
     "Deaths": 43510,
     "Alcohol related deaths": 16885,
     "Vehicle miles travelled (billions)": 2989,
     "Fatalities per 100 million VMT": 1.46,
     "Population": 296507061,
     "Fatalities per 100,000 population": 14.674,
     "Change (in percent)": 0.0044
   },
   {
     "Year": 2006,
     "Deaths": 42708,
     "Alcohol related deaths": 15829,
     "Vehicle miles travelled (billions)": 3014,
     "Fatalities per 100 million VMT": 1.42,
     "Population": 299398484,
     "Fatalities per 100,000 population": 14.265,
     "Change (in percent)": -0.0279
   },
   {
     "Year": 2007,
     "Deaths": 41259,
     "Alcohol related deaths": 15837,
     "Vehicle miles travelled (billions)": 3031,
     "Fatalities per 100 million VMT": 1.36,
     "Population": 301139947,
     "Fatalities per 100,000 population": 13.701,
     "Change (in percent)": -0.0385
   },
   {
     "Year": 2008,
     "Deaths": 37423,
     "Alcohol related deaths": 13846,
     "Vehicle miles travelled (billions)": 2977,
     "Fatalities per 100 million VMT": 1.26,
     "Population": 303824640,
     "Fatalities per 100,000 population": 12.317,
     "Change (in percent)": -0.11
   },
   {
     "Year": 2009,
     "Deaths": 33883,
     "Alcohol related deaths": 12744,
     "Vehicle miles travelled (billions)": 2957,
     "Fatalities per 100 million VMT": 1.15,
     "Population": 306700000,
     "Fatalities per 100,000 population": 11.048,
     "Change (in percent)": -0.097
   },
   {
     "Year": 2010,
     "Deaths": 32999,
     "Alcohol related deaths": 10228,
     "Vehicle miles travelled (billions)": 2967,
     "Fatalities per 100 million VMT": 1.11,
     "Population": 309326000,
     "Fatalities per 100,000 population": 10.668,
     "Change (in percent)": -0.035
   },
   {
     "Year": 2011,
     "Deaths": 32479,
     "Alcohol related deaths": 9878,
     "Vehicle miles travelled (billions)": 2950,
     "Fatalities per 100 million VMT": 1.1,
     "Population": 311588000,
     "Fatalities per 100,000 population": 10.424,
     "Change (in percent)": -0.023
   },
   {
     "Year": 2012,
     "Deaths": 33561,
     "Alcohol related deaths": 10322,
     "Vehicle miles travelled (billions)": 2969,
     "Fatalities per 100 million VMT": 1.13,
     "Population": 313914000,
     "Fatalities per 100,000 population": 10.691,
     "Change (in percent)": 0.026
   },
   {
     "Year": 2013,
     "Deaths": 32719,
     "Alcohol related deaths": 10076,
     "Vehicle miles travelled (billions)": 2988,
     "Fatalities per 100 million VMT": 1.1,
     "Population": 316129000,
     "Fatalities per 100,000 population": 10.345,
     "Change (in percent)": -0.033
   },
   {
     "Year": 2014,
     "Deaths": 32675,
     "Alcohol related deaths": 9967,
     "Vehicle miles travelled (billions)": 3026,
     "Fatalities per 100 million VMT": 1.08,
     "Population": 318860000,
     "Fatalities per 100,000 population": 10.25,
     "Change (in percent)": -0.009
   },
   {
     "Year": 2015,
     "Deaths": 35092,
     "Alcohol related deaths": 10265,
     "Vehicle miles travelled (billions)": 3147.8,
     "Fatalities per 100 million VMT": 1.12,
     "Population": 321370000,
     "Fatalities per 100,000 population": 11.324,
     "Change (in percent)": 0.105
   }
];

var display = {
  data: auto
};

var modified = {
  deaths: [],
  deathsBeforeAlcData: [],
  alcohol: [],
  nonAlcohol: [],
  pop: [],
  miles: []
};


function calcNonAlcDeaths(deaths, alc) {
  if (alc == null) {
    return null;
  }
  else {
    return deaths - alc;
  }
}

function hideModernDeaths(deaths, alc, year) {
  return alc === null ? deaths : null;
}

auto.forEach( function(d) {
  modified.deaths.push(
    {y: d.Deaths, x: d.Year, type:'death'});
  modified.deathsBeforeAlcData.push(
    {y: hideModernDeaths(d.Deaths, d['Alcohol related deaths'], d.Year), x: d.Year, type:'death'});
  modified.alcohol.push(
    {y: d['Alcohol related deaths'], x: d.Year, type:'alcohol'});
  modified.nonAlcohol.push(
    {y: calcNonAlcDeaths(d.Deaths, d['Alcohol related deaths']), x: d.Year, type:'non-alcohol'});
  modified.pop.push(
    {y: d.Population, x: d.Year, type: 'pop'});
  modified.miles.push(
    {y: d['Vehicle miles travelled (billions)'], x: d.Year, type: 'miles'});
});
console.log(modified);

var sharedProps = {
  size: [800,200]
};

var colors = {
  deaths: '#256676',
  pop: '#CCFFCC',
  miles: '#CCCCFF',
  alc: '#BB5425',
  nonAlc: '#FF9465'
}

var deathDisplay = [
  {data: modified.deaths, color: colors.deaths, renderMode: "normal"}
];

var popDisplay = [
  {data: modified.pop, color: colors.pop}
];

var milesDisplay = [
  {data: modified.miles, color: colors.miles}
];

var alcDisplay = [
  {data: modified.nonAlcohol, color: colors.nonAlc, fillOpacity: 0.5},
  {data: modified.alcohol, color: colors.alc, fillOpacity: 0.5}
];

ReactDOM.render(
  <XYFrame
    size={[500,200]}
    lines={deathDisplay}
    defined={d => d.y !== null}
    lineDataAccessor="data"
    xAccessor="x"
    yAccessor="y"
    hoverAnnotation={true}
    lineRenderMode={d => d.renderMode}
    lineStyle={d => ({stroke: d.color, strokeWidth: "1px" })}
    customLineType={{ type: "dividedLine"}}
    axes={[
      { orient: 'bottom', ticks: 10 }
    ]}

  />,
  document.getElementById('deathPopulation')
);

ReactDOM.render(
  <XYFrame
    size={[500,200]}
    lines={deathDisplay}
    defined={d => d.y !== null}
    lineDataAccessor="data"
    xAccessor="x"
    yAccessor="y"
    hoverAnnotation={true}
    lineRenderMode={"normal"}
    lineStyle={d => ({stroke: d.color, strokeWidth: "1px" })}
    customLineType={{ type: "dividedLine"}}
    axes={[
      { orient: 'bottom', ticks: 10 }
    ]}

  />,
  document.getElementById('deathMiles')
);

ReactDOM.render(
  <XYFrame
    size={[500,200]}
    lines={popDisplay}
    defined={d => d.y !== null}
    lineDataAccessor="data"
    xAccessor="x"
    yAccessor="y"
    hoverAnnotation={true}
    lineRenderMode={"normal"}
    lineStyle={d => ({stroke: d.color, strokeWidth: "1px" })}
    customLineType={{ type: "dividedLine"}}
    axes={[
      { orient: 'bottom', ticks: 10, tickFormat: d => '' }
    ]}

  />,
  document.getElementById('population')
);

ReactDOM.render(
  <XYFrame
    size={[500,200]}
    lines={milesDisplay}
    defined={d => d.y !== null}
    lineDataAccessor="data"
    xAccessor="x"
    yAccessor="y"
    hoverAnnotation={true}
    lineRenderMode={"normal"}
    lineStyle={d => ({stroke: d.color, strokeWidth: "1px" })}
    customLineType={{ type: "dividedLine"}}
    axes={[
      { orient: 'bottom', ticks: 10, tickFormat: d => '', stroke: '#FFFFFF' }
    ]}

  />,
  document.getElementById('miles')
);

ReactDOM.render(
  <XYFrame
    size={[500,200]}
    lines={deathDisplay}
    defined={d => d.y !== null}
    yExtent={[0, 55000]}
    lineDataAccessor="data"
    lineType={{type:"line"}}
    xAccessor="x"
    yAccessor="y"
    hoverAnnotation={true}
    lineRenderMode={"normal"}
    lineStyle={d => ({stroke: d.color, strokeWidth: "1px" })}
    customLineType={{ type: "dividedLine"}}
    axes={[
      { orient: 'bottom', ticks: 10 }
    ]}

  />,
  document.getElementById('deathAlcohol')
);


ReactDOM.render(
  <XYFrame
    size={[500,200]}
    lines={alcDisplay}
    defined={d => d.y !== null}
    yExtent={[0, 55000]}
    lineDataAccessor="data"
    lineType={{type:"stackedarea"}}
    xAccessor="x"
    yAccessor="y"
    hoverAnnotation={true}
    lineRenderMode={"normal"}
    lineStyle={d => ({fill: d.color, fillOpacity: d.fillOpacity, strokeWidth: "1px" })}
    customLineType={{ type: "dividedLine"}}
    axes={[
      { orient: 'bottom', ticks: 10, tickFormat: d => '' }
    ]}

  />,
  document.getElementById('alcohol')
);


