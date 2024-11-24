<script lang="ts">
	import { TabItem, Tabs } from 'flowbite-svelte';
	import { ClockOutline } from 'flowbite-svelte-icons';
	import type { PageData } from './$types';
	import ArticleVerticalCardSkeleton from '$lib/features/article/components/ArticleVerticalCard/Skeleton/ArticleVerticalCardSkeleton.svelte';
	import ArticleGallery from '$lib/features/article/components/ArticleGallery/ArticleGallery.svelte';
	import GridList from '$lib/components/layouts/List/GridList/GridList.svelte';
	import HomeImage from '$lib/assets/images/home-image.webp?enhanced';
	import Citation from '$lib/components/ui/Citation/Citation.svelte';
	import FadeOutAnimationWrapper from '$lib/components/layouts/FadeAnimation/FadeOutAnimationWrapper.svelte';
	import FadeInAnimationWrapper from '$lib/components/layouts/FadeAnimation/FadeInAnimationWrapper.svelte';

	export let data: PageData;
</script>

<svelte:head>
	<title>人生の夏休み-大学生活の記録</title>
</svelte:head>

<div class="w-full relative md:flex">
	<hgroup class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[1]">
		<h1 id="home-title" class="text-4xl md:text-8xl font-extrabold whitespace-nowrap">
			人生の<span class="bg-clip-text text-transparent animate-gradient-x bg-200% bg-ocean-wave"
				>夏休み</span
			>
		</h1>
		<p class="text-xl font-semibold mt-5 md:text-2xl md:mt-10">
			人生の夏休み（=
			<span class="text-red-500 font-bold">大学</span><span class="text-green-500 font-bold"
				>生活</span
			>）について書きます
		</p>
	</hgroup>
	<div class="w-full relative overflow-x-hidden h-96 md:h-[30rem]">
		<enhanced:img class="w-full h-full opacity-50" src={HomeImage} alt="海の風景" />
		<Citation
			citeClass="absolute bottom-1 right-2 text-gray-500"
			text="画像引用元: みんちりえ"
			href="https://min-chi.material.jp/"
		/>
	</div>
</div>
<div class="w-full pt-10 md:pt-5 md:px-5 md:flex md:justify-between md:gap-x-6">
	<main class="w-full 2xl:max-w-[80rem] 2xl:mx-auto">
		<Tabs
			tabStyle="pill"
			contentClass="pt-5"
			defaultClass="flex gap-x-8 border-none justify-center md:justify-start"
		>
			<TabItem open>
				<div slot="title" class="flex items-center gap-x-2 text-lg md:text-xl">
					<ClockOutline size="md" />
					新着記事
				</div>
				<div>
					{#await data.newArticles}
						<FadeOutAnimationWrapper>
							<GridList>
								{#each Array(8) as _}
									<li>
										<ArticleVerticalCardSkeleton />
									</li>
								{/each}
							</GridList>
						</FadeOutAnimationWrapper>
					{:then newArticles}
						<FadeInAnimationWrapper>
							<ArticleGallery
								ulStyleClass="justify-items-center"
								articles={newArticles}
								sortCriteria={null}
							/>
						</FadeInAnimationWrapper>
					{/await}
				</div>
			</TabItem>
		</Tabs>
	</main>
</div>

<style>
	#home-title {
		text-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.5);
	}

	#home-title span {
		text-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.05);
	}
</style>
