<script lang="ts">
	import { page } from '$app/stores';
	import { Alert, Button } from 'flowbite-svelte';
	import ErrorImage from '$lib/assets/images/ErrorImage.svelte';
	import { InfoCircleSolid } from 'flowbite-svelte-icons';
	import Citation from '$lib/components/ui/Citation/Citation.svelte';
	$: path = $page.url.pathname;
</script>

<main class="w-full">
	<div class="h-full flex flex-col items-center justify-center gap-y-8">
		<div class="relative">
			<ErrorImage />
			<Citation
				citeClass="absolute bottom-0 md:-bottom-5 left-0"
				text="画像引用元: ソコスト"
				href="https://soco-st.com/"
			/>
		</div>
		<h1 class="text-3xl font-bold">{$page.status}</h1>
		<Alert color="red">
			<InfoCircleSolid slot="icon" />
			<span class="font-bold">{$page.error?.message}</span>
		</Alert>
		<menu class="flex gap-x-5">
			{#if path !== '/'}
				<li><Button href="/">ホーム画面へ</Button></li>
			{/if}
			<li><Button color="alternative" data-sveltekit-reload href={path}>リロードする</Button></li>
		</menu>
	</div>
</main>
