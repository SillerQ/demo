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
        <div class="content">
            <grid-layout :layout="layout"
                            :col-num="12"
                            :row-height="30"
                            :is-draggable="true"
                            :is-resizable="false"
                            :vertical-compact="true"
                            :use-css-transforms="true"
                            id="gridlayout2">
                <grid-item :x="layout[0].x"
                            :y="layout[0].y"
                            :w="layout[0].w"
                            :h="layout[0].h"
                            :i="layout[0].i"
                            drag-allow-from=".vue-draggable-handle"
                            drag-ignore-from=".no-drag"
                            @move="moveEvent"
                            @moved="movedEvent">
                        <div class="vue-draggable-handle"></div>
                        <div class="no-drag">
                            <Title title="年度任务"/>
                            <div class="overview">
                                <div>
                                    <div class="left">
                                        <p class="text-span">3,000 亿元</p>
                                        <p class="text-span">目标金额</p>
                                    </div>
                                    <div class="center">
                                        <div class="progress"></div>
                                    </div>
                                </div>
                                <div class="right">
                                    <p class="big-text"><em>1,890</em>亿元</p>
                                    <p class="block-span">累计金额</p>
                                </div>
                            </div>
                            <Chart id='areaChart1' class="chart-position" :optionChart="areaOptionData" />
                    </div>
                </grid-item>
                <grid-item :x="layout[1].x"
                            :y="layout[1].y"
                            :w="layout[1].w"
                            :h="layout[1].h"
                            :i="layout[1].i"
                            drag-allow-from=".vue-draggable-handle"
                            drag-ignore-from=".no-drag">
                        <div class="vue-draggable-handle"></div>
                        <div class="no-drag">
                            <Title title="业绩分布"/>
                            <div class="">
                                <div class="inline-box around column-1200">
                                    <div class="">
                                        <Chart class="mar-left-12" style="width: 260px;" id='donutChart2' :optionChart="donutOptionData" />
                                    </div>
                                    <div class="">
                                        <Chart id="chart3" style="width: 445px;" :optionChart="barOptionData" />
                                    </div>
                                </div>
                            </div>
                    </div>
                </grid-item>
                <grid-item :x="layout[2].x"
                            :y="layout[2].y"
                            :w="layout[2].w"
                            :h="layout[2].h"
                            :i="layout[2].i"
                            drag-allow-from=".vue-draggable-handle"
                            drag-ignore-from=".no-drag">
                        <div class="vue-draggable-handle"></div>
                        <div class="no-drag">
                            <Title title="签约比例"/>
                            <div class="inline-box around full-height auto-padding">
                                <Chart id='lineChart3' :optionChart="stackBarOptionData" />
                                <div class="desc width50">
                                    <div>
                                        <p class="item"><span><em class="point"></em>已签约</span><i class="icon"></i></p>
                                        <p class="text-view"><span>2,000 亿元</span><span>1,500 万 ㎡</span></p>
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
                </grid-item>
                <grid-item :x="layout[3].x"
                            :y="layout[3].y"
                            :w="layout[3].w"
                            :h="layout[3].h"
                            :i="layout[3].i"
                            drag-allow-from=".vue-draggable-handle"
                            drag-ignore-from=".no-drag">
                    <div class="text">
                        <div class="vue-draggable-handle"></div>
                        <div class="no-drag">
                            <div class="full-height around bgcolor-between">
                                <div class="purple chart-con">
                                    <div class="tit">
                                        <p>库存总量</p>
                                        <span>1400 万㎡</span>
                                    </div>
                                    <Chart class="chart-position" style="width= 50%" id='chartSipArea1' :optionChart="areaSipOptionData" />
                                </div>
                                <div class="cyan chart-con">
                                    <div class="tit">
                                        <p>已推未销量</p>
                                        <span>600 万㎡</span>
                                    </div>
                                    <Chart class="chart-position" style="width= 50%" id='chartSipArea2' :optionChart="areaSipOptionData" />
                                </div>
                            </div>
                        </div>
                    </div>
                </grid-item>
                <grid-item :x="layout[4].x"
                            :y="layout[4].y"
                            :w="layout[4].w"
                            :h="layout[4].h"
                            :i="layout[4].i"
                            drag-allow-from=".vue-draggable-handle"
                            drag-ignore-from=".no-drag">
                    <div class="text">
                        <div class="vue-draggable-handle"></div>
                        <div class="no-drag">
                            <Title title="签约统计"/>
                            <Table :listData="tableList"/>
                        </div>
                    </div>
                </grid-item>
            </grid-layout>
        </div>
    <div class="layoutJSON">
                Displayed as <code>[x, y, w, h]</code>:
                <div class="columns">
                    <div class="layoutItem" v-for="item in layout" :key="item.i + 'json'">
                        <b>{{item.i}}</b>: [{{item.x}}, {{item.y}}, {{item.w}}, {{item.h}}]
                    </div>
                </div>
            </div>
    <!-- <button @click="updateData">Update Data</button> -->

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import Title from '@/components/Title.vue';
import Chart from '@/components/Chart.vue';
import Table from '@/components/Table.vue';
import optionLine from './LineChartOption';
import optionDonut from './DonutChartOption';
import optionArea from './AreaChartOption';
import optionAreaSip from './AreaSipChartOption';
import optionBar from './BarChartOption';
import optionStackBar from './StackBarChartOption';

