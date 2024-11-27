const xValues = [];
const yValues = [];
const barColors = ["red", "green", "blue", "orange", "brown"];

const secondXValues = [];
const secondYValues = [];
const secondBarColors = ["orchid", "cyan", "yellow", "pink", "gray"];

const thirdXValues = [];
const thirdYValues = [];
const thirdBarColors = ["purple", "cyan", "lime", "pink", "gray"];

const fourthXValues = [];
const fourthYValues = [];
const fourthBarColors = ["maroon", "teal", "yellow", "pink", "gray"];

const settings = {
  url: "https://restcountries.com/v3.1/all",
  method: "GET",
  timeout: 0,
};

$(document).ready(function () {
  $.ajax(settings)
    .done(function (response) {
      console.log(response);

      for (let i = 0; i < 5; i++) {
        const population = response[i].population;
        xValues.push(population);

        const c_name = response[i].altSpellings[0];
        yValues.push(c_name);
      }

      new Chart("followerGrowthChart", {
        type: "bar",
        data: {
          labels: yValues,
          datasets: [
            {
              backgroundColor: barColors,
              data: xValues,
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            title: {
              display: true,
              text: "Top Followers Country",
            },
          },
          scales: {
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: "Followers",
              },
            },
            x: {
              title: {
                display: true,
                text: "Country",
              },
            },
          },
        },
      });

      /*--------- second loop metrics -----*/

      for (let i = 4; i < 8; i++) {
        const population = response[i].population;
        secondXValues.push(population);

        const c_name = response[i].altSpellings[0];
        secondYValues.push(c_name);
      }

      new Chart("postengagementchart", {
        type: "pie",
        data: {
          labels: secondYValues,
          datasets: [
            {
              backgroundColor: barColors,
              data: secondXValues,
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            title: {
              display: true,
              text: "Top Engagements",
            },
          },
          scales: {
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: "Impressions",
              },
            },
            x: {
              title: {
                display: true,
                text: "Country",
              },
            },
          },
        },
      });

      /* -------------- third loop metrics ----- */

      for (let i = 15; i < 28; i++) {
        const population = response[i].population;
        thirdXValues.push(population);

        const c_name = response[i].altSpellings[0];
        thirdYValues.push(c_name);
      }

      new Chart("audienceBreakdownChart", {
        type: "bar",
        data: {
          labels: thirdYValues,
          datasets: [
            {
              backgroundColor: thirdBarColors,
              data: thirdXValues,
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            title: {
              display: true,
              text: "Impressions Breakdown",
            },
          },
          scales: {
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: "Impressions",
              },
            },
            x: {
              title: {
                display: true,
                text: "Country",
              },
            },
          },
        },
      });



      /* -------------- fourth loop metrics ----- */
    
      for (let i = 35; i < 43; i++) {
        const area = response[i].area; 
        fourthXValues.push(area);

        const c_name = response[i].altSpellings[0];
        fourthYValues.push(c_name);
      }

      new Chart("contentperformance", {
        type: "bar",
        data: {
          labels: fourthYValues,
          datasets: [
            {
              backgroundColor: fourthBarColors,
              data: fourthXValues,
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            title: {
              display: true,
              text: "Post Performance",
            },
          },
          scales: {
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: "Engagements",
              },
            },
            x: {
              title: {
                display: true,
                text: "Country",
              },
            },
          },
        },
      });
    })
    .fail(function (error) {
      console.error("Error fetching data: ", error);
    });
});
