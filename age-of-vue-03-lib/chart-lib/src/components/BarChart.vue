<template>
    <div>
        <canvas ref="barChart" id="barChart" width="400" height="400"></canvas>
    </div>
</template>

<script>
// import Chart from "chart.js";

export default {
    props: [ 'propsData' ],
    // mounted 안에 선언한 이유는 ctx = doucment. ~~~ 부분에 document로 선언해 놓은 부분때문이다. 돔이 만들어 진 후에 선언이 되어야 해서 그렇다
    mounted() {
        // var ctx = document.getElementById('barChart');
        var ctx = this.$refs.barChart;
        // var myChart = new Chart(ctx, {
        var myChart = new this.$_Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                datasets: this.propsData
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });
    }
}
</script>

<style scoped>

</style>