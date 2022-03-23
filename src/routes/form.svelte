<script>
    import ListInput from '/src/components/Inputs/ListInput.svelte';
    import TextInput from '/src/components/Inputs/TextInput.svelte';
    import LayoutWithNavigation from '/src/layouts/LayoutwithNavigation.svelte';

    export let field1;
    export let field2;
    export let radio;

    let anyResults = field1 || field2 || radio;

    async function handleSubmit(event) {
        const submit = await fetch('/form', {
            method: 'POST',
            body: new FormData(event.target)
        });
    }
</script>

<LayoutWithNavigation>
    <div class="col-md-12">
        <div class="panel panel-default">
            <div class="panel-body">
                <!--<form on:submit|preventDefault={handleSubmit} method="post">-->
                <form action="/form" method="post">
                    <TextInput type="text" name="field1" label="Pirmas laukas" placeholder="tekstas"/>
                    <TextInput type="text" name="field2" label="Antras laukas" placeholder="tekstas"/>
                    <ListInput type="radio" name="radio" label="Radio Input" items={[{text: 'Taip', value: true}, {text: 'Ne', value: false}]} defaultValue={true}/>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>

            {#if anyResults}
            <div class="panel-body">
                <span>Pirmas laukas: {field1} </span><br/>
                <span>Antras laukas: {field2} </span><br/>
                <span>Radio Input: {radio} </span><br/>
            </div>
            {/if}
        </div>
    </div>
</LayoutWithNavigation>