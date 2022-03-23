<style>
    nav {
        background-color: #09192A;
        border:none;
    }

    @media(min-width:768px) {
        nav {
            width: 260px;
            height: 100%;
        }

        .sidebar-collapse.collapse {
            display: block;
        }
    }

</style>
<script>
    import { page } from '$app/stores';
    import { afterUpdate } from 'svelte';

    export let active="";
    let navList;
    let pathname;

    const unsubscribe = page.subscribe(page => {
        pathname = active ? active : page.url.pathname;
    });

    afterUpdate(() => {
        navList.querySelectorAll('a').forEach( (entry) => {
            // @ts-ignore
            if(entry.pathname == pathname) {
                entry.classList.add('active-menu');
            } 
        })
    })
</script>

<nav class="navbar-default navbar-side">
    <div class="sidebar-collapse collapse in">
        <ul class="nav" id="main-menu" bind:this="{navList}">

            <li>
                <a href="/"><i class="fa fa-dashboard"></i>Dashboard</a>
            </li>
            <li>
                <a href="/inputs"><i class="fa fa-pencil"></i> Inputs </a>
            </li>
            <li>
                <a href="/table"><i class="fa fa-table"></i> Table </a>
            </li>
            <li>
                <a href="/charts"><i class="fa fa-bar-chart-o"></i> Charts </a>
            </li>
            <li>
                <a href="/form"><i class="fa fa-edit"></i> Forms </a>
            </li>
        </ul>

    </div>
</nav>