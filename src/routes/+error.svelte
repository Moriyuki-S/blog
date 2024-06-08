<script lang="ts">
	import { page } from '$app/stores';
	import { Alert, Button } from 'flowbite-svelte';
	$: path = $page.url.pathname;
</script>

<main class="w-full h-96">
	<div class="h-full flex flex-col items-center justify-center gap-y-8">
		<div>
			<img src="https://placehold.jp/300x300.png" alt="エラー画像" />
		</div>
		<h1 class="text-3xl">{$page.status}</h1>
		<Alert>{$page.error?.message}</Alert>
		<menu class="flex gap-x-5">
			{#if path !== '/'}
				<li><Button href="/">ホーム画面へ</Button></li>
			{/if}
			<li><Button data-sveltekit-reload href={path}>リロードする</Button></li>
		</menu>
	</div>
</main>
