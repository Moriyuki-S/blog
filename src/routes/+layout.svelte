<script lang="ts">
	import Header from '$lib/components/layouts/Header/Header.svelte';
	import '../app.css';
	import { SnackbarStore } from '$lib/global-stores/snackbar-store';
	import SnackbarList from '$lib/components/ui/Snackbar/SnackbarList/SnackbarList.svelte';
	import BottomNavigation from '$lib/components/layouts/BottomNavigation/BottomNavigation.svelte';
	// @ts-expect-error nprogressは型定義がないため、このコメントを追加
	import Nprogress from 'nprogress';
	import 'nprogress/nprogress.css';
	import { navigating } from '$app/stores';
	import Footer from '$lib/components/layouts/Footer/Footer.svelte';
	import { ModeWatcher } from 'mode-watcher';

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

<ModeWatcher />

<Header />
<div class="min-h-screen md:pt-[4.8rem] pt-10 pb-32 text-gray-800 bg-gray-100 dark:text-white dark:bg-black">
	<slot />
</div>

<SnackbarList {snackbars} />

<BottomNavigation />

<Footer />
