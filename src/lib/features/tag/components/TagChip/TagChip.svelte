<script lang="ts">
	import type { Tag } from '../../types/type';

	export let tag: Readonly<Tag>;
</script>

<div class="w-max h-8 px-4 rounded-lg flex items-center gap-x-2 border">
	<img width="20" height="20" src={tag.iconUrl} alt={`${tag.name}のアイコン`} />
	<span class="text-xs">{tag.name}</span>
</div>
