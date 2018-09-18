export default function (data) {
    const option = {
        chart: {
            width: '1086px',
            height: 320,
            // maxHeight: 320,
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
            colors: '#6D77E4',
            gradient: {
                // shade: 'light',
                // type: "horizontal",
                // shadeIntensity: 0.5,
                // gradientToColors: undefined,
                // inverseColors: true,
                opacityFrom: 1,
                opacityTo: 0,
                stops: [0, 88, 100]
            }
        },
        // theme: {
        //     palette: 'palette1',
        //     monochrome: {
        //         enabled: false,
        //         color: '#255aee',
        //         shadeTo: 'dark',
        //         shadeIntensity: 0.65
        //     }
        // },
        colors: ['#6D77E4'],
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
            ],
            tooltip: {
                enabled: false,
                offsetY: 0
            }
        },
        yaxis: {
            decimalsInFloat: 2,
            labels: {
                show: true,
                offsetX: 140,
                offsetY: 20
                // formatter: () => { return '%' }
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
            column: {
                colors: ['#fff', '#EBEFF5'],
                opacity: 0.5
            },
            padding: {
                top: 0,
                right: -70,
                bottom: 0,
                left: -100
            }
        },
        tooltip: {
            enabled: true,
            followCursor: false,
            intersect: false,
            inverseOrder: false,
            custom: undefined,
            fillSeriesColor: false,
            onDatasetHover: {
                highlightDataSeries: false
            },
            x: {
                show: false,
                format: 'dd MMM',
                formatter: undefined
            },
            y: {
                show: false
            },
            marker: {
                show: false
            },
            items: {
                display: 'flex'
            },
            fixed: {
                enabled: false,
                position: 'topRight',
                offsetX: 0,
                offsetY: 0
            }
        }
    };
    return option;
}
