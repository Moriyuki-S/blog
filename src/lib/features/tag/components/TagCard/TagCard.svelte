<script lang="ts">
	import type { Tag } from '../../types/type';

	export let tag: Tag;
	export let onClick: (() => void) | 'link' = 'link';
</script>

{#if onClick === 'link'}
	<a
		href={`/tags/${tag.slug}`}
		class="flex justify-center items-center w-32 h-32 transition-all border hover:bg-gray-200 hover:bg-opacity-70 hover:-translate-y-1 rounded-lg p-2 md:p-5"
	>
		<div class="flex flex-col items-center justify-center gap-y-5">
			<div>
				<img src={tag.iconUrl} alt={`${tag.name}のアイコン`} width="50" height="50" />
			</div>
			<h3 class="px-2 w-fit">{tag.name}</h3>
		</div>
	</a>
{:else}
	<button
		on:click|preventDefault={onClick}
		class="flex justify-center items-center w-32 h-32 transition-all border hover:bg-gray-200 hover:bg-opacity-70 hover:-translate-y-1 rounded-lg p-2 md:p-5"
	>
		<div class="flex flex-col items-center justify-center gap-y-5">
			<div>
				<img src={tag.iconUrl} alt={`${tag.name}のアイコン`} width="50" height="50" />
			</div>
			<h3 class="px-2 w-fit">{tag.name}</h3>
		</div>
	</button>
{/if}
