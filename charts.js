// Bubble Chart
const bubbleCtx = document.getElementById("bubbleChart").getContext("2d");

const bubbleChart = new Chart(bubbleCtx, {
  type: "bubble",
  data: {
    datasets: [
      {
        label: "Группа A",
        data: [
          { x: 5, y: 10, r: 10 },
          { x: 15, y: 20, r: 15 },
          { x: 25, y: 30, r: 20 },
        ],
        backgroundColor: "rgba(255, 99, 132, 0.6)",
      },
      {
        label: "Группа B",
        data: [
          { x: 10, y: 25, r: 12 },
          { x: 20, y: 15, r: 18 },
          { x: 30, y: 5, r: 14 },
        ],
        backgroundColor: "rgba(54, 162, 235, 0.6)",
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Bubble диаграмма",
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "X координата",
        },
      },
      y: {
        title: {
          display: true,
          text: "Y координата",
        },
      },
    },
  },
});

// Doughnut Chart
const doughnutCtx = document.getElementById("doughnutChart").getContext("2d");

const doughnutChart = new Chart(doughnutCtx, {
  type: "doughnut",
  data: {
    labels: ["Красный", "Синий", "Жёлтый", "Зелёный"],
    datasets: [
      {
        label: "Цвета",
        data: [300, 100, 150, 80],
        backgroundColor: [
          "rgba(255, 99, 132, 0.7)",
          "rgba(54, 162, 235, 0.7)",
          "rgba(255, 206, 86, 0.7)",
          "rgba(75, 192, 192, 0.7)",
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Doughnut диаграмма",
      },
    },
  },
});
