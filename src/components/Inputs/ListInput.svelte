<script language="typescript">
    /** @type { [{text:String, value: any, checkboxName?: string} ] }  */
    export let items;
    export let name;
    export let type = "radio";
    export let id = name + "Input";
    export let label = "";
    export let defaultValue = null;
    export let inline = false;
</script>

{#if type == "radio"}
    <div class="form-group">
        <!-- svelte-ignore a11y-label-has-associated-control -->
        <label>{label}</label>
        {#each items as item }
            <div class={inline ? 'radio-inline' : 'radio'}>
                <label for="{id}-{item.value}" class={inline ? 'radio-inline' : ''}>
                    {#if item.value == defaultValue} 
                    <input class='radio' type="radio" id="{id}-{item.value}" name="{name}" value="{item.value}" checked>
                    {:else}
                    <input class='radio' type="radio" id="{id}-{item.value}" name="{name}" value="{item.value}" >
                    {/if}
                    {item.text}
                </label>
            </div>
        {/each}
    </div>
{:else if type == "select"} 
    <div class="form-group">
        <label for="{id}">{label}</label>
        <select id="{id}" class="form-control">
        {#each items as item }
            {#if item.value == defaultValue} 
            <option value="{item.value}" selected>{item.text}</option>
            {:else}
            <option value="{item.value}">{item.text}</option>
            {/if}
        {/each}
        </select>
    </div>
{:else if type == "checkbox"}
<div class="form-group">
    <!-- svelte-ignore a11y-label-has-associated-control -->
    <label>{label}</label>
    {#each items as item }
        <div class={inline ? 'checkbox-inline' : 'checkbox'}>
            <label for="{id}-{item.value}" class={inline ? 'checkbox-inline' : ''}>
                {#if item.value == defaultValue || (defaultValue.includes ? defaultValue.includes(item.value) : false) } 
                <input type="checkbox" id="{id}-{item.value}" name="{item.checkboxName? item.checkboxName : name+'-'+item.value}" value="{item.value}" checked>
                {:else}
                <input type="checkbox" id="{id}-{item.value}" name="{item.checkboxName? item.checkboxName : name+'-'+item.value}" value="{item.value}" >
                {/if}
                {item.text}
            </label>
        </div>
    {/each}
</div>
{:else}
    <span>Input type can only be "radio" | "select" | "checkbox",  currently set as "{type}"</span>
{/if}