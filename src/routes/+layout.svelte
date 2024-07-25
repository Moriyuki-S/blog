<script lang="ts">
	import Header from '$lib/components/layouts/Header/Header.svelte';
	import '../app.css';
	import Snackbar from '$lib/components/ui/Snackbar/Snackbar.svelte';
	import { SnackbarStore } from '$lib/global-stores/snackbar-store';

	$: snackbar = $SnackbarStore;
</script>

<Header />
<div class="pt-20">
	<slot />
</div>

{#if snackbar}
	<Snackbar message={snackbar.message} type={snackbar.type} />
{/if}
