import echarts from 'echarts';

export default function () {
    const options = {
        legend: {
            show: false
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
                    color: '#D8DDDE'
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
                    color: '#D8DDDE'
                }
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: 'rgba(216,221,222,.2)'
                }
            }
        }],
        series: [{
            name: '已签约',
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
            data: [19]
        }, {
            name: '未逾期未签约',
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
            name: '逾期未签约',
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
            data: [5]
        }
        ]
    };
    return options;
}
