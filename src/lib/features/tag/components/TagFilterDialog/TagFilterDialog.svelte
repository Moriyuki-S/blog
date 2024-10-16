<script lang="ts">
	import { Modal, Search } from 'flowbite-svelte';
	import type { Tag } from '../../types/type';
	import TagHorizontalButton from '../TagHorizontalButton/TagHorizontalButton.svelte';

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

    const handleSelectTag = () => {
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
            {currentFilterTag?.name}
        </div>
		<div>
			<Search
				placeholder="タグを検索する"
				bind:value={tagSearchKeyword}
				class="focus:border-secondory-500 focus:ring-secondory-500 dark:border-secondory-500 dark:ring-secondory-500 dark:focus:ring-secondory-500"
			/>
		</div>
		<div class="min-h-60 mt-8 flex flex-col gap-y-5 overflow-scroll">
			<div class="border-b pb-2">
				<button on:click|preventDefault={handleResetTag} class="text-red-500"
					>すべてのタグ</button
				>
			</div>
			<ul class="grid gap-3 grid-cols-auto h-64 overflow-y-scroll">
				{#each filteredTags as tag}
					<li>
                        <TagHorizontalButton {tag} onClick={() => handleSelectTag(tag)} />
					</li>
				{/each}
			</ul>
		</div>
	</div>
</Modal>
