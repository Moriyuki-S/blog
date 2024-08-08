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
	<span let:heading slot="toc-item" class="inline-block my-1 !text-md">
		{heading.innerText}
	</span>
</Toc>
