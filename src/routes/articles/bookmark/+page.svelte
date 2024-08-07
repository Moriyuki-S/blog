<script lang="ts">
	import {
		BookmarkOutline,
		ChevronDownOutline,
		ExclamationCircleOutline,
		InfoCircleOutline,
		OrderedListOutline,
		SearchOutline,
		TagOutline
	} from 'flowbite-svelte-icons';
	import type { PageData } from './$types';
	import { Alert, Button, Dropdown, DropdownItem, Modal, Spinner, Tooltip } from 'flowbite-svelte';
	import { BookmarkArticles } from '$lib/features/article/application/usecases/bookmark-articles';
	import { SnackbarUtils } from '$lib/global-stores/snackbar-store';
	import type { Article, ArticleId, Criteria } from '$lib/features/article/types/type';
	import ArticleGallery from '$lib/features/article/components/ArticleGallery/ArticleGallery.svelte';
	import TagFilterButton from '$lib/features/tag/components/TagFilterButton/TagFilterButton.svelte';
	import type { Tag } from '$lib/features/tag/types/type';
	import SecondoryColorButton from '$lib/components/ui/Button/SecondoryColorButton/SecondoryColorButton.svelte';

	export let data: PageData;

	let isOpenedDeleteModal: boolean = false;
	let isOpenedInfoModal: boolean = false;
	let selectDropdownOpen: boolean = false;
	let currentBookmarkedArticles: Article[] = [...data.articles];
	let articlesByFilteredTag: Article[] = [...currentBookmarkedArticles];
	let hasBookmarkedArticles: boolean = currentBookmarkedArticles.length > 0;

	const criterias: Criteria[] = [
		{
			label: '新着順',
			value: 'latest'
		},
		{
			label: '古い順',
			value: 'oldest'
		},
		{
			label: '人気順',
			value: 'popular'
		}
	];

	let currentCriteria: Criteria = criterias[0];
	let currentFilterTag: Tag | null;

	const handleSelectCriteria = (criteria: Criteria) => {
		currentCriteria = criteria;
		selectDropdownOpen = false;
	};

	const handleSelectTag = (tag: Tag) => {
		currentFilterTag = tag;
		articlesByFilteredTag = currentBookmarkedArticles.filter((article) =>
			article.tags.some((articleTag) => articleTag.id === tag.id)
		);
	};

	const resetSelectTag = () => {
		currentFilterTag = null;
		articlesByFilteredTag = [...currentBookmarkedArticles];
	};

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
		currentBookmarkedArticles = [];
		SnackbarUtils.update('ブックマークした記事を解除しました');
	};

	const functionOnRemoveBookmark = (articleId: ArticleId) => {
		currentBookmarkedArticles = currentBookmarkedArticles.filter(
			(article) => article.id !== articleId
		);
		articlesByFilteredTag = articlesByFilteredTag.filter((article) => article.id !== articleId);
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
	{#if hasBookmarkedArticles}
	<div class="w-full flex justify-between mt-10">
			<menu class="flex gap-x-5">
				<li>
					<Button color="alternative" id="bookmark-sort-button">
						<OrderedListOutline class="me-2" />
						{currentCriteria.label}
					</Button>
					<Dropdown bind:open={selectDropdownOpen}>
						{#each criterias as criteira}
							<DropdownItem
								class={currentCriteria.value === criteira.value
									? 'text-primary-500 dark:text-primary-300 hover:text-primary-700'
									: 'text-black'}
								on:click={() => handleSelectCriteria(criteira)}
							>
								{criteira.label}
							</DropdownItem>
						{/each}
					</Dropdown>
					<Tooltip triggeredBy="#bookmark-sort-button">並べ替える</Tooltip>
				</li>
				<li>
					{#await data.tags}
						<SecondoryColorButton disabled>
							<Spinner size="4" class="me-2" />
							タグを読み込み中
						</SecondoryColorButton>
					{:then tags}
						<TagFilterButton {tags} resetTag={resetSelectTag} selectTag={handleSelectTag}>
							<TagOutline class="me-2" />
							{currentFilterTag ? currentFilterTag.name : 'すべてのタグ'}
							<ChevronDownOutline class="ms-2" />
						</TagFilterButton>
					{:catch}
						<Button color="red" disabled>
							<ExclamationCircleOutline size="xs" color="red" class="me-2" />
							タグの読み込みに失敗しました
						</Button>
					{/await}
				</li>
			</menu>
			<Button color="red" on:click={openDeleteModal}>すべて解除する</Button>
			<ArticleGallery
				ulStyleClass="mt-10 gap-5"
				articles={articlesByFilteredTag}
				sortCriteria={currentCriteria}
				{functionOnRemoveBookmark}
			/>
		</div>
		{:else}
		<div class="flex items-center gap-x-5 md:w-[45rem] md:pt-5 md:mx-auto">
			<div>
				<img src="https://placehold.jp/300x300.png" alt="ブックマークした記事はありません">
			</div>
			<div class="flex flex-col gap-y-5 items-center">
				<h2>
					<Alert color="red" class="text-2xl flex gap-x-3">
						<InfoCircleOutline class="me-2" size="xl" />
						ブックマークした記事はありません
					</Alert>
				</h2>
				<Button href="/search" class="w-40">
					<SearchOutline class="me-2" />
					記事を探す</Button>
			</div>
		</div>
		{/if}

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
