export default function (data) {
    const option = {
        // annotations: {
        //     points: [{
        //         x: 'Bananas',
        //         seriesIndex: 0,
        //         label: {
        //             borderColor: '#775DD0',
        //             offsetY: 0,
        //             style: {
        //                 color: '#fff',
        //                 background: '#775DD0'
        //             },
        //             text: 'Bananas are good'
        //         }
        //     }]
        // },
        chart: {
            height: 300,
            type: 'bar',
            stackType: '100%',
            foreColor: '#68728C'
        },
        colors: '#6D77E4',
        plotOptions: {
            bar: {
                columnWidth: '30%',
                endingShape: 'rounded',
                colors: {
                    ranges: {
                        from: 1,
                        to: 0,
                        color: '#6D77E4'
                    },
                    backgroundBarColors: ['#EBEFF5'],
                    backgroundBarOpacity: 1
                }
            }
        },
        fill: {
            colors: ['#6D77E4'],
            opacity: 0.7,
            type: 'solid',
            gradient: {
                // shade: 'dark',
                type: 'diagonal2',
                // shadeIntensity: 0.5,
                gradientToColors: '#6D77E4',
                inverseColors: true,
                opacityFrom: 1,
                opacityTo: 0,
                stops: [50, 0, 100]
            }
            // pattern: {
            //     style: 'verticalLines',
            //     width: 6,
            //     height: 6,
            //     strokeWidth: 2,
            // },
        },
        dataLabels: {
            enabled: false
        },
        // stroke: {
        //     width: 1,
        //     curve: 'smooth',
        //     lineCap: 'round',
        //     colors: undefined,
        //     strokeDashArray: 0,
        // },
        series: [{
            name: 'Servings',
            data
        }],
        // grid: {
        //     row: {
        //         colors: ['#fff', '#f2f2f2']
        //     }
        // },
        xaxis: {
            labels: {
                rotate: -45
            },
            categories: ['华北', '华南', '华中', '华东', '区域1', '区域2', '区域3'],
            axisBorder: {
                show: true,
                color: '#D8DDDE',
                offsetX: 0,
                offsetY: 0,
                strokeWidth: 1
            },
            axisTicks: {
                show: false,
                borderType: 'solid',
                color: '#78909C',
                height: 6,
                offsetX: 0,
                offsetY: 0
            }
        },
        yaxis: {
            title: {
                // text: 'Servings'
            }

        }
    };
    return option;
}
