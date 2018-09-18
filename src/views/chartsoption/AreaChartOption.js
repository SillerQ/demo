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
                    color: '#57617B'
                }
            },
            formatter(prams) {
                if (prams[0].data === 20) {
                    return '合格率：0%';
                } else {
                    return '合格率：' + 100 + '%';
                }
            }
        },
        legend: {
            show: false,
            icon: 'rect',
            itemWidth: 14,
            itemHeight: 5,
            itemGap: 13,
            data: ['移动', '电信', '联通'],
            right: '4%',
            textStyle: {
                fontSize: 12,
                color: '#292f39'
            }
        },
        grid: {
            top: '0%',
            left: '-0%',
            right: '0%',
            bottom: '-50%',
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
            type: 'value',
            name: '单位（%）',
            axisTick: {
                show: false
            },
            axisLine: {
                show: false,
                lineStyle: {
                    color: '#57617B',
                    opacity: 0
                }
            },
            axisLabel: {
                // margin: 50,
                show: false,
                textStyle: {
                    fontSize: 14,
                    color: 'pink'
                    // align: 'right',
                    // margin: 10
                }
            },
            splitLine: {
                show: false,
                lineStyle: {
                    color: '#6d77e4'
                }
            }
        }],
        series: [{
            name: '占位背景',
            type: 'bar',
            itemStyle: {
                normal: {
                    show: true,
                    color: '#EBEFF5',
                    opacity: 0.6
                }
            },
            barWidth: '50%',
            barGap: 0,
            zlevel: 9,
            data: [250, 250, 250, 250, 250, 250, 250, 250],
            animation: false
        }, {
            name: '完成量',
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 5,
            showSymbol: false,
            silent: true,
            barWidth: '50%',
            barGap: 0,
            zlevel: 11,
            lineStyle: {
                normal: {
                    width: 4
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
                            color: 'rgba(112,122,229,.6)'
                        }, {
                            offset: 1,
                            color: 'rgba(112,122,229,0)'
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
                    color: '#6D77E4'
                },
                emphasis: {
                    color: 'rgb(0,196,132)',
                    borderColor: 'rgba(0,196,132,0.2)',
                    // extraCssText: 'box-shadow: 8px 8px 8px rgba(0, 0, 0, 1);',
                    borderWidth: 10
                }
            },
            data: [165, 170, 172, 174, 180, 188, 192, 198]
        }]
    };
    return options;
}