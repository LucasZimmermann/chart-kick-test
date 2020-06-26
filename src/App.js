import React from 'react';
import './App.css';
import Chartkick, {
  LineChart,
  PieChart,
  ColumnChart
} from 'react-chartkick'
import 'chart.js'

function App() {

  const MAX_DATA_HEIGHT = 200;

  Chartkick.options = {
    colors: ["rgb(34, 67, 88)", "rgb(67, 95, 114)", "rgb(118, 145, 161)"]
  }

  const my_data = [
    {
      name: "On site",
      data: {
        my_data: 50,
      }
    },
    {
      name: "TCS",
      data: {
        my_data: 25,
      },
    },
    {
      name: "Mix",
      data: {
        my_data: 15,
      }
    },
  ];

  const colleagues_data = [
    {
      name: "Me - On site",
      color: "rgb(204, 236, 250)",
      data: {
        colleague_data: 110
      },
    },
    {
      name: "TCS",
      color: "rgb(207, 216, 220)",
      data: {
        colleague_data: 10
      },
    },
    {
      name: "Mix",
      color: "rgb(238, 242, 246)",
      data: {
        colleague_data: 30
      },
    },
  ];

  const data = [my_data, colleagues_data];

  const options = {
    legend: {
      display: false,
    },
    animation: {
      animateScale: true
    },
    tooltips: {
    },
    scales: {
      xAxes: [{
        display: false,
        barPercentage: 1,
        categoryPercentage: 1
      }],
      yAxes: [{
        display: false,
        ticks: {
          min: 0,
          max: MAX_DATA_HEIGHT,
        },
        gridLines: {
          display: false,
        },
      }],
    },
    borderWidth: 1000,
  };

  return (
    <div className="App">
      <div className="space" />
      <div className="graph">
        {data.map(data =>
          <ColumnChart data = {
            data
            }
            dataset = {
              {
                borderWidth: 0,
              }
            }
            stacked
            library={options}
            width="120px"
            height="800px"
            backgroundColor = "rgba(200, 200, 0, 0.1)"
          />
        )}
      </div>
    </div>
  );
}

export default App;
