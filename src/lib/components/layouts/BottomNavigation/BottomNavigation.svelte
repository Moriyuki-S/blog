<script lang="ts">
	import { page } from '$app/stores';
	import { BottomNav, BottomNavHeader, BottomNavHeaderItem, BottomNavItem } from 'flowbite-svelte';
	import { BookmarkOutline, HomeOutline, SearchOutline } from 'flowbite-svelte-icons';
	import { SortCriteriaStore, SortCriteriaUtils, type SortCriteria } from '$lib/global-stores/sort-criteria';
	import { get } from 'svelte/store';
	import { afterNavigate } from '$app/navigation';


	$: activeUrl = $page.url.pathname;
	$: showHeaderButton = activeUrl === '/' || activeUrl.startsWith('/tags/') || activeUrl === ('/articles/bookmark');
	$: showOldCriteriaButton = activeUrl.startsWith('/tags/') || activeUrl === ('/articles/bookmark');

	$: displayCriteria = showOldCriteriaButton ? [...$SortCriteriaStore] : $SortCriteriaStore.filter((criteria) => criteria.value !== 'oldest');


	const changeCurrentCriteria = (criteria: SortCriteria) => {
		SortCriteriaUtils.setCriteria(criteria);
		displayCriteria = displayCriteria.map((c) => ({ ...c, active: c.value === criteria.value }));
	};

	$: gridColsClass = showOldCriteriaButton ? 'grid-cols-3' : 'grid-cols-2';

	afterNavigate(() => {
		const oldestCriteria = $SortCriteriaStore.find((criteria) => criteria.value === 'oldest');
		// ページ遷移後に「古い順」ボタンが表示されず、かつ遷移前に「古い順」ボタンが選択されていた場合はリセットする
		if (!showOldCriteriaButton && oldestCriteria?.active) {
			SortCriteriaUtils.resetCriteria();
			displayCriteria = displayCriteria.map((criteria) => {
				if (criteria.value === 'latest') {
					return { ...criteria, active: true };
				} else {
					return { ...criteria, active: false };
				}
			});
		}
	});


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
		innerClass={`grid max-w-xs ${gridColsClass} gap-1 p-1 mx-auto my-2 bg-gray-100 rounded-lg dark:bg-gray-600`}
	>
		{#each displayCriteria as criteria}
			<BottomNavHeaderItem 
			itemName={criteria.label} 
			active={criteria.active}
			on:click={() => changeCurrentCriteria(criteria)} />
		{/each}
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
