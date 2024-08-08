<script lang="ts">
	import type { Article } from '../../types/type';

	export let article: Article;
	export let onClick: (() => void) | undefined = undefined;
</script>

<a href={`/articles/${article.slug}`} class="group inline-block w-full" on:click={onClick}>
	<article class="lg:min-w-80 w-full h-fit flex border rounded-lg">
		<div class="w-36 h-20">
			<img
				src={article.imageUrl}
				alt={`${article.title}の画像`}
				width="144"
				height="20"
				class="w-36 h-20 rounded-l-lg object-cover"
			/>
		</div>
		<div
			class="grow h-20 flex items-center
		group-hover:border-t group-hover:border-r group-hover:border-b group-hover:rounded-r-lg group-hover:border-t-primary-300 group-hover:border-r-primary-300 group-hover:border-b-primary-300 pr-2"
		>
			<h4
				id="short-article"
				class="w-44 h-fit max-h-12 group-hover:underline group-hover:text-primary-500 whitespace-normal font-bold pl-4 flex self-center justify-self-center text-gray-500"
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
