export default function () {
    const option = {
        // title: {
        //     text: '业绩分布',
        //     x: 'center',
        //     y: 'bottom',
        //     padding: 40,
        //     textStyle: {
        //         fontSize: 16,
        //         fontWeight: 'normal',
        //         color: '#81868D'
        //     }
        // },
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
            show: false,
            orient: 'vertical',
            x: 'left',
            data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
        },
        color: ['#6D77E4', '#8a8fed', '#a7abf2', '#c5c8f6', '#d4d6f9', '#f1f2fe'],
        series: [{
            name: '区域',
            type: 'pie',
            radius: ['36%', '70%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: [{
                value: 1548
            },
            {
                value: 310
            },
            {
                value: 234
            },
            {
                value: 135
            },
            {
                value: 335
            }
            ]
        }]
    };
    return option;
}
