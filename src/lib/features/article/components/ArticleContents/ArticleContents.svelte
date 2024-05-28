<script lang="ts">
	import type { Article } from '../../types/type';
	import { extractHeadings } from '../../logics/parse-html';
	import { Timeline, TimelineItem } from 'flowbite-svelte';
	import { onMount } from 'svelte';
	import tocbot from 'tocbot';

	onMount(() => {
		tocbot.init({
			tocSelector: '.toc',
			contentSelector: '.article',
			extraLinkClasses: 'block w-max h-10 hover:bg-slate-100 rounded-lg px-4 py-1',
			activeLinkClass: 'text-sky-500',
			headingSelector: 'h2, h3'
		});

		return tocbot.destroy;
	});
</script>

<div class="w-full max-w-64 h-96 pl-5 pt-4 rounded-md overflow-y-scroll">
	<h4 class="text-xl font-bold">目次</h4>
	<nav class="toc mt-5">
	</nav>
</div>
