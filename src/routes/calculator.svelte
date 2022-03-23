<script>
    import LayoutWithNavigation from '/src/layouts/LayoutwithNavigation.svelte';
    import TextInput from '/src/components/Inputs/TextInput.svelte';
    import ListInput from '/src/components/Inputs/ListInput.svelte';
    import { sessionAuthenticate } from '../authenticate';
    import Chart from '../components/chart.svelte'
    import Table from '../components/table.svelte';

    const list = [
        {text: 'Me', value: 1, checkboxName: 'opt1'},
        {text: 'Not me', value: 2},
    ]
    // let data = {};
    // data['Me'] = 15.56;
    // const key = 'Not me'
    // data[key] = 6.41;
    export let data = {'Me': 15.56, 'Not me': 6.41};
    let backgroundColor = [
        'rgba(255, 99, 132, 0.4)',
        'rgba(54, 162, 235, 0.4)'
    ];
    let borderColor = [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)'
    ];
    export let tableData = [
    ];

    let tableHeaders = [
        {name: '#', field: 'id'},
        {name: 'Name', field: 'name'},
        {name: 'Amount', field: 'amount'}
    ];
    
    async function deleteRow(deleteTr) {
        console.log(deleteTr);
        const submit = await fetch('/deleteData?docid=' + deleteTr, {
        method: 'GET'
        })
        location.reload();
    }

    export async function load({ session }) {
        return sessionAuthenticate(session);
    };
</script>

<LayoutWithNavigation>
    <div class="col-md-12">
        <div class="panel panel-default">
            <div class="panel-body">
                <h1>Financial Calculator</h1>
                <p>
                    Big spender, eh?
                </p>
            </div>
            <div class="panel-body">
                <form action = '/calculator' method="post">
                    <ListInput type="radio" name="select"  label="Select spender" items={list} defaultValue={1} />
                    <TextInput type="number" name="amount" label="Spent" placeholder="Amount EUR" required/>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
            <div class="panel-body">
                <div class="chart-wrapper">
                    <Chart data={data} type="pie" backgroundColor={backgroundColor} borderColor={borderColor} cutout='80%' arc={180} rotate={-90}/>
                </div>
            </div>
            <div class="panel-heading">
                Table without headers
            </div>
            <div class="panel-body">
                <!-- <Table headers={tableHeaders} data={tableData}/> -->
                <table class="table table-striped table-bordered table-hover" id="dataTables-example">
                    <thead>
                        {#each tableHeaders as header}
                            <th>{header.name}</th>
                        {/each}
                         <th></th>
                    </thead>
                    <tbody>
                        {#each tableData as row}
                            <tr>
                                <td>{row.id}</td>
                                <td>{row.name}</td>
                                <td>{row.amount}</td>
                                <td><a on:click={deleteRow(row.docid)}>❌</a></td>
                            </tr>
                        {/each}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</LayoutWithNavigation>