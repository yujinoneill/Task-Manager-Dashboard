const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Done', 'Not yet'],
        datasets: [{
            label: 'April Plan Progress',
            data: [60, 40],
            backgroundColor: [
                '#A3CEF1',
                '#E7ECEF'
            ],
            hoverOffset: 4
        }]
    }
});