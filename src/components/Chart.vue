<template>
    <div class="chart">
        <!-- <apexcharts width="500" type="bar" :options="chartOptions" :series="series"></apexcharts> -->
        <div :id="id"></div>
    </div>
</template>

<script>
import ApexCharts from 'apexcharts';
import VueApexCharts from 'vue-apexcharts';

export default {
    name: 'Chart',
    props: {
        id: '',
        optionChart: {}
    },
    data() {
        return {
            chart: {}
        };
    },
    mounted() {
        this.chart = new ApexCharts(
            document.querySelector(`#${this.id}`),
            this.optionChart
        );
        this.chart.render();
    },
    watch: {
        optionChart(optionChart) {
            // const option = options(data);
            this.chart.updateOptions(optionChart);
        }
    },
    beforeDestroy() {
        if (this.chart) {
            this.chart.destroy();
        }
    }
};
</script>

<style lang="less" scoped>
.chart {
}
</style>

