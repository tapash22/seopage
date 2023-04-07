<template>
    <div class="home">
        <apexchart ref="realtimeChart1" type="line" height="350" :options="chartOptions" :series="series1" />

    </div>
</template>
  
<script>
// @ is an alias to /src
import VueApexCharts from "vue-apexcharts";

var lastDate = 0,
    data1 = [];
// data2 = [];

function getDayWiseTimeSeries(baseval, count, yrange) {
    var i = 0;
    while (i < count) {
        let x = baseval,
            y =
                Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

        data1.push({ x, y });
        //   data2.push({ x, y });
        lastDate = baseval;
        baseval += 28800;
        i++;
    }
}

getDayWiseTimeSeries(new Date("11 Feb 2017 GMT").getTime(), 10, {
    min: 10,
    max: 30
});

function getNewSeries(baseval, yrange) {
    var newDate = baseval + 28800;
    lastDate = newDate;
    data1.push({
        x: newDate,
        y: Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min
    });
}

function resetData() {
    data1 = data1.slice(data1.length - 10, data1.length);
    // data2 = data2.slice(data2.length - 10, data2.length);
}

export default {
    name: "home",
    components: {
        apexchart: VueApexCharts
    },
    data() {
        return {
            series1: [{ data: data1.slice() }],
            // series2: [{ data: data2.slice() }],
            chartOptions: {
                chart: {
                    animations: {
                        enabled: true,
                        easing: "linear",
                        dynamicAnimation: {
                            speed: 1000
                        }
                    },
                    grid: {
                        yaxis: {
                            lines: {
                                show: false
                            }
                        },
                    },
                    toolbar: {
                        show: false
                    },
                    zoom: {
                        enabled: false
                    }
                },
                dataLabels: {
                    enabled: false
                },

                stroke: {
                    curve: 'stepline',
                },

                title: {
                    text: "Employe Chart",
                    align: "left",
                    style: {
                        fontSize: "20px",
                        color: "#555"
                    }
                },
                //   formating timer with ms
                xaxis: {
                    type: 'datetime',
                    labels: {
                        format: 'mm'
                    }
                },
                //y-axix height
                yaxis: {
                    max: 40
                },
                //anotation with y-axix
                annotations: {
                    yaxis: [{
                        y: 0,
                        y2: 10,
                        fillColor: '#F15B46',
                        opacity: 0.5,
                    },
                    {
                        y: 10,
                        y2: 20,
                        fillColor: '#F15B46',
                        opacity: 0.3,
                    },
                    {
                        y: 20,
                        y2: 30,
                        fillColor: '#F15B46',
                        opacity: 0.1,
                    },
                    ]
                },
                //legend show if hover
                legend: {
                    show: false
                }
            }
        };
    },

    //call intervet timer 
    mounted() {
        this.intervals();
    },

    methods: {
        intervals: function () {
            var me = this;

            //use with show second for real time update
            window.setInterval(function () {
                getNewSeries(lastDate, { min: 0, max: 30 });
                me.$refs.realtimeChart1.updateSeries([{ data: data1 }]);
            }, 1000);

            //given time 8 hours in convert into millisecond
            window.setInterval(function () {
                resetData();
                me.$refs.realtimeChart1.updateSeries([{ data: [] }], false, true);
            }, 28800000);
        }
    }
};
</script>
  