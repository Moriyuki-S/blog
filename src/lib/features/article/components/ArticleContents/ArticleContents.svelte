<script lang="ts">
	import { Toc } from 'svelte-toc';
</script>

<Toc
	title=""
	breakpoint={0}
	--toc-li-hover-bg="#f3f4f6"
	--toc-active-bg="#40A9C6"
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
