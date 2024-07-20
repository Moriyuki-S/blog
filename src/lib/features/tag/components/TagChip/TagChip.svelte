<script lang="ts">
	import type { Tag } from '../../types/type';

	export let tag: Readonly<Tag>;
</script>

<a href={`/tags/${tag.slug}`}>
	<div
		class="w-max h-8 px-4 rounded-lg font-bold flex items-center gap-x-2 border hover:text-white hover:bg-secondory-600 transition-colors"
	>
		#
		<span class="text-xs">{tag.name}</span>
	</div>
</a>
