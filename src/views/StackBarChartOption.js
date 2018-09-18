export default function () {
    // console.log(data);
    const option = {
        chart: {
            height: 320,
            type: 'bar',
            stacked: true,
            foreColor: '#68728C'
        },
        colors: ['#6D77E4', '#7ADDF7', '#FBBE77'],
        responsive: [{
            breakpoint: 700,
            options: {
                legend: {
                    position: 'bottom',
                    offsetX: -10,
                    offsetY: 0
                }
            }
        }],
        plotOptions: {
            bar: {
                columnWidth: '30%',
                horizontal: false
            }
        },
        grid: {
            top: '3%'
        },
        series: [{
            name: '已签约',
            data: [2000]
        }, {
            name: '未逾期未签约',
            data: [50]
        }, {
            name: '逾期未签约',
            data: [5]
        }],
        xaxis: {
            categories: ['2011 Q1'],
            max: 10,
            labels: {
                show: false
            },
            axisBorder: {
                show: false,
                color: '#f6f7f7',
                strokeWidth: 0.2
            }
        },
        fill: {
            opacity: 1,
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
        },
        legend: {
            show: false
        }
    };
    return option;
}
