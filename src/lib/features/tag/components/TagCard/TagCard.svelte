<script lang="ts">
	import type { Tag } from '../../types/type';

	export let tag: Tag;
</script>

<a
	href={`/tags/${tag.slug}`}
	class="inline-block w-fit transition-transform border hover:border-secondory-700 hover:-translate-y-1 rounded-lg p-5"
>
	<div class="flex flex-col items-center justify-center gap-y-5">
		<div>
			<img src={tag.iconUrl} alt={`${tag.name}のアイコン`} />
		</div>
		<h3 class="px-2 w-fit">{tag.name}</h3>
	</div>
</a>
