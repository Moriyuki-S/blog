<script lang="ts">
	import { Avatar } from 'flowbite-svelte';
	import type { Tag } from '../../types/type';

	export let tag: Tag;
	export let onClick: (() => void) | 'link' = 'link';
	export let active: boolean = false;
</script>

{#if onClick === 'link'}
	<a href={`/tags/${tag.slug}`} class="w-full h-14 border rounded-full pl-3">
		<div class="flex gap-x-5 items-center">
			<dir class="h-full p-0 m-0">
				<Avatar src={tag.iconUrl} alt={tag.name} />
			</dir>
			<p class="font-bold text-sm">{tag.name}</p>
		</div>
	</a>
{:else}
	<button
		on:click|preventDefault={onClick}
		class={`w-full h-14 border rounded-full pl-3 ${active ? 'bg-secondory-100 border-secondory-300' : ''}`}
	>
		<div class="flex gap-x-5 items-center">
			<dir class="h-full p-0 m-0">
				<Avatar src={tag.iconUrl} alt={tag.name} />
			</dir>
			<p class="font-bold text-sm">{tag.name}</p>
		</div>
	</button>
{/if}
