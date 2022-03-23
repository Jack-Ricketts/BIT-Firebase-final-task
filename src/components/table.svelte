<script>
import { each } from "svelte/internal";

    /** @type { {name: String, field: string}[] | null }*/
    export let headers = null;
    /** @type { any[] }*/
    export let data;

    function orderedData(row){
        let arr = [];
        if(headers) {
            headers.forEach(header => arr.push(row[header.field]));
        } else {
            Object.keys(row).forEach(key => arr.push(row[key]));
        }
        return arr;
    }
</script>

<table class="table table-striped table-bordered table-hover" id="dataTables-example">
    {#if headers}
        <thead>
            {#each headers as header}
                <th>{header.name}</th>
            {/each}
        </thead>
    {/if}
    <tbody>
        {#each data as row}
            <tr>
                {#each orderedData(row) as cell}
                    <td>{cell}</td>
                {/each}
            </tr>
        {/each}
    </tbody>
</table>