// import Container and Box components
import { Container, Box } from '@dattn/dnd-grid';
// minimal css for the components to work properly
// import '@dattn/dnd-grid/dist/dnd-grid.css';

import VueGridLayout from 'vue-grid-layout';

export default {
    name: 'home',
    data() {
        return {
            data: [301, 400, 355, 50, 49, 60, 70, 91, 100],
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
            layout: [
                {
                    x: 0,
                    y: 0,
                    w: 5,
                    h: 12,
                    i: '0'
                },
                {
                    x: 5,
                    y: 0,
                    w: 7,
                    h: 12,
                    i: '1'
                },
                {
                    x: 0,
                    y: 10,
                    w: 6,
                    h: 12,
                    i: '2'
                },
                {
                    x: 6,
                    y: 10,
                    w: 6,
                    h: 12,
                    i: '3'
                },
                {
                    x: 0,
                    y: 24,
                    w: 12,
                    h: 10,
                    i: '4'
                }
            ],
            eventLog: []
        };
    },
    created() {
        this.lineOptionData = optionLine(this.data);
        this.donutOptionData = optionDonut([44, 55, 41, 17, 15]);
        this.areaOptionData = optionArea([14, 16, 20, 24, 31, 40, 42]);
        this.areaSipOptionData = optionAreaSip([
            45,
            100,
            208,
            236,
            398,
            400,
            470
        ]);
        this.barOptionData = optionBar([450, 540, 580, 690, 1100, 1200, 1380]);
        this.stackBarOptionData = optionStackBar([]);

        // console.log(this.donutOptionData);
    },
    mounted() {
        const that = this;
        let windowWhidth = 0;
        const initWhidth =
                document.body.offsetWidth || document.body.clientHeight;
        this.listenerWidth(initWhidth, this);
        window.addEventListener('resize', () => {
            console.log('resize');
            windowWhidth =
                document.body.offsetWidth || document.body.clientHeight;
            that.listenerWidth(windowWhidth, that);
        });
    },
    components: {
        HelloWorld,
        Chart,
        Title,
        Table,
        DndGridContainer: Container,
        DndGridBox: Box
    },
    methods: {
        switchTheme() {
            this.theme = !this.theme;
        },
        updateData() {
            this.data = [30, 40, 266, 345, 49, 34534, 70, 4534, 83993];
            this.lineOptionData = optionLine(this.data);
        },
        moveEvent(i, newX, newY) {
            const msg = `MOVE i=${i}, X=${newX}, Y=${newY}`;
            this.eventLog.push(msg);
            console.log(msg);
        },
        movedEvent(i, newX, newY) {
            const msg = `MOVED i=${i}, X=${newX}, Y=${newY}`;
            this.eventLog.push(msg);
            console.log(msg);
        },
        listenerWidth(windowWhidth, that) {
            if (windowWhidth >= 1440) {

            }
            if (windowWhidth >= 1024) {
                // that.show = false;
                that.layout = [
                    {
                        x: 0,
                        y: 0,
                        w: 5,
                        h: 12,
                        i: '0'
                    },
                    {
                        x: 5,
                        y: 0,
                        w: 7,
                        h: 12,
                        i: '1'
                    },
                    {
                        x: 0,
                        y: 10,
                        w: 6,
                        h: 12,
                        i: '2'
                    },
                    {
                        x: 6,
                        y: 10,
                        w: 6,
                        h: 12,
                        i: '3'
                    },
                    {
                        x: 0,
                        y: 24,
                        w: 12,
                        h: 10,
                        i: '4'
                    }
                ];
            } else if (windowWhidth >= 812) {
                that.layout = [
                    {
                        x: 0,
                        y: 0,
                        w: 12,
                        h: 11,
                        i: '5'
                    },
                    {
                        x: 0,
                        y: 0,
                        w: 12,
                        h: 12,
                        i: '6'
                    },
                    {
                        x: 0,
                        y: 0,
                        w: 12,
                        h: 12,
                        i: '7'
                    },
                    {
                        x: 0,
                        y: 0,
                        w: 12,
                        h: 12,
                        i: '8'
                    },
                    {
                        x: 0,
                        y: 0,
                        w: 12,
                        h: 10,
                        i: '9'
                    }
                ];
            }
        }
    },
    watch: {
        layout(layout) {
            this.lineOptionData = optionLine(this.data);
            this.donutOptionData = optionDonut([44, 55, 41, 17, 15]);
            this.areaOptionData = optionArea([14, 16, 20, 24, 31, 40, 42]);
            // this.areaSipOptionData = optionAreaSip([
            //     45,
            //     100,
            //     208,
            //     245,
            //     398,
            //     400,
            //     470
            // ]);
            this.barOptionData = optionBar([
                450,
                540,
                580,
                690,
                1100,
                1200,
                1380
            ]);
            this.stackBarOptionData = optionStackBar([]);
        }
    }
};
</script>

