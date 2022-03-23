<script context="module">
    import { sessionAuthenticate } from '../authenticate';

    export async function load({ session }) {
        return sessionAuthenticate(session);
    };
</script>

<script>
    import Chart from '../components/chart.svelte'
    import LayoutWithNavigation from '/src/layouts/LayoutwithNavigation.svelte';

    let data = {'Red': 12, 'Blue': 19, 'Yellow': 3, 'Green': 5, 'Purple': 2, 'Orange': 3};
    let backgroundColor = [
        'rgba(255, 99, 132, 0.4)',
        'rgba(54, 162, 235, 0.4)',
        'rgba(255, 206, 86, 0.4)',
        'rgba(75, 192, 192, 0.4)',
        'rgba(153, 102, 255, 0.4)',
        'rgba(255, 159, 64, 0.4)'
    ];
    let borderColor = [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
    ];
        
</script>

<style>
    .chart-wrapper {
        min-height: 300px;
    }
</style>



<LayoutWithNavigation>
    <div class="col-md-12">
        <div class="panel panel-default">
            <div class="panel-heading">
                Bar chart
            </div>
            <div class="panel-body">
                <div class="chart-wrapper">
                    <Chart data={data} backgroundColor={backgroundColor} borderColor={borderColor}/>
                </div>
            </div>
            <div class="panel-heading">
                Bar chart with default colors
            </div>
            <div class="panel-body">
                <div class="chart-wrapper">
                    <Chart data={data}/>
                </div>
            </div>
            <div class="panel-heading">
                Pie chart
            </div>
            <div class="panel-body">
                <div class="chart-wrapper">
                    <Chart data={data} type="pie" backgroundColor={backgroundColor} borderColor={borderColor}/>
                </div>
            </div>
            <div class="panel-heading">
                Doughnut arc
            </div>
            <div class="panel-body">
                <div class="chart-wrapper">
                    <Chart data={data} type="pie" backgroundColor={backgroundColor} borderColor={borderColor} cutout='80%' arc={180} rotate={-90}/>
                </div>
            </div>
        </div>
    </div>
</LayoutWithNavigation>