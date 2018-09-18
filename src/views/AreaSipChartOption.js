export default function (data) {
    const option = {
        chart: {
            type: 'area',
            foreColor: '#68728C'
        },
        series: [{
            name: 'Series 1',
            data
        }],
        dataLabels: {
            enabled: false

        },
        fill: {
            colors: '#ffffff',
            gradient: {
                opacityFrom: 0.8,
                opacityTo: 0,
                stops: [0, 100, 100]
            }
        },
        colors: ['#fff'],
        xaxis: {
            labels: {
                show: false
            },
            axisBorder: {
                show: false,
                color: '#78909C',
                strokeWidth: 1
            },
            axisTicks: {
                show: false
            },
            categories: ['Apples', 'Oranges', 'Strawberries', 'Pineapples', 'Mangoes', 'Bananas',
                'Blackberries'
            ]
        },
        yaxis: {
            decimalsInFloat: 2,
            labels: {
                show: true,
                offsetX: 10,
                offsetY: 0
            }
        },
        grid: {
            show: true,
            xaxis: {
                lines: {
                    show: false
                }
            },
            yaxis: {
                lines: {
                    show: false
                }
            },
            padding: {
                top: 0,
                right: -70,
                bottom: 0,
                left: -100
            }
        },
        tooltip: {
            x: {
                show: true
            },
            marker: {
                show: false
            }
        }
    };
    return option;
}
