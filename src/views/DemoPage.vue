<template>
  <div class="home" :class="theme ? 'light':'dark'" style="width: 100%;">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <header class="header">
        <div class="left">
            <img class="logo" src="../assets/logo.svg">
        </div>
        <div class="right">
            <a class="user">
                <i class="avatar"></i>
                Administrator
                <span class="icon-down"></span>
            </a>
            <a class="msg"><span class="tips">通知</span></a>
            <a class="theme-btn" @click="switchTheme"><span class="tips">Dark</span></a>
        </div>
    </header>
    <!-- <button @click="updateData">Update Data</button> -->
    <main class="container">
        <div class="row">
            <div class="card height flex-w-4 clear-bor">
                <Title title="年度任务" class="clear-border"/>
                <div class="ov-img">
                    <img src="../assets/overview.svg" v-show="theme">
                    <img src="../assets/ov-dark.svg" v-show="!theme">
                    </div>
                <div class="chart-position">
                    <div id="areaChart" style="width: 100%; height:260px; margin: auto"></div>
                </div>
            </div>

            <div class="card height flex-w-6">
                <Title title="业绩分布"/>
                <div class="column-inline">
                    <div id="pieChart" class="flex-w-36" style="height:100%; width: 100%; margin: auto;"></div>
                    <div id="barChart" class="flex-w-64" style="height:100%; width: 100%; margin: auto;"></div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="card height flex-w-5">
                <Title title="签约比例"/>
                <div class="inline">
                    <div id="stackBarChart" class="flex-w-5" style="height:340px; width: 180px; margin: auto;"></div>
                    <div class="desc flex-w-5">
                        <div>
                            <p class="item"><span><em class="point"></em>已签约</span><i class="icon"></i></p>
                            <p class="text-view"><span>200 亿元</span><span>150 万 ㎡</span></p>
                        </div>
                        <div class="margin-tb">
                            <p class="item cyan"><span><em class="point point-cyan"></em>未逾期未签约</span></p>
                            <p class="text-view"><span>50 亿元</span><span>30 万 ㎡</span></p>
                        </div>
                        <div>
                            <p class="item org"><span><em class="point point-org"></em>逾期未签约</span></p>
                            <p class="text-view"><span>5 亿元</span><span>10 万 ㎡</span></p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card height flex-w-5 clear-bor">
                <div class="bgcolor-between">
                    <div class="purple chart-con">
                        <div class="tit">
                            <p>库存总量</p>
                            <span>1400 万㎡<i class="arrow"></i></span>
                        </div>
                        <div class="chart-position" style="height: 200px;" id='chartSipArea1'></div>
                    </div>
                    <div class="cyan chart-con">
                        <div class="tit">
                            <p>已推未销量</p>
                            <span>600 万㎡</span>
                        </div>
                        <div class="chart-position" style="height: 200px" id='chartSipArea2'></div>                    </div>
                </div>
            </div>
        </div>

        <div class="card clear-margin-bom">
            <Title title="签约统计"/>
            <Table :listData="tableList"/>
        </div>
    </main>

  </div>
</template>

<script>
// @ is an alias to /src
import Title from '@/components/Title.vue';
import './demo.less';
import Table from '@/components/Table.vue';
import echarts from 'echarts';
import optionArea from './chartsoption/AreaChartOption';
import optionPie from './chartsoption/PieChartOption';
import optionBar from './chartsoption/BarChartOption';
import optionStackBar from './chartsoption/StackBarChartOption';
import optionAreaSip from './chartsoption/AreaSipChartOption';
import optionAreaDark from './chartsoptiondark/AreaChartOption';
import optionPieDark from './chartsoptiondark/PieChartOption';
import optionBarDark from './chartsoptiondark/BarChartOption';
import optionStackBarDark from './chartsoptiondark/StackBarChartOption';
import optionAreaSipDark from './chartsoptiondark/AreaSipChartOption';

