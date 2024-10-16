<script lang="ts">
	import { Dropdown, DropdownDivider, DropdownItem, Search, Tooltip } from 'flowbite-svelte';
	import { v4 as uuid } from 'uuid';
	import type { Tag } from '../../types/type';
	import SecondoryColorButton from '$lib/components/ui/Button/SecondoryColorButton/SecondoryColorButton.svelte';

	export let tags: Tag[];
	export let selectTag: (tag: Tag) => void;
	export let resetTag: () => void;
	let openDrawer: boolean = false;
	let filteredTags: Tag[] = tags.concat();

	const buttonId = uuid();
	let tagSearchKeyword: string = '';

	$: {
		if (tagSearchKeyword) {
			filteredTags = tags.filter((tag) => {
				return tag.name.toLowerCase().includes(tagSearchKeyword.toLowerCase());
			});
		}

		if (!tagSearchKeyword) {
			filteredTags = tags.concat();
		}
	}
</script>

<SecondoryColorButton id={`filter-button-${buttonId}`}>
	<slot title="button-text" />
</SecondoryColorButton>
<Dropdown bind:open={openDrawer} class="overflow-y-auto px-3 pb-3">
	<div slot="header" class="p-3">
		<Search
			placeholder="タグを検索する"
			bind:value={tagSearchKeyword}
			class="focus:border-secondory-500 focus:ring-secondory-500 dark:border-secondory-500 dark:ring-secondory-500 dark:focus:ring-secondory-500"
		/>
	</div>
	<DropdownItem
		on:click={() => {
			openDrawer = false;
			resetTag();
		}}
		class="text-red-500"
	>
		すべてのタグ
	</DropdownItem>
	<DropdownDivider />
	{#each filteredTags as tag}
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
