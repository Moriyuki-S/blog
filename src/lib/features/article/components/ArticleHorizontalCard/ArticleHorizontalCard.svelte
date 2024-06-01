<script lang="ts">
	import type { Article } from '../../types/type';

	export let article: Article;
</script>

<a href={`/articles/${article.slug}`} class="inline-block">
	<article class="w-80 h-fit flex border rounded-lg hover:border-sky-500">
		<div class="w-36">
			<img src={article.imageUrl} alt={`${article.title}の画像`} />
		</div>
		<h4
			id="short-article"
			class="font-bold pl-4 flex items-center text-gray-500 hover:text-sky-500"
		>
			{article.title}
		</h4>
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
