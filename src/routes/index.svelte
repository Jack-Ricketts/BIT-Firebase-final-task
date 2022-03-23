<script>
    import LayoutWithNavigation from '/src/layouts/LayoutwithNavigation.svelte';
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
                <h1>Praktinė užduotis</h1>
                <p>
                    Šis projektas sukurtas kaip šablonas pagal kurį jums reikia sukurti projektą, kuris naudotų duombazę. <br/>
                    Dešinėje pusėje rasitę navigaciją, kurioje yra keletas pavyzdžių. Jų kodus rasite src/routes.<br/>
                    Duombazę pasirenkame savo nuožiūra (MySQL, SQLite, Redis, Firebase ar kita).<br/>
                    Siūlomas projektas: asmeninių finansų valdymo programa; galima daryti ir kitą.<br/>
                    Kaip projektą įgyvendinti ir kokias galibymes ji turės pasirenkame patys.<br/>
                    Galima dirbti grupėse iki 4 žmonių
                </p>
                <form action="/calculator">
                    <input type="submit" value="Go to Financial Calculator" />
                </form>
            </div>
        </div>
    </div>
</LayoutWithNavigation>