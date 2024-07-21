<script lang="ts">
	import {
		BookmarkOutline,
		ExclamationCircleOutline,
		InfoCircleOutline
	} from 'flowbite-svelte-icons';
	import type { PageData } from './$types';
	import ArticleVerticalCardSkeleton from '$lib/features/article/components/ArticleVerticalCard/Skeleton/ArticleVerticalCardSkeleton.svelte';
	import ArticleVerticalCard from '$lib/features/article/components/ArticleVerticalCard/ArticleVerticalCard.svelte';
	import { Button, Modal, Spinner, Tooltip } from 'flowbite-svelte';
	import { BookmarkArticles } from '$lib/features/article/application/usecases/bookmark-articles';
	import { SnackbarUtils } from '$lib/global-stores/snackbar-store';
	import { invalidate } from '$app/navigation';

	export let data: PageData;

	let isOpenedDeleteModal: boolean = false;
	let isOpenedInfoModal: boolean = false;

	const openInfoModal = () => {
		isOpenedInfoModal = true;
	};

	const openDeleteModal = () => {
		isOpenedDeleteModal = true;
	};

	const closeDeleteModal = () => {
		isOpenedDeleteModal = false;
	};

	const resetBookmarkArticles = async () => {
		BookmarkArticles.resetBookmarkedArticles();
		await invalidate('articles:bookmark');
		SnackbarUtils.update('ブックマークした記事を解除しました');
	};
</script>

<main class="pt-16 px-4">
	<div class="w-fit flex gap-x-5 mx-auto">
		<h1 class="text-3xl w-fit flex items-center text-center">
			<BookmarkOutline color="#FFD700" size="xl" class="me-2 " />
			ブックマークした記事
		</h1>
		<button
			id="about-bookmark-button"
			on:click={openInfoModal}
			class="bg-gray-100 w-10 h-10 rounded-full hover:bg-gray-200 transition-colors"
		>
			<InfoCircleOutline size="lg" class="mx-auto" />
		</button>
		<Tooltip triggeredBy="#about-bookmark-button" placement="right">
			ブックマーク機能について
		</Tooltip>
	</div>
	<div class="w-fit ml-auto mt-10">
		<Button color="red" on:click={openDeleteModal}>すべて解除する</Button>
	</div>
	<ul class="grid grid-cols-3 gap-5 mt-10" data-testid="tagged-articles">
		{#await data.articles}
			{#each Array(8) as _}
				<ArticleVerticalCardSkeleton />
			{/each}
		{:then articles}
			{#each articles as article}
				<ArticleVerticalCard {article} />
			{/each}
		{/await}
	</ul>
</main>

<Modal bind:open={isOpenedDeleteModal} autoclose>
	<div class="text-center">
		<ExclamationCircleOutline class="mx-auto w-12 h-12" color="red" />
		<h3 class="text-xl mt-4 font-bold">ブックマークした記事をすべて解除しますか？</h3>
		<p class="mt-4 mb-5">一度解除すると、元に戻すことができません。</p>
		<Button color="alternative" on:click={closeDeleteModal}>キャンセル</Button>
		<Button color="red" class="ml-5" on:click={resetBookmarkArticles}>解除する</Button>
	</div>
</Modal>

<Modal bind:open={isOpenedInfoModal} title="ブックマーク機能について" autoclose outsideclose>
	<div>
		<div>
			<h4 class="text-xl font-bold">ブックマークの方法</h4>
			<p>記事のタイトル横にあるボタンをクリックすると、ブックマークができます。</p>
		</div>
		<div>
			<h4 class="text-xl font-bold">ブックマークの解除方法</h4>
		</div>
		<div>
			<h4 class="text-xl font-bold">ブックマークをどのように保存しているか？</h4>
			<p>ブックマークは記事のIDをブラウザのローカルストレージに保存しています。</p>
		</div>
	</div>
</Modal>
