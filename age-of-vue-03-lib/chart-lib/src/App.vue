<template>
    <div>
        <h1>Chart.js</h1>
        <BarChart></BarChart>
        <LineChart></LineChart>
    </div>
</template>

<script>
import BarChart from "./components/BarChart";
import LineChart from "./components/LineChart";
export default {
    components: {
        BarChart,
        LineChart
    }
}
</script>

<style scoped>

</style>