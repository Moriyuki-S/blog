<script lang="ts">
	import TagChip from '$lib/features/tag/components/TagChip/TagChip.svelte';
	import { formatTimetoJapanese } from '$lib/utils/time-format';
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
	<div class="mt-8">
		<TagChip tag={article.tag} />
	</div>
	<h1 class="text-3xl mt-5 pb-2 border-b-2 border-b-sky-500 font-bold">{article.title}</h1>
	<ul class="w-fit ml-auto mt-4 flex gap-x-4">
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
	<div id="article-body" class="w-full mt-8">
		<!-- eslint-disable-next-line svelte/no-at-html-tags -->
		{@html article.body}
	</div>
</article>

<style>
	:global(#article-body img) {
		max-width: 100%;
		margin: 3rem auto;
	}

	:global(#article-body h2) {
		margin-top: 3rem;
		font-weight: bold;
		font-size: 2rem;
		border-bottom: 1px solid #e2e8f0;
	}

	:global(#article-body h3) {
		margin-top: 2rem;
		margin-bottom: 1rem;
		font-weight: bold;
		font-size: 1.6rem;
	}

	:global(#article-body h3:hover) {
		color: #40a9c6;
	}

	:global(#article-body h3:hover::after) {
		content: ' #';
		color: #40a9c6;
	}

	:global(#article-body h4) {
		margin-top: 1rem;
		margin-bottom: 0.5rem;
		font-weight: bold;
		font-size: 1.4rem;
	}

	:global(#article-body p) {
		line-height: 2;
	}

	:global(#article-body .hyperlink) {
		color : #0891b2;
		border-bottom: 1px solid #0891b2;
		padding: 0 0.2rem;
	}

	:global(#article-body .hyperlink:hover) {
		color : #155e75;
		background-color: #f0f4f8;
	}

	:global(#article-body hr) {
		margin: 3rem 0;
		border: none;
		border-top: 1px solid #e2e8f0;
	}

	:global(#article-body .article-link) {
		margin: 2rem auto;
	}

	:global(#article-body .article-link:hover h5) {
		text-decoration: underline;
	}

	:global(#article-body .thumbnail) {
		margin: 0;
	}
</style>