<style lang="less" scoped>
.container {
    padding: 0 2em 2em;
    overflow: hidden;
}

.inline-box {
    display: flex;
    align-items: center;
}
.around {
    justify-content: space-around;
}
.full-height {
    display: flex;
    height: 100%;
}
.chart-position {
    position: absolute;
    bottom: -40px;
    left: -20px;
    width: 100%;
}
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 120px;
    padding: 0 2em;
    color: #30384a;
    font-size: 0.9rem;
    font-size: 14px;
    .left {
        .logo {
            display: block;
            width: 242px;
            height: auto;
        }
    }
    .right {
        display: flex;
        align-items: center;
        justify-content: center;
        a {
            cursor: pointer;
        }
        .user {
            display: flex;
            align-items: center;
            // justify-content: center;
            .avatar {
                width: 36px;
                height: 36px;
                border-radius: 100%;
                background-image: url('../assets/avatar.svg');
                background-repeat: no-repeat;
                background-position: center center;
                background-size: 100% 100%;
                margin-right: 16px;
            }
            .icon-down {
                width: 24px;
                height: 24px;
                border-radius: 100%;
                background-image: url('../assets/down-arrow.svg');
                background-repeat: no-repeat;
                background-position: center 10px;
                background-size: 9px 6px;
            }
        }
        .msg {
            position: relative;
            width: 36px;
            height: 36px;
            border-radius: 100%;
            background-image: url('../assets/bell.svg');
            background-repeat: no-repeat;
            background-position: center center;
            background-size: 16px 16px;
            transition: all 0.2s;
            .tips {
                position: absolute;
                top: -80%;
                left: 0px;
                background-color: black;
                padding: 1px 4px;
                border-radius: 4px;
                opacity: 0;
                transition: all 0.3s;
                color: #fff;
            }
            &:hover {
                background-color: #ceced6;
                .tips {
                    opacity: 1;
                }
            }
        }
        .theme-btn {
            position: relative;
            width: 36px;
            height: 36px;
            border-radius: 100%;
            background-image: url('../assets/theme.svg');
            background-repeat: no-repeat;
            background-position: center center;
            background-size: 16px 16px;
            transition: all 0.2s;
            .tips {
                position: absolute;
                top: -80%;
                left: 0px;
                background-color: black;
                padding: 1px 4px;
                border-radius: 4px;
                opacity: 0;
                transition: all 0.3s;
                color: #fff;
            }
            &:hover {
                background-color: #ceced6;
                .tips {
                    opacity: 1;
                }
            }
        }
    }
}
.overview {
    padding: 1em 2em;
    position: relative;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    & > div {
        display: flex;
    }
    .left {
        .text-span {
            font-size: 1rem;
            margin-top: 12px;
        }
        .big-text {
            font-size: 1.2rem;
            position: relative;
            top: -8px;
        }
        em {
            font-style: normal;
            color: #c7a27b;
            font-weight: 600;
            // line-height: 34px;
            font-size: 1.5rem;
            margin-right: 16px;
        }
    }
    .center {
        margin: 0 4em;
        display: flex;
        align-items: flex-end;
        .progress {
            max-width: 218px;
            position: relative;
            top: -6px;
            &::before {
                content: '';
                display: block;
                position: relative;
                background-color: #ebeff5;
                border-radius: 22px;
                width: 218px;
                height: 18px;
            }
            &::after {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                background: linear-gradient(-90deg, #6d77e4 0%, #a0a6ee 100%);
                border-radius: 24px;
                // transform: rotate(90deg);
                width: 160px;
                height: 18px;
            }
        }
    }
    .right {
        margin-top: 4px;
        // text-align: right;
        display: block;
        .block-span {
            display: inline-block;
            background: #c7a27b;
            border-radius: 4px;
            color: white;
            padding: 0 4px;
            font-size: 0.9rem;
            line-height: 1.6;
        }
        .big-text {
            font-style: normal;
            font-size: 1.4rem;
            margin-bottom: 8px;
        }
        em {
            font-style: normal;
            color: #c7a27b;
            font-weight: 600;
            // line-height: 34px;
            font-size: 1.5rem;
            margin-right: 16px;
        }
    }
}
.bgcolor-between {
    .purple,
    .cyan {
        overflow: hidden;
        width: 50%;
        height: 100%;
        .tit {
            color: white;
            font-size: 1.6rem;
            text-align: left;
            padding: 0 2em;
            p {
                border-bottom: 1px solid #ffffff;
                padding: 1.4em 0;
                font-size: 1.2rem;
                margin-bottom: 1.4em;
            }
            span {
                font-weight: 600;
            }
        }
    }
    .purple {
        background-color: #8c93e5;
    }
    .cyan {
        background-color: #57cfee;
    }
}
.width3 {
    width: 30%;
}
.width4 {
    width: 35%;
}
.width50 {
    width: 50%;
}
.width6 {
    width: 65%;
}
.width7 {
    width: 70%;
}

.chart-con {
    position: relative;
}
.chart-fillfull {
    position: absolute;
    position: relative;
    left: 0;
    bottom: 0;
    width: 100%;
    overflow: hidden;
}
.btm {
    bottom: -38px;
}

.desc {
    // display: flex;
    // flex-direction: column;
    // justify-content: center;
    // align-items: center;
    // flex: 1;
    // height: 100%;
    // max-width: 280px;
    margin: 0 0.8em;
    .margin-tb {
        margin: 3.6em 0;
    }
    .item {
        background-color: #6d77e41a;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 0.4em;
        span {
            display: flex;
            align-items: center;
        }
    }
    .text-view {
        display: flex;
        justify-content: space-between;
        font-size: 1.4rem;
        margin-top: 16px;
    }
    .cyan {
        background-color: #57ceee1a;
    }
    .org {
        background-color: #fbbe771a;
    }
    .point {
        background-color: #6d77e4;
        width: 10px;
        height: 10px;
        border-radius: 10px;
        margin-right: 4px;
    }
    .point-cyan {
        background-color: #57cfee;
    }
    .point-org {
        background-color: #fbbe77;
    }
    .icon {
        width: 12px;
        height: 12px;
        background-image: url('../assets/purple-arrow.svg');
        background-repeat: no-repeat;
        background-position: center center;
        background-size: 100% 100%;
        display: flex;
    }
}
.wrap-box {
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(100% - 48px);
    margin: 0 2em;
    .inline-box {
        flex: 1;
        justify-content: space-between;
        padding: 0 0em;
        & > div {
            width: 50%;
        }
    }
}
// .apexcharts-toolbar {
//     opacity: 0;
// }
// #app .apexcharts-toolbar {
//     opacity: 0;
// }
.column-1200{
    position: relative;
    bottom: -16px;
}
@media (max-width: 1200px) {
    // .column-1200 {
    //     flex-direction: column;
    // }
}
@media (max-width: 1024px) {
    .container {
        padding: 0 1em;
    }
    .wrapper,
    .wrapper2,
    .full-block {
        margin-bottom: 1em;
        grid-template-columns: 1fr;
        grid-row-gap: 1em;
        grid-column-gap: 0em;
    }
    .wrap-box {
        .inline-box {
            flex-direction: column;
            flex: 1;
            align-items: center;
            justify-content: center;
            div {
                width: 100%;
            }
            .width4,
            .width6 {
                display: flex;
                align-items: center;
                justify-content: center;
            }
        }
    }
    .desc {
        padding-bottom: 1em;
    }
    .mar-left-12 {
        margin-left: 3.2em;
    }
}
@media (max-width: 820px) {
    .header {
        .right {
            .user {
                display: none;
            }
        }
    }
    .container {
        padding: 0 1em;
    }
    .wrapper,
    .wrapper2,
    .full-block {
        margin-bottom: 1em;
        grid-template-columns: 1fr;
        grid-row-gap: 1em;
        grid-column-gap: 0em;
    }
    .wrap-box {
        margin: 0;
        .inline-box {
            flex-direction: column;
            flex: 1;
            div {
                width: 100%;
            }

            // padding: 0 2em;
        }
    }
    .column-1200 {
        flex-direction: column;
    }
}
@media (max-width: 414px) {
    #app {
        font-size: 6px;
    }
}

@media (min-width: 1024) {
    .apexcharts-toolbar {
        opacity: 0;
    }
}
</style>

