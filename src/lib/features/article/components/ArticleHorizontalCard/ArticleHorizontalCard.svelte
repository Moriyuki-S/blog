<script lang="ts">
	import ImageWithLoading from '$lib/components/layouts/ImageWithLoading/ImageWithLoading.svelte';
	import type { Article } from '../../types/type';

	export let article: Article;
	export let onClick: (() => void) | undefined = undefined;
</script>

<a href={`/articles/${article.slug}`} class="group inline-block w-full" on:click={onClick}>
	<article class="lg:min-w-80 w-full h-fit flex border rounded-lg">
		<div class="min-w-24 max-w-24 lg:min-w-36 lg:max-w-36 h-20">
			<ImageWithLoading
				src={article.imageUrl}
				alt={`${article.title}の画像`}
				imageSkeletonClass="w-24 lg:w-36 h-20"
				imageSkeletonHeight="80"
				width="144"
				height="80"
				class="w-24 lg:w-36 h-20 rounded-l-lg object-cover group-hover:opacity-70"
			/>
		</div>
		<div
			class="grow h-20 flex items-center
		group-hover:border-t group-hover:border-r group-hover:border-b group-hover:rounded-r-lg group-hover:border-t-primary-300 group-hover:border-r-primary-300 group-hover:border-b-primary-300 group-hover:bg-primary-100 group-hover:bg-opacity-50 pr-2"
		>
			<h4
				id="short-article"
				class="w-full lg:w-44 h-fit max-h-12 group-hover:underline whitespace-normal font-bold pl-4 flex self-center justify-self-center text-gray-500"
			>
				{article.title}
			</h4>
		</div>
	</article>
</a>

<style>
	#short-article {
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		overflow: hidden;
	}
</style>
