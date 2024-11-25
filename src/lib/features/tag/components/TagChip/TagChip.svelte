<script lang="ts">
	import type { Tag } from '../../types/type';

	export let tag: Readonly<Tag>;
</script>

<a href={`/tags/${tag.slug}`}>
	<div
		class="w-max text-gray-500 h-8 px-4 rounded-lg font-bold flex items-center gap-x-2 border hover:bg-secondory-400 hover:bg-opacity-70 transition-colors dark:text-white dark:hover:bg-secondory-700"
	>
		#
		<span class="text-xs">{tag.name}</span>
	</div>
</a>
