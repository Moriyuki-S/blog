<script lang="ts">
	import { page } from '$app/stores';
	import { BottomNav, BottomNavItem } from 'flowbite-svelte';
	import { BookmarkOutline, HomeOutline, SearchOutline } from 'flowbite-svelte-icons';

	$: activeUrl = $page.url.pathname;
</script>

<BottomNav
	{activeUrl}
	position="fixed"
	outerClass={`md:hidden w-full !h-16`}
	innerClass={`max-w-96 mx-auto grid grid-cols-3 justify-center h-full *:h-full`}
>
	<BottomNavItem href="/" btnName="ホーム">
		<HomeOutline
			class="w-6 h-6 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-500"
		/>
	</BottomNavItem>
	<BottomNavItem href="/search" btnName="探す">
		<SearchOutline
			class="w-6 h-6 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-500"
		/>
	</BottomNavItem>
	<BottomNavItem href="/bookmark" btnName="ブックマーク">
		<BookmarkOutline
			class="w-6 h-6 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-500"
		/>
	</BottomNavItem>
</BottomNav>
