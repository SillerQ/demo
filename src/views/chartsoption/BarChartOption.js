import echarts from 'echarts';

export default function () {
    const data = [13.7, 13.4, 13.5, 18.1, 24.4, 20.2, 16];
    const options = {
        // backgroundColor: '#fff',
        title: {
            text: '',
            textStyle: {
                color: '#fff',
                fontSize: '22'
            },
            subtextStyle: {
                color: '#90979c',
                fontSize: '16'

            }
        },
        tooltip: {
            show: 'true',
            trigger: 'item',
            backgroundColor: 'rgba(0,0,0,0.7)', // 背景
            padding: [8, 10], // 内边距
            extraCssText: 'box-shadow: 0 0 3px rgba(255, 255, 255, 0.4);' // 添加阴影
            // formatter(params) {
            //     if (params.seriesName != '') {
            //         return `${params.name} ： 第 ${params.value} 名`;
            //     }
            // }

        },
        grid: {
            borderWidth: 0
            // top: 0,
            // left: 0,
            // right: 0,
            // bottom: 0
            // textStyle: {
            //     color: '#fff'
            // }
        },
        xAxis: [{
            type: 'category',
            axisTick: {
                show: false
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#D8DDDE',
                    width: 2
                }
            },
            axisLabel: {
                inside: false,
                textStyle: {
                    color: '#68728C',
                    fontWeight: 'normal',
                    fontSize: '12'
                }
                // formatter:function(val){
                //     return val.split("").join("\n")
                // },
            },
            data: ['华北', '华南', '华中', '华东', '区域1', '区域2', '区域3']
        }, {
            type: 'category',
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false
            },
            splitArea: {
                show: false
            },
            splitLine: {
                show: false
            }
            // data: [1, 1, 1, 1, 1, 1]
        }],
        yAxis: {
            type: 'value',
            axisTick: {
                show: false
            },
            axisLine: {
                show: false,
                lineStyle: {
                    color: '#32346c'
                }
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#F1F3F5 '
                }
            },
            axisLabel: {
                textStyle: {
                    color: '#68728C',
                    fontWeight: 'normal',
                    fontSize: '12'
                }
                // formatter: '{value}名'
            }
        },
        series: [{
            name: '%',
            type: 'bar',
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
                    barBorderRadius: 50,
                    borderWidth: 0
                },
                emphasis: {
                    shadowBlur: 15,
                    shadowColor: 'rgba(105,123, 214, 0.7)'
                }
            },
            zlevel: 2,
            barWidth: '30%',
            data
        },
        {
            name: '',
            type: 'bar',
            xAxisIndex: 1,
            zlevel: 1,
            itemStyle: {
                normal: {
                    color: '#EBEFF5',
                    barBorderRadius: 50,
                    borderWidth: 0,
                    shadowBlur: {
                        shadowColor: 'rgba(255,255,255,0.31)',
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowOffsetY: 2
                    }
                }
            },
            barWidth: '30%',
            data: [30, 30, 30, 30, 30, 30, 30]
        }
        ]
    };
    return options;
}
