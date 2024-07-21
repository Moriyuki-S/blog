<script lang="ts">
	import RightSidebar from '$lib/components/layouts/RightSidebar/RightSidebar.svelte';
	import { Avatar, Spinner } from 'flowbite-svelte';
	import { ListOutline } from 'flowbite-svelte-icons';
	import { onMount } from 'svelte';
	import tocbot from 'tocbot';

	let isTocLoading: boolean = true;

	onMount(() => {
		tocbot.init({
			tocSelector: '#bio-toc',
			contentSelector: '#bio-body',
			extraLinkClasses: 'block w-full h-10 hover:bg-gray-200 rounded-lg px-4 py-1 leading-8',
			activeLinkClass: 'text-primary-500',
			headingSelector: 'h2, h3'
		});

		isTocLoading = false;
	});
</script>

<div class="w-full py-10 px-4 flex flex-col items-center md:flex-row">
	<main class="w-full flex flex-col gap-y-3 items-center md:max-w-[50rem]">
		<Avatar size="xl" src={'/OIG1.jpg'} alt="アイコン画像" />
		<h1 class="text-3xl text-center">名前</h1>
		<div id="bio-body" class="pt-3">
			<h2>自己紹介</h2>
			<p>自己紹介文</p>
			<h2 id="keireki">経歴</h2>
			<p>経歴</p>
			<h2>スキル</h2>
			<p>スキル</p>
			<h2>趣味</h2>
			<p>趣味</p>
		</div>
	</main>
	<RightSidebar styleClass="md:w-72 md:h-[28rem] md:sticky">
		<div class="w-full h-full p-5 bg-gray-50 rounded-lg">
			<h2 class="flex items-center text-2xl font-bold border-b pb-1">
				<ListOutline class="me-2" />
				目次
			</h2>
			<div class="w-full h-full">
				{#if isTocLoading}
					<div class="w-full h-full flex justify-center mt-20">
						<Spinner color="blue" />
					</div>
				{/if}
				<nav id="bio-toc" class="pt-5">
					<!--目次が入る-->
				</nav>
			</div>
		</div>
	</RightSidebar>
</div>
