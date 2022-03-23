<script>
    import ListInput from '/src/components/Inputs/ListInput.svelte';
    import TextInput from '/src/components/Inputs/TextInput.svelte';
    import LayoutWithNavigation from '/src/layouts/LayoutwithNavigation.svelte';

    const list = [
        {text: 'Option 1', value: 1, checkboxName: 'opt1'},
        {text: 'Option 2', value: 2},
        {text: 'Option 3', value: 3}
    ]
</script>

<script context="module">
    import { sessionAuthenticate } from '../authenticate';

    export async function load({ session }) {
        return sessionAuthenticate(session);
    };
</script>

<LayoutWithNavigation>
    <div class="col-md-12">
        <div class="panel panel-default">
            <div class="panel-body">
                <TextInput type="text" name="text" id="textInput" label="Tekstas" placeholder="tekstas"/>
                <TextInput type="password" name="password" label="Slaptažodis" placeholder="slaptažodis"/>
                <TextInput type="email" name="email" label="Email" placeholder="email"/>
                <TextInput type="number" name="number" label="Number" placeholder="number" defaultValue={10.5}/>
                <ListInput type="radio" name="radio" label="Radio Input" items={list} defaultValue={1} />
                <ListInput type="select" name="select"  label="Select" items={list} defaultValue={2} />
                <ListInput type="checkbox" name="checkbox" label="Checkbox" items={list} defaultValue={[2,3]} />
                <ListInput type="radio" name="radio2" label="Radio Input" items={list} defaultValue={2} inline={true}/>
                <ListInput type="checkbox" name="checkbox2" label="Checkbox" items={list} defaultValue={1} inline={true}/>
            </div>
        </div>
    </div>
</LayoutWithNavigation>