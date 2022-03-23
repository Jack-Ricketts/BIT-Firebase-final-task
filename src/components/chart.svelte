<script>
    import { afterUpdate } from "svelte";

    let chart;
    /** @type {"bar" | "pie"}*/
    export let type = 'bar';
    /** @type {Object.<string, number>}*/
    export let data;
    /** @type { string | string[] | null }*/
    export let backgroundColor = null;
     /** @type { string | string[] | null }*/
    export let borderColor = null;

    export let cutout = '0%';
    export let rotate = 0;
    export let arc = 360;

    afterUpdate(() => {
        switch(type){
            case "bar":
                createBarChart();break;
            case "pie":
                createRoundChart();break;
        }
    })

    function createBarChart() {
        
        const config = {
            type,
            data: {labels: Object.keys(data)},
            options: {
                scales: {y: {beginAtZero: true}},
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {display: false},
                    tooltip: {
                        callbacks: {
                            label: function(tooltipItem) {
                                    console.log('tooltipItem', tooltipItem);
                                    return ' Total: ' + tooltipItem.formattedValue;
                            }
                        }
                    }
                }
            }
        };

        const dataset = {
            label: Object.keys(data),
            data: Object.values(data),
            backgroundColor: generateColors(backgroundColor),
            borderColor: generateColors(borderColor),
            borderWidth: borderColor ? 1 : 0
        };
        config.data.datasets = [dataset];
        // @ts-ignore
        new Chart(chart, config);
    }
    
    function generateColors(colorSetting) {
        if(!colorSetting) {
            return '#77C0FD'
        }
        else {
            return colorSetting;
        }
    }

    function createRoundChart(type) {
        const config = {
            type: 'pie',
            data: {
                labels: Object.keys(data),
                datasets: [{
                    data: Object.values(data),
                    backgroundColor: generateColors(backgroundColor),
                    borderColor: generateColors(borderColor),
                    borderWidth: borderColor ? 1 : 0,
                    hoverOffset: 8
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                layout: {
                    padding: 8
                },
                cutout,
                rotation: rotate,
                circumference: arc
            }
        };
        // @ts-ignore
        new Chart(chart, config);
    }
</script>

<canvas bind:this="{chart}"></canvas>