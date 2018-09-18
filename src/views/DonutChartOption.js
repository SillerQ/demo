export default function (data) {
    const option = {
        chart: {
            type: 'donut'
        },
        dataLabels: {
            enabled: false
        },
        colors: ['#6D77E4', '#8a8fed', '#a7abf2', '#c5c8f6', '#d4d6f9', '#f1f2fe'],
        legend: {
            show: false
        },

        stroke: {
            show: false,
            curve: 'smooth',
            lineCap: 'butt',
            colors: ['#6D77E4', '#8a8fed', '#a7abf2', '#c5c8f6', '#d4d6f9', '#f1f2fe'],
            width: 2,
            strokeDashArray: 0
        },
        series: data
    };
    return option;
}
