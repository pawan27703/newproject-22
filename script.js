const barCtx = document.getElementById('barChart').getContext('2d');
const barChart = new Chart(barCtx, {
  type: 'bar',
  data: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [{
      label: 'Monthly Sales ($)',
      data: [12000, 15000, 17000, 14000, 18000, 20000],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40'],
    }]
  },
  options: {
    responsive: true,
    plugins: {
      tooltip: { enabled: true },
    },
  }
});


const pieCtx = document.getElementById('pieChart').getContext('2d');
const pieChart = new Chart(pieCtx, {
  type: 'pie',
  data: {
    labels: ['Electronics', 'Clothing', 'Home Appliances', 'Books'],
    datasets: [{
      data: [40, 25, 20, 15],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
    }]
  },
  options: {
    responsive: true,
    plugins: {
      tooltip: { enabled: true },
    },
  }
});


const lineCtx = document.getElementById('lineChart').getContext('2d');
const lineChart = new Chart(lineCtx, {
  type: 'line',
  data: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [{
      label: 'Cumulative Sales ($)',
      data: [12000, 27000, 44000, 58000, 76000, 96000],
      borderColor: '#36A2EB',
      borderWidth: 2,
      fill: false,
    }]
  },
  options: {
    responsive: true,
    plugins: {
      tooltip: { enabled: true },
    },
  }
});


anime({
  targets: '.chart-container',
  opacity: [0, 1],
  translateY: [-50, 0],
  duration: 1000,
  easing: 'easeOutExpo',
  delay: anime.stagger(200, { start: 500 }),
});

document.getElementById('barChart').addEventListener('click', () => {
  barChart.data.datasets[0].data = [14000, 16000, 19000, 15000, 20000, 22000];
  barChart.update();
  anime({
    targets: barChart.canvas,
    scale: [0.9, 1],
    duration: 500,
    easing: 'easeOutElastic(1, .8)',
  });
});