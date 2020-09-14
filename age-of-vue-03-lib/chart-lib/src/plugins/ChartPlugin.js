import Chart from 'chart.js';

export default {
    install(Vue) {
        // console.log('chart plugin loaded');

        Vue.prototype.$_Chart = Chart;



        //ex import Chart from 'chart.js'; 대신 이렇게 불러서 쓸 수 있음.
        //// BarChart.vue
        // this.$_Chart

        //// LineChart.vue
        // this.$_Chart



    }
}