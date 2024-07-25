<script lang="ts">
	import { Button, Dropdown, DropdownItem, Search, Spinner, Tooltip } from 'flowbite-svelte';
	import { v4 as uuid } from 'uuid';
	import type { Tag } from '../../types/type';

	export let tags: Tag[];
	export let selectTag: (tag: Tag) => void;
	let openDrawer: boolean = false;

	const buttonId = uuid();
	let tagSearchKeyword: string = '';
</script>

<Button id={`filter-button-${buttonId}`} class="bg-secondory-600 hover:bg-secondory-700 dark:bg-secondory-600 dark:hover:bg-secondory-700 focus-within:ring-secondory-500">
	<slot title="button-text" />
</Button>
<Dropdown bind:open={openDrawer} class="overflow-y-auto px-3 pb-3">
	<div slot="header" class="p-3">
		<Search bind:value={tagSearchKeyword} />
	</div>
	{#each tags as tag}
		<DropdownItem
			on:click={() => {
				openDrawer = false;
				selectTag(tag);
			}}
		>
			{tag.name}
		</DropdownItem>
	{/each}
</Dropdown>
<Tooltip triggeredBy={`#filter-button-${buttonId}`}>タグを絞りこむ</Tooltip>
