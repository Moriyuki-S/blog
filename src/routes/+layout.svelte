<script lang="ts">
	import Header from '$lib/components/layouts/Header/Header.svelte';
	import '../app.css';
	import { SnackbarStore } from '$lib/global-stores/snackbar-store';
	import SnackbarList from '$lib/components/ui/Snackbar/SnackbarList/SnackbarList.svelte';
	import BottomNavigation from '$lib/components/layouts/BottomNavigation/BottomNavigation.svelte';

	$: snackbars = $SnackbarStore;
</script>

<Header />
<div class="md:pt-20 pb-20">
	<slot />
</div>

<SnackbarList {snackbars} />

<BottomNavigation />
