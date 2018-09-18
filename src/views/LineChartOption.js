export default function (data) {
    const option = {
        chart: {
            type: 'line'
        },
        series: [{
            name: 'sales',
            data
        }],
        xaxis: {
            categories: [
                1991,
                1992,
                1993,
                1994,
                1995,
                1996,
                1997,
                1998,
                1999
            ]
        }
    };
    return option;
}
