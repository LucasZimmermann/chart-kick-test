import React from 'react';
import '../App.css';
import Chartkick, {
  LineChart,
  PieChart,
  ColumnChart
} from 'react-chartkick';
import Chart from 'chart.js';
import openedHoursData from './data/openedHours.js';

function OpenedHoursCard() {

  const MAX_DATA_HEIGHT = 200;

  Chartkick.options = {
    colors: ["rgb(34, 67, 88)", "rgb(67, 95, 114)", "rgb(118, 145, 161)"],
  }

  const options = {
    legend: {
      display: false,
    },
    animation: {
      animateScale: true
    },
    tooltips: {
      // callbacks: {
      //   title: () => "<title callback FILL ME IN>",
      //   label: () => "<label callback FILL ME IN>",
      //   afterLabel: () => "<after label callback FILL ME IN>"
      // }
      enabled: false,

        custom: function (tooltipModel) {
          // Tooltip Element
          var tooltipEl = document.getElementById('chartjs-tooltip');

          // Create element on first render
          if (!tooltipEl) {
            tooltipEl = document.createElement('div');
            tooltipEl.id = 'chartjs-tooltip';
            tooltipEl.innerHTML = '<table></table>';
            document.body.appendChild(tooltipEl);
          }

          // Hide if no tooltip
          if (tooltipModel.opacity === 0) {
            tooltipEl.style.opacity = 0;
            return;
          }

          // Set caret Position
          tooltipEl.classList.remove('above', 'below', 'no-transform');
          if (tooltipModel.yAlign) {
            tooltipEl.classList.add(tooltipModel.yAlign);
          } else {
            tooltipEl.classList.add('no-transform');
          }

          function getBody(bodyItem) {
            return bodyItem.lines;
          }

          // Set Text
          if (tooltipModel.body) {
            var titleLines = tooltipModel.title || [];
            var bodyLines = tooltipModel.body.map(getBody);

            var innerHtml = '<thead>';

            titleLines.forEach(function (title) {
              innerHtml += '<tr><th>' + title + '</th></tr>';
            });
            innerHtml += '</thead><tbody>';

            bodyLines.forEach(function (body, i) {
              var colors = tooltipModel.labelColors[i];
              var style = 'background:' + colors.backgroundColor;
              style += '; border-color:' + colors.borderColor;
              style += '; border-width: 2px';
              var span = '<span style="' + style + '"></span>';
              innerHtml += '<tr><td>' + span + body + '</td></tr>';
            });
            innerHtml += '</tbody>';

            var tableRoot = tooltipEl.querySelector('table');
            tableRoot.innerHTML = innerHtml;
          }

          // `this` will be the overall tooltip
          var position = this._chart.canvas.getBoundingClientRect();

          // Display, position, and set styles for font
          tooltipEl.style.opacity = 1;
          tooltipEl.style.position = 'absolute';
          tooltipEl.style.left = position.left + window.pageXOffset + tooltipModel.caretX + 'px';
          tooltipEl.style.top = position.top + window.pageYOffset + tooltipModel.caretY + 'px';
          tooltipEl.style.fontFamily = tooltipModel._bodyFontFamily;
          tooltipEl.style.fontSize = tooltipModel.bodyFontSize + 'px';
          tooltipEl.style.fontStyle = tooltipModel._bodyFontStyle;
          tooltipEl.style.padding = tooltipModel.yPadding + 'px ' + tooltipModel.xPadding + 'px';
          tooltipEl.style.pointerEvents = 'none';
          tooltipEl.style.backgroundColor = 'white';
          tooltipEl.style.borderRadius = '4px';
          tooltipEl.style.boxShadow = '4px 4px 5px 0px rgba(0,0,0,0.2)';
        }
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
    <div className="graph">
      {openedHoursData.map(data =>
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
  );
}

export default OpenedHoursCard;
