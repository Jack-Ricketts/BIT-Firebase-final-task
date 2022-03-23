<script context="module">
    import { sessionAuthenticate } from '../authenticate';

    export async function load({ session }) {
        return sessionAuthenticate(session);
    };
</script>

<script>
    import LayoutWithNavigation from '/src/layouts/LayoutwithNavigation.svelte';
    export let field1
</script>

<LayoutWithNavigation>
    <span>{field1}</span>
</LayoutWithNavigation>