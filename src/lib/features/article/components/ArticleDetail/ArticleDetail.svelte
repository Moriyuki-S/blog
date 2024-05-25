<script lang="ts">
	import { calculateTimeDifference, formatTimetoJapanese } from '$lib/utils/time-format';
	import type { Article } from '../../types/type';
	import { Breadcrumb, BreadcrumbItem } from 'flowbite-svelte';

	export let article: Readonly<Article>;
	const formatedCreatedAt = formatTimetoJapanese(article.createdAt);
	const formatedUpdatedAt = formatTimetoJapanese(article.updatedAt);
	const wasUpdated = article.createdAt.toString() !== article.updatedAt.toString();
</script>

<article class="w-full max-w-[40rem]">
	<Breadcrumb>
		<BreadcrumbItem href="/" home>ホーム</BreadcrumbItem>
		<BreadcrumbItem href={`/tags/${article.tag.id}`}>
			{article.tag.name}
		</BreadcrumbItem>
	</Breadcrumb>
	<h2 class="text-3xl mt-5 pb-2 border-b-2 border-b-sky-500 font-bold">{article.title}</h2>
	<ul class="w-fit ml-auto mt-4">
		<li>
			投稿 : <time datetime="">{formatedCreatedAt}</time>
		</li>
		{#if wasUpdated}
			<li>
				更新 : <time datetime="">{formatedUpdatedAt}</time>
			</li>
		{/if}
	</ul>
	<div class="mt-5">
		<img src={article.imageUrl} alt={`「${article.title}」のイメージ画像`} />
	</div>
	<div class="w-full mt-8">
		{article.content}
	</div>
</article>
