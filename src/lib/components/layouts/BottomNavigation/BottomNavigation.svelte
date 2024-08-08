<script lang="ts">
	import { page } from '$app/stores';
	import { BottomNav, BottomNavHeader, BottomNavHeaderItem, BottomNavItem } from 'flowbite-svelte';
	import { BookmarkOutline, HomeOutline, SearchOutline } from 'flowbite-svelte-icons';

	$: activeUrl = $page.url.pathname;
	export let showHeaderButton: boolean = false;
</script>

<BottomNav
	{activeUrl}
	position="fixed"
	outerClass={`md:hidden w-full ${showHeaderButton ? '!h-28' : '!h-16'}`}
	innerClass={`max-w-96 mx-auto grid grid-cols-3 justify-center ${showHeaderButton ? '' : 'h-full *:h-full'}`}
>
	<BottomNavHeader
		slot="header"
		outerClass={`w-full ${showHeaderButton ? '' : 'hidden'}`}
		innerClass="grid max-w-xs grid-cols-2 gap-1 p-1 mx-auto my-2 bg-gray-100 rounded-lg dark:bg-gray-600"
	>
		<BottomNavHeaderItem itemName="新着記事" />
		<BottomNavHeaderItem itemName="最新記事" />
	</BottomNavHeader>
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
	<BottomNavItem href="/articles/bookmark" btnName="ブックマーク">
		<BookmarkOutline
			class="w-6 h-6 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-500"
		/>
	</BottomNavItem>
</BottomNav>
