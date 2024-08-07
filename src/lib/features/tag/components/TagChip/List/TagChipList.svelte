<script lang="ts">
	import type { Tag } from '$lib/features/tag/types/type';
	import { Dropdown, DropdownItem, Tooltip } from 'flowbite-svelte';
	import TagChip from '../TagChip.svelte';

	export let tags: Tag[];

    const tagsLength = tags.length;
    const maxDisplayTagsLength = 2;

    const displayTags = tags.slice(0, maxDisplayTagsLength);
    const notDisplayTags = tags.slice(maxDisplayTagsLength);
</script>

<ul class="flex gap-x-2">
    {#each displayTags as tag}
        <li>
            <TagChip {tag} />
        </li>
    {/each}
    {#if tagsLength > maxDisplayTagsLength}
        <li>
            <button id="show-other-tags-button" class="border-2 w-8 h-8 bg-gray-100 hover:bg-gray-200 hover:border-gray-200 text-sm rounded-full">
                <span>+{tagsLength - maxDisplayTagsLength}</span>
            </button>
            <Dropdown>
                {#each notDisplayTags as tag}
                    <DropdownItem class="hover:bg-secondory-600 hover:text-white transition-colors">
                        <a href={`/tags/${tag.slug}`}># {tag.name}</a>
                    </DropdownItem>
                {/each}
            </Dropdown>
            <Tooltip triggeredBy="#show-other-tags-button" placement="right">
                全てのタグを表示
            </Tooltip>

        </li>
    {/if}
</ul>
