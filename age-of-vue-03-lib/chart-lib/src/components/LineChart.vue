<template>
    <div>
        <canvas ref="lineChart" id="lineChart"></canvas>
    </div>
</template>

<script>
// import Chart from "chart.js";

export default {
    // mounted 안에 선언한 이유는 ctx = doucment. ~~~ 부분에 document로 선언해 놓은 부분때문이다. 돔이 만들어 진 후에 선언이 되어야 해서 그렇다
    mounted() {
        // var ctx = document.getElementById('lineChart').getContext('2d');
        var ctx = this.$refs.lineChart.getContext('2d');

        // refs는 컴포넌트 안에서만 접근이 가능하기 때문에 안전하다
        // dom 셀렉터는 다른 컴포넌트에서도 접근가능

        // var chart = new Chart(ctx, {
        var chart = new this.$_Chart(ctx, {

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