<script>
    import LayoutWithNavigation from '/src/layouts/LayoutwithNavigation.svelte';
    import Table from '../components/table.svelte';

    let tableHeaders = [
        {name: '#', field: 'id'},
        {name: 'Name', field: 'name'},
        {name: 'Value', field: 'value'}
    ];
    let tableData = [
        {id: 1, name: 'Vardenis', value: 'aaaa'},
        {id: 2, name: 'Pavardenis', value: 'bbbb'},
        {id: 3, name: 'Asdf', value: 'cccc'},
    ];
</script>

<script context="module">
    import { sessionAuthenticate } from '../authenticate';

    export async function load({ session }) {
        return sessionAuthenticate(session);
    };
</script>

<style>

</style>

<LayoutWithNavigation>
    <div class="col-md-12">
        <div class="panel panel-default">
            <div class="panel-heading">
                Table
            </div>
            <div class="panel-body">
                <Table headers={tableHeaders} data={tableData}/>
            </div>
            <div class="panel-heading">
                Table without headers
            </div>
            <div class="panel-body">
                <Table data={tableData}/>
            </div>
        </div>
    </div>
</LayoutWithNavigation>