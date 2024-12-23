<script lang="ts">
	import {
		BookmarkSolid,
		ChevronDownOutline,
		ExclamationCircleOutline,
		InfoCircleOutline,
		OrderedListOutline,
		SearchOutline,
		TagOutline
	} from 'flowbite-svelte-icons';
	import type { PageData } from './$types';
	import {
		Alert,
		Button,
		Dropdown,
		DropdownItem,
		Modal,
		SpeedDial,
		SpeedDialButton,
		Spinner,
		Tooltip,
		Breadcrumb,
		BreadcrumbItem,
		GradientButton
	} from 'flowbite-svelte';
	import { BookmarkArticles } from '$lib/features/article/application/usecases/bookmark-articles';
	import { SnackbarUtils } from '$lib/global-stores/snackbar-store';
	import type { Article, ArticleId } from '$lib/features/article/types/type';
	import ArticleGallery from '$lib/features/article/components/ArticleGallery/ArticleGallery.svelte';
	import TagFilterButton from '$lib/features/tag/components/TagFilterButton/TagFilterButton.svelte';
	import type { Tag } from '$lib/features/tag/types/type';
	import SecondoryColorButton from '$lib/components/ui/Button/SecondoryColorButton/SecondoryColorButton.svelte';
	import {
		SortCriteriaStore,
		SortCriteriaUtils,
		type SortCriteria
	} from '$lib/global-stores/sort-criteria';
	import { fade } from 'svelte/transition';
	import PageTitleWrapper from '$lib/components/layouts/PageTitle/Wrapper/PageTitleWrapper.svelte';
	import PageTitle from '$lib/components/layouts/PageTitle/PageTitle.svelte';
	import BreadcrumbWrapper from '$lib/components/layouts/Breadcrumb/BreadcrumbWrapper.svelte';
	import TagFilterDialog from '$lib/features/tag/components/TagFilterDialog/TagFilterDialog.svelte';
	import NotFoundImage from '$lib/assets/images/NotFoundImage.svelte';
	import Citation from '$lib/components/ui/Citation/Citation.svelte';

	export let data: PageData;

	let isOpenedDeleteModal: boolean = false;
	let isOpenedInfoModal: boolean = false;
	let isOpendedTagModal: boolean = false;
	let selectDropdownOpen: boolean = false;
	let speedDialOpen: boolean = false;
	let currentBookmarkedArticles: Article[] = [...data.articles];
	let articlesByFilteredTag: Article[] = [...currentBookmarkedArticles];
	$: hasBookmarkedArticles = currentBookmarkedArticles.length > 0;

	$: currentCriteria = $SortCriteriaStore.find((criteria) => criteria.active) as SortCriteria;
	let currentFilterTag: Tag | null;

	const handleSelectCriteria = (criteria: SortCriteria) => {
		selectDropdownOpen = false;
		SortCriteriaUtils.setCriteria(criteria);
		currentCriteria = criteria;
	};

	const handleSelectTag = (tag: Tag) => {
		currentFilterTag = tag;
		articlesByFilteredTag = currentBookmarkedArticles.filter((article) =>
			article.tags.some((articleTag) => articleTag.id === tag.id)
		);
		SnackbarUtils.update(`# ${tag.name}を選択しました`);
	};

	const resetSelectTag = () => {
		currentFilterTag = null;
		articlesByFilteredTag = [...currentBookmarkedArticles];
		SnackbarUtils.update('タグの絞り込みを解除しました');
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

	const openTagModal = () => {
		isOpendedTagModal = true;
		speedDialOpen = false;
	};

	const resetBookmarkArticles = async () => {
		BookmarkArticles.resetBookmarkedArticles();
		currentBookmarkedArticles = [];
		articlesByFilteredTag = [];
		SnackbarUtils.update('ブックマークした記事を解除しました');
	};

	const functionOnRemoveBookmark = (articleId: ArticleId) => {
		currentBookmarkedArticles = currentBookmarkedArticles.filter(
			(article) => article.id !== articleId
		);
		articlesByFilteredTag = articlesByFilteredTag.filter((article) => article.id !== articleId);
	};
</script>

<svelte:head>
	<title>ブックマークした記事</title>
	<meta name="description" content="ブックマークした記事の一覧です。" />
</svelte:head>

<main class="pt-16 md:px-4 2xl:max-w-[80rem] 2xl:mx-auto">
	<BreadcrumbWrapper>
		<Breadcrumb>
			<BreadcrumbItem href="/" home>ホーム</BreadcrumbItem>
		</Breadcrumb>
	</BreadcrumbWrapper>

	<PageTitleWrapper center styleClass="mt-10 md:mt-0">
		<PageTitle styleClass="flex flex-col gap-y-2 items-center whitespace-nowrap md:flex-row">
			<BookmarkSolid color="#FFD700" size="xl" class="mr-auto md:mr-8" />
			ブックマーク
			<span class="text-xl md:text-2xl ms-8 mt-auto font-medium">した記事</span>
		</PageTitle>
		<button
			id="about-bookmark-button"
			on:click={openInfoModal}
			class="bg-gray-100 w-10 h-10 rounded-full ml-5 md:ml-10 hover:bg-gray-200 transition-colors dark:bg-gray-700 dark:hover:bg-gray-600"
		>
			<InfoCircleOutline size="lg" class="mx-auto" />
		</button>
		<Tooltip triggeredBy="#about-bookmark-button" placement="right">
			ブックマーク機能について
		</Tooltip>
	</PageTitleWrapper>
	{#if hasBookmarkedArticles}
		<div class="w-full md:flex md:flex-col md:justify-between mt-10">
			<div class="hidden md:flex justify-between">
				<menu class="flex gap-x-5">
					<li>
						<Button color="alternative" id="bookmark-sort-button">
							<OrderedListOutline class="me-2" />
							{currentCriteria.label}
						</Button>
						<Dropdown bind:open={selectDropdownOpen}>
							{#each $SortCriteriaStore as criteira}
								<DropdownItem
									class={criteira.active
										? 'text-primary-500 dark:text-primary-300 hover:text-primary-700'
										: 'text-black dark:text-white'}
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
			</div>
			<div class="w-full">
				<ArticleGallery
					ulStyleClass="mt-10 gap-5 justify-items-center"
					articles={articlesByFilteredTag}
					sortCriteria={currentCriteria}
					{functionOnRemoveBookmark}
				/>
			</div>
		</div>
		<SpeedDial
			bind:open={speedDialOpen}
			color="cyanToBlue"
			gradient
			class="fixed end-6 bottom-20 z-30 md:hidden"
			tooltip="none"
			textOutside
		>
			<SpeedDialButton
				name="全て解除"
				textOutsideClass="block absolute -start-16 top-1/2 mb-px text-sm text-white font-medium -translate-y-1/2"
				on:click={openDeleteModal}
			>
				<ExclamationCircleOutline />
			</SpeedDialButton>
			<SpeedDialButton
				name="タグで絞る"
				textOutsideClass="block absolute -start-20 top-1/2 mb-px text-white text-sm font-medium -translate-y-1/2"
				on:click={openTagModal}
			>
				<TagOutline />
			</SpeedDialButton>
		</SpeedDial>

		<TagFilterDialog
			open={isOpendedTagModal}
			tags={data.tags}
			{currentFilterTag}
			selectTag={handleSelectTag}
			resetTag={resetSelectTag}
			closeDialog={() => (isOpendedTagModal = false)}
		/>

		{#if speedDialOpen}
			<div
				in:fade
				out:fade
				class={`w-full h-full bg-gray-900 bg-opacity-50 fixed top-0 left-0 z-10`}
			></div>
		{/if}
	{:else}
		<div
			class="flex flex-col mt-10 items-center gap-x-5 gap-y-8 md:w-[45rem] md:flex-row md:pt-5 md:mx-auto"
		>
			<div class="w-fit relative">
				<NotFoundImage />
				<Citation
					citeClass="absolute bottom-0 md:-bottom-12 left-0"
					text="画像引用元: ソコスト"
					href="https://soco-st.com/"
				/>
			</div>
			<div class="flex flex-col gap-y-5 items-center">
				<h2>
					<Alert color="red" class="text-base md:text-xl flex gap-x-3">
						<InfoCircleOutline slot="icon" class="me-2" size="xl" />
						ブックマークした記事はありません
					</Alert>
				</h2>
				<GradientButton color="cyan" href="/search" class="w-40">
					<SearchOutline class="me-2" />
					記事を探す
				</GradientButton>
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
	<div class="*:mb-5">
		<div>
			<h4 class="text-xl font-bold mb-1">ブックマークの方法</h4>
			<p>
				記事のタイトル横にある<BookmarkSolid
					class="inline pb-1 w-5 h-5"
				/>をクリックすると、ブックマークができます。
			</p>
		</div>
		<div>
			<h4 class="text-xl font-bold my-1">ブックマークの解除方法</h4>
			<p>
				ブックマークした記事のタイトル横にある<BookmarkSolid
					class="inline pb-1 w-5 h-5 text-yellow-300"
				/>を再度クリックすると、ブックマークが解除されます。
			</p>
		</div>
		<div>
			<h4 class="text-xl font-bold my-1">ブックマークの保存方法</h4>
			<p>ブックマークは記事のIDをあなたのデバイスに保存しています。</p>
		</div>
	</div>
</Modal>
