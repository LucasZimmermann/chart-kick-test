import React from 'react';
import './App.css';
import {
  LineChart,
  PieChart,
  ColumnChart
} from 'react-chartkick'
import 'chart.js'

function App() {
  return (
    <div className="App">
      <ColumnChart
      data = {
        {
          "2017-01-01": [6, 11],
          "2017-01-02": 6
        }
      }
      stacked = {
        true
      }
      />
      <LineChart data = {
        {
          "2017-01-01": 11,
          "2017-01-02": 6
        }
      }
        width = "800px"
        height = "500px"
        colors = {
          ["#b00", "#666"]
        }
      />
      <PieChart data = {
        [
          ["Blueberry", 44],
          ["Strawberry", 23]
        ]
      }
      colors = {
        ["#666", "#b00"]
      }
      />
    </div>
  );
}

export default App;
