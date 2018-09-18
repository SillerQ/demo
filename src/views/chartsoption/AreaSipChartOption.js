export default function () {
    const options = {
        title: {
            show: false,
            text: '请求数',
            textStyle: {
                fontWeight: 'normal',
                fontSize: 16,
                color: '#F1F1F3'
            },
            left: '6%'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                lineStyle: {
                    color: '#e4eaf5'
                }
            }
        },
        legend: {
            show: false
        },
        grid: {
            left: '-60%',
            right: '0%',
            bottom: '0%',
            containLabel: true
        },
        xAxis: [{
            show: false,
            type: 'category',
            boundaryGap: false,
            axisLine: {
                lineStyle: {
                    color: '#6d77e4'
                }
            },
            data: ['13:00', '13:05', '13:10', '13:15', '13:20', '13:25', '13:30', '13:35']
        }],
        yAxis: [{
            show: false,
            type: 'value',
            name: '单位（%）',
            axisTick: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: '#57617B'
                }
            },
            axisLabel: {
                margin: 10,
                textStyle: {
                    fontSize: 14
                }
            },
            splitLine: {
                lineStyle: {
                    color: '#6d77e4'
                }
            }
        }],
        series: [{
            name: '完成量',
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 5,
            showSymbol: false,
            silent: true,
            barWidth: '50%',
            barGap: 0,
            lineStyle: {
                normal: {
                    width: 3
                }
            },
            areaStyle: {
                normal: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0,
                            color: 'rgba(255,255,255,.6)'
                        }, {
                            offset: 1,
                            color: 'rgba(255,255,255,0)'
                        }]
                    },
                    // shadowBlur: 25,
                    shadowColor: '#6d77e4',
                    shadowOffsetX: 0,
                    // shadowOffsetY: -10,
                    opacity: 0.8
                }
            },
            itemStyle: {
                normal: {
                    color: '#fff'
                },
                emphasis: {
                    color: 'rgb(0,196,132)',
                    borderColor: 'rgba(0,196,132,0.2)',
                    // extraCssText: 'box-shadow: 8px 8px 8px rgba(0, 0, 0, 1);',
                    borderWidth: 10
                }
            },
            data: [125, 182, 191, 134, 210, 240, 150, 125]
        }]
    };
    return options;
}
