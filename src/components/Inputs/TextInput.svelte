<script>
    export let name;
    /** @type {"text" | "password" | "email" | "number" }*/ 
    export let type="text";
    export let id = name + "Input";
    export let label = "";
    export let placeholder = "";
    export let defaultValue = null;
    const possibleTypes = ["text","password","email","number"];
</script>


{#if possibleTypes.includes(type)}
<div class ="form-group">
    {#if !!label}
        <label class="control-label" for="{id}">{label}</label>
    {/if}
    {#if !!defaultValue}
    <input class="form-control" type="{type}" name="{name}" id="{id}" placeholder="{placeholder}" value={defaultValue}>
    {:else}
    <input class="form-control" type="{type}" name="{name}" id="{id}" placeholder="{placeholder}">
    {/if}
</div>

{:else}
<span>Input type can only be {possibleTypes}, currently set as "{type}"</span>
{/if}

