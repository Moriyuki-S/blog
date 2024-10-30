<script lang="ts">
	import Header from '$lib/components/layouts/Header/Header.svelte';
	import '../app.css';
	import { SnackbarStore } from '$lib/global-stores/snackbar-store';
	import SnackbarList from '$lib/components/ui/Snackbar/SnackbarList/SnackbarList.svelte';
	import BottomNavigation from '$lib/components/layouts/BottomNavigation/BottomNavigation.svelte';
	import Nprogress from 'nprogress';
	import 'nprogress/nprogress.css';
	import { navigating } from '$app/stores';

	$: Nprogress.configure({ showSpinner: false });

	$: snackbars = $SnackbarStore;

	$: {
		if ($navigating) {
			Nprogress.start();
		} else {
			Nprogress.done();
		}
	}
</script>

<Header />
<div class="min-h-screen md:pt-[4.8rem] pt-10 pb-32 bg-gray-100">
	<slot />
</div>

<SnackbarList {snackbars} />

<BottomNavigation />
