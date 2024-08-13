<script lang="ts">
	import type { SnackbarType } from '$lib/global-stores/snackbar-store';
	import { flip } from 'svelte/animate';
	import Snackbar from '../Snackbar.svelte';
	export let snackbars: SnackbarType[];
</script>

<ul class="fixed bottom-32 left-3 z-50 md:right-5 md:bottom-5 flex flex-col-reverse gap-y-4 items-start md:items-end">
	{#each snackbars as snackbar (snackbar.id)}
		<li animate:flip>
			<Snackbar message={snackbar.message} type={snackbar.type} />
		</li>
	{/each}
</ul>
