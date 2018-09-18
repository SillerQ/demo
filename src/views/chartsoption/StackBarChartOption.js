import echarts from 'echarts';

export default function () {
    const options = {
        legend: {
            show: false,
            data: ['女生', '男生']

        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        grid: {
            containLabel: true,
            top: '16%'
            // bottom: '0%'
        },
        xAxis: [{
            type: 'category',
            data: [''],
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
            axisLabel: {
                textStyle: {
                    color: '#68728C'
                }
            }
        }],
        yAxis: [{
            type: 'value',
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                textStyle: {
                    color: '#68728C'
                }
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#F1F3F5 '
                }
            }
        }],
        series: [{
            name: '男生',
            type: 'bar',
            stack: '总量',
            barWidth: '24%',
            itemStyle: {
                normal: {
                    show: true,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#6D77E4'
                    }, {
                        offset: 1,
                        color: '#A0A6EE'
                    }]),
                    borderWidth: 0
                }
            },
            data: [10]
        }, {
            name: '女生',
            type: 'bar',
            stack: '总量',
            barWidth: '24%',
            itemStyle: {
                normal: {
                    show: true,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#7ADDF7'
                    }, {
                        offset: 1,
                        color: '#57CFEE'
                    }]),
                    borderWidth: 0
                }
            },
            data: [12]
        },
        {
            name: '人妖',
            type: 'bar',
            stack: '总量',
            barWidth: '24%',
            itemStyle: {
                normal: {
                    show: true,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#FBBE77'
                    }, {
                        offset: 1,
                        color: '#FFCD92'
                    }]),
                    borderWidth: 0
                }
            },
            data: [16]
        }
        ]
    };
    return options;
}
