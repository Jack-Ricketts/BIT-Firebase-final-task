<script>
    import LayoutCentered from "../layouts/LayoutCentered.svelte";
    import TextInput from "../components/Inputs/TextInput.svelte";
    import { page } from '$app/stores';

    let errorMessage = null;

    const unsubscribe = page.subscribe(page => {
        const params = page.url.searchParams;
        if( params.has("unauthenticated")) {
            errorMessage = "You are not signed in";
        }
    });
    


</script>

<style>
    .signin.container {
        border: 1px solid gray;
        border-radius: 8px;
        width: 400px;
        padding: 20px 40px;
        display: flex;
        flex-direction: column;
        align-items: center;
        box-shadow: 2px 2px 2px 1px #0005;
    }
    h1 {
        margin: 20px;
    }

    form {
        width: 100%;
    }

    .flex-container {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .flex-container > :global(*) {
        width: 100%;
    }

    :global(body) {
        background-color: lightsteelblue;
    }
</style>

<LayoutCentered>
    <div class="signin container panel panel-default">
        <h1>Sign in</h1>
        <form class = "flex-container" action="/signin" method="post">
            {#if errorMessage }
                <span class="text-danger">{errorMessage}</span>
            {/if}
            <TextInput type="text" name="username" id="usernameInput" placeholder="Username"/>
            <TextInput type="password" name="password" id="PasswordInput" placeholder="Password"/>
            <button class="btn btn-primary" type="submit">Sign in</button>
        </form>
    </div>
</LayoutCentered>