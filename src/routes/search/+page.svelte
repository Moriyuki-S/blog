<script lang="ts">
	import { enhance } from '$app/forms';
	import { Button } from 'flowbite-svelte';
	import { SearchOutline } from 'flowbite-svelte-icons';
	import type { ActionData, PageData } from './$types';

	let query: string = '';
	export let data: PageData;
	export let form: ActionData;

	$: isInputError = form?.message && query === '';
</script>

<main class="pt-10">
	<form action="?/search" method="POST" class="w-2/3 mx-auto pl-10 flex gap-x-5" use:enhance>
		<div class="w-2/3 relative">
			<input
				type="search"
				name="query"
				bind:value={query}
				class="w-full h-14 pl-14 rounded-lg focus:border-sky-300"
				placeholder="検索したいキーワードを入力してください"
			/>
			{#if isInputError}
				<strong id="error-message" class="text-md text-red-500 absolute lef-0 -bottom-8">{form.message}</strong>
			{/if}
			<span class="absolute top-1/2 left-5 -translate-y-1/2"><SearchOutline /></span>
		</div>
		<Button type="submit">検索する</Button>
	</form>
	<div>
		<ul>
			<!-- タグ一覧 -->
			{#each data.tags as _tag}
				<li>
					<!-- タグ表示のコンポーネント-->
				</li>
			{/each}
		</ul>
	</div>
</main>
