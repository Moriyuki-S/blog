<script lang="ts">
	import Header from '$lib/components/layouts/Header/Header.svelte';
	import '../app.css';
	import { SnackbarStore } from '$lib/global-stores/snackbar-store';
	import SnackbarList from '$lib/components/ui/Snackbar/SnackbarList/SnackbarList.svelte';

	$: snackbars = $SnackbarStore;
</script>

<Header />
<div class="pt-20">
	<slot />
</div>

<SnackbarList {snackbars} />
