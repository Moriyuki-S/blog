<script lang="ts">
	import { Toc } from 'svelte-toc';
	import { mode } from 'mode-watcher';
</script>

<Toc
	title=""
	breakpoint={0}
	--toc-li-hover-bg={$mode === 'dark' ? "#2d3748" : "#f3f4f6"}
	--toc-active-bg={$mode === 'dark' ? "#1E3A8A" : "#40A9C6"}
	--toc-li-hover-color="#40A9C6"
>
	<span let:heading slot="toc-item" class="inline-block text-left my-1 !text-base">
		{heading.innerText}
	</span>
</Toc>

<style>
	:global(aside.toc > nav > ol > li) {
		text-align: left;
	}
</style>
