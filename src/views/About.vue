<template>
<div class="about">
    <apexchart type="bar" height="350" :options="chartOptions" :series="series"></apexchart>
</div>
</template>

<script>
export default {
    data() {
        return {
            series: [{
                name: 'Cash Flow',
                data: [28, -95, 83, -24, 19, 95, 16, 31, -82, 7, 96, 37, 1, -16, 32, 4, 72, -39, 20, -37, 51, 31, -51, 32, 48, -46, 85, 28, -89, 5, 50, -28, 48, 80, -66, 71, -91, 91, -3, 49, -49, 14, -31, 27, -29, 42, -56, 59, -64, 82, -73, 92, -23, 83, -55, 1, -17, 10, -26, 15, -46, 59, -17, 20, 39, -47, 38, 42, -37, 38, 16, -43, 79, 13, -32, 86, 29, 49, -75, 8, 88, -94, 3, -74, 12, 44, 5, -73, 72, 36, 57, -77, 61, 31, 13, -22, 81, 38, -31, 82]
            }],
            chartOptions: {
                chart: {
                    type: 'bar',
                    height: 350
                },
                grid: {
                    yaxis: {
                        lines: {
                            show: false
                        }
                    },
                },
                plotOptions: {
                    bar: {
                        colors: {
                            ranges: [{
                                from: 0,
                                to: 100,
                                color: '#F15B46'
                            }, {
                                from: -100,
                                to: -1,
                                color: '#FEB019'
                            }]
                        },
                        columnWidth: '80%',
                    }
                },
                dataLabels: {
                    enabled: false,
                },

                annotations: {
                    yaxis: [{
                            y: 0,
                            y2: 50,
                            fillColor: '#F15B46',
                            opacity: 0.3,
                        },
                        {
                            y: 50,
                            y2: 100,
                            fillColor: '#F15B46',
                            opacity: 0.1,
                        },
                        {
                            y: 0,
                            y2: -50,
                            fillColor: '#FEB019',
                            opacity: 0.3,
                        },
                        {
                            y: -50,
                            y2: -100,
                            fillColor: '#FEB019',
                            opacity: 0.1,
                        },
                    ],
                    xaxis: [{
                        x: 65,
                        strokeDashArray: 0,
                        borderColor: '#F15B46',
                        label: {
                            style: {
                                color: '#fff',
                                background:'red',
                                fontSize:'18px'
                            },
                            text: '65',
                            orientation: "horizontal",
                        }
                    }]
                },
                yaxis: {
                    title: {
                        text: 'Team1 - Team2',
                    },
                    min: -100,
                    max: 100,
                    labels: {
                        // formatter: function (y) {
                        //     return y.toFixed(0) + "%";
                        // }
                    }
                },
                xaxis: {
                    type: 'category',
                    tickAmount: 5, //break for x axis
                    min: 0,
                    max: 90,
                    categories: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,
                        12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
                        25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37,
                        38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
                        51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63,
                        64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76,
                        77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90
                    ],
                    labels: {
                        formatter(x) {
                            return x.toFixed(0);
                        }
                    }
                }
            },
        }
    }
}
</script>

<style>

</style>
