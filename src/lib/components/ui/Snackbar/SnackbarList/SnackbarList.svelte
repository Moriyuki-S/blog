<script lang="ts">
    import type { SnackbarType } from "$lib/global-stores/snackbar-store";
	import Snackbar from "../Snackbar.svelte";
    export let snackbars: SnackbarType[];
</script>

<ul class="fixed right-5 bottom-5 flex flex-col-reverse">
    {#each snackbars as snackbar (snackbar.id)}
        <li>
            <Snackbar message={snackbar.message} type={snackbar.type} />
        </li>
    {/each}
</ul>