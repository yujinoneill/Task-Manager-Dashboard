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

const check1 = document.querySelector("#check1");
const check2 = document.querySelector("#check2");
const check3 = document.querySelector("#check3");
const check4 = document.querySelector("#check4");

check1.addEventListener("change", function () {
    if (check1.checked == true) {
        alert("You did a good job!");
    }
})

check2.addEventListener("change", function () {
    if (check2.checked == true) {
        alert("You did a good job!");
    }
})

check3.addEventListener("change", function () {
    if (check3.checked == true) {
        alert("You did a good job!");
    }
})

check4.addEventListener("change", function () {
    if (check4.checked == true) {
        alert("You did a good job!");
    }
})




