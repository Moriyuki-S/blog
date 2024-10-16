<script lang="ts">
	import { Button, Modal, Search, Avatar } from 'flowbite-svelte';
	import type { Tag } from '../../types/type';
	import TagHorizontalButton from '../TagHorizontalButton/TagHorizontalButton.svelte';
	import { TagSolid } from 'flowbite-svelte-icons';

	export let open: boolean = false;
	export let tags: Tag[];
	export let currentFilterTag: Tag | null;
	export let selectTag: (tag: Tag) => void;
	export let resetTag: () => void;
	export let closeDialog: () => void;
	let filteredTags: Tag[] = tags.concat();
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

	const handleSelectTag = (tag: Tag) => {
		selectTag(tag);
		closeDialog();
	};

	const handleResetTag = () => {
		resetTag();
		closeDialog();
	};
</script>

<Modal bind:open title="タグで絞る">
	<div class="p-5">
		<div>
			<Search
				placeholder="タグを検索する"
				bind:value={tagSearchKeyword}
				class="focus:border-secondory-500 focus:ring-secondory-500 dark:border-secondory-500 dark:ring-secondory-500 dark:focus:ring-secondory-500"
			/>
		</div>
		<div class="min-h-60 mt-8 flex flex-col gap-y-5 overflow-scroll">
			<div class="border-b pb-2">
				<button
					on:click|preventDefault={handleResetTag}
					class={`flex items-center font-bold border-2 w-full px-4 py-2 rounded-full ${!currentFilterTag ? 'bg-red-500 text-white border-gray-200' : 'text-red-500 border-red-400'}`}
				>
					<TagSolid class="w-6 h-6 me-2" />
					すべてのタグ
				</button>
			</div>
			<ul class="grid gap-3 grid-cols-auto h-64 overflow-y-scroll">
				{#each filteredTags as tag}
					<li>
						<TagHorizontalButton
							active={currentFilterTag?.id === tag.id}
							{tag}
							onClick={() => handleSelectTag(tag)}
						/>
					</li>
				{/each}
			</ul>
		</div>
	</div>
	<div slot="footer" class="w-full flex items-center justify-between">
		<div class="w-36 overflow-x-auto p-2 border-r pr-4">
			{#if currentFilterTag}
				<button class="w-full rounded-lg flex items-center gap-x-3">
					<Avatar src={currentFilterTag.iconUrl} alt={currentFilterTag.name} />
					<p class="font-bold whitespace-nowrap">{currentFilterTag.name}</p>
				</button>
			{:else}
				<p class="text-red-500 font-bold whitespace-nowrap">
					<TagSolid class="w-6 h-6 me-2" />
					すべてのタグ
				</p>
			{/if}
		</div>
		<Button color="alternative" on:click={closeDialog}>キャンセル</Button>
	</div>
</Modal>