export default {
    name: 'demopage',
    data() {
        return {
            data: [301, 400, 355, 50, 49, 60, 70, 91, 100],
            areaChart: {},
            pieChart: {},
            barChart: {},
            areaSipChart1: {},
            areaSipChart2: {},
            stackBarChart: {},
            lineOptionData: {},
            donutOptionData: {},
            areaOptionData: {},
            areaSipOptionData: {},
            barOptionData: {},
            stackBarOptionData: {},
            theme: true,
            show: true,
            tableList: [
                {
                    tit: '华北分公司',
                    a: 20000,
                    b: 200,
                    c: 2647,
                    d: 897
                },
                {
                    tit: '华南分公司',
                    a: 20000,
                    b: 200,
                    c: 2647,
                    d: 897
                },
                {
                    tit: '华中分公司',
                    a: 20000,
                    b: 200,
                    c: 2647,
                    d: 897
                },
                {
                    tit: '华东分公司',
                    a: 20000,
                    b: 200,
                    c: 2647,
                    d: 897
                },
                {
                    tit: '区域1',
                    a: 20000,
                    b: 200,
                    c: 2647,
                    d: 897
                }
            ],
            theme: ''
        };
    },
    created() {
        // this.lineOptionData = optionLine(this.data);
        // this.donutOptionData = optionDonut([44, 55, 41, 17, 15]);
        // this.areaOptionData = optionArea([14, 16, 20, 24, 31, 40, 42]);
        // this.areaSipOptionData = optionAreaSip([
        //     45,
        //     100,
        //     208,
        //     236,
        //     398,
        //     400,
        //     470
        // ]);
        // this.barOptionData = optionBar([450, 540, 580, 690, 1100, 1200, 1380]);
        // this.stackBarOptionData = optionStackBar([]);
        // console.log(this.donutOptionData);
    },
    mounted() {
        this.theme = true;
        this.areaChart = echarts.init(document.getElementById('areaChart'));
        window.addEventListener('resize', this.areaChart.resize);
        // this.areaChart.setOption(optionArea());

        this.pieChart = echarts.init(document.getElementById('pieChart'));
        window.addEventListener('resize', this.pieChart.resize);
        // this.pieChart.setOption(optionPie());

        this.barChart = echarts.init(document.getElementById('barChart'));
        window.addEventListener('resize', this.barChart.resize);
        // this.barChart.setOption(optionBar());

        this.stackBarChart = echarts.init(
            document.getElementById('stackBarChart')
        );
        window.addEventListener('resize', this.stackBarChart.resize);
        // this.stackBarChart.setOption(optionStackBar());

        this.areaSipChart1 = echarts.init(
            document.getElementById('chartSipArea1')
        );
        window.addEventListener('resize', this.areaSipChart1.resize);
        // this.areaSipChart1.setOption(optionAreaSip());

        this.areaSipChart2 = echarts.init(
            document.getElementById('chartSipArea2')
        );
        window.addEventListener('resize', this.areaSipChart2.resize);
        // this.areaSipChart2.setOption(optionAreaSip());
    },
    components: {
        Title,
        Table
    },
    methods: {
        switchTheme() {
            this.theme = !this.theme;
        }
    },
    watch: {
        theme(theme) {
            console.log(theme);
            if (theme) {
                this.areaChart.setOption(optionArea());
                this.pieChart.setOption(optionPie());
                this.barChart.setOption(optionBar());
                this.stackBarChart.setOption(optionStackBar());
                this.areaSipChart1.setOption(optionAreaSip());
                this.areaSipChart2.setOption(optionAreaSip());
            } else {
                this.areaChart.setOption(optionAreaDark());
                this.pieChart.setOption(optionPieDark());
                this.barChart.setOption(optionBarDark());
                this.stackBarChart.setOption(optionStackBarDark());
                this.areaSipChart1.setOption(optionAreaSipDark());
                this.areaSipChart2.setOption(optionAreaSipDark());
            }
        }
    }
};
</script>

<style lang="less" scoped>
</style>

