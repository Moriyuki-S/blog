<script lang="ts">
	import type { Article } from '../../types/type';
	import { extractHeadings } from '../../logics/parse-html';
	import { Timeline, TimelineItem } from 'flowbite-svelte';

	export let article: Article;
	$: tableOfContents = extractHeadings(article.body);
</script>

<div class="w-full max-w-64 h-96 pl-5 pt-4 rounded-md overflow-y-scroll">
	<h4 class="text-xl font-bold">目次</h4>
	<div class="mt-5">
		<Timeline>
			{#each tableOfContents as content}
				<TimelineItem>
                    <a href="/" class={(content.tagName === 'H2' ? "font-bold " : "") + "block box-border w-fit rounded-full px-3 py-1 -translate-y-1 hover:bg-slate-100"}>{content.text}</a>
				</TimelineItem>
			{/each}
		</Timeline>
	</div>
</div>
