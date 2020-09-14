<template>
    <div>
        <canvas id="lineChart"></canvas>
    </div>
</template>

<script>
import Chart from "chart.js";

export default {
    // mounted 안에 선언한 이유는 ctx = doucment. ~~~ 부분에 document로 선언해 놓은 부분때문이다. 돔이 만들어 진 후에 선언이 되어야 해서 그렇다
    mounted() {
        var ctx = document.getElementById('lineChart').getContext('2d');
        var chart = new Chart(ctx, {
            // The type of chart we want to create
            type: 'line',

            // The data for our dataset
            data: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [{
                    label: 'My First dataset',
                    backgroundColor: 'rgb(255, 99, 132)',
                    borderColor: 'rgb(255, 99, 132)',
                    data: [0, 10, 5, 2, 20, 30, 45]
                }]
            },

            // Configuration options go here
            options: {}
        });
    }
}
</script>

<style scoped>

</style>