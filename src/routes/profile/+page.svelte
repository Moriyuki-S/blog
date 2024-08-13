<script lang="ts">
	import RightSidebar from '$lib/components/layouts/RightSidebar/RightSidebar.svelte';
	import ArticleContents from '$lib/features/article/components/ArticleContents/ArticleContents.svelte';
	import { Avatar, Modal, SpeedDial, SpeedDialButton } from 'flowbite-svelte';
	import { ArrowUpOutline, ListOutline } from 'flowbite-svelte-icons';
	import { fade } from 'svelte/transition';

	let speedDialOpen: boolean = false;
	let tocModalOpen: boolean = false;

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
		speedDialOpen = false;
	};

	const openTocModal = () => {
		tocModalOpen = true;
	};
</script>

<div class="w-full py-10 px-4 flex flex-col items-center md:flex-row md:justify-around">
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
	<RightSidebar styleClass="hidden md:block md:w-72 md:h-[28rem] md:sticky">
		<div class="w-full h-full p-5 bg-gray-50 rounded-lg">
			<h2 class="flex items-center text-2xl font-bold border-b pb-1">
				<ListOutline class="me-2" />
				目次
			</h2>
			<div class="w-full h-full">
				<ArticleContents />
			</div>
		</div>
	</RightSidebar>
</div>

{#if speedDialOpen}
	<div transition:fade class="md:hidden w-full h-full fixed top-0 left-0 z-20  bg-gray-900 bg-opacity-50"></div>
{/if}

<SpeedDial
	color="cyanToBlue"
	gradient
	bind:open={speedDialOpen}
	defaultClass="md:hidden fixed end-6 bottom-20 z-30"
	tooltip="none"
	textOutside
>
	<SpeedDialButton
		name="目次"
		on:click={openTocModal}
		textOutsideClass="block absolute text-white -start-16 top-1/2 mb-px text-sm font-medium -translate-y-1/2"
	>
		<ListOutline />
	</SpeedDialButton>
	<SpeedDialButton
		name="先頭へ"
		on:click={scrollToTop}
		textOutsideClass="block absolute text-white -start-16 top-1/2 mb-px text-sm font-medium -translate-y-1/2"
	>
		<ArrowUpOutline />
	</SpeedDialButton>
</SpeedDial>

<Modal bind:open={tocModalOpen} class="md:hidden" outsideclose autoclose>
	<div slot="header">
		<h5 class="text-xl font-bold pl-5">目次</h5>
	</div>
	<button
		type="button"
		class="mx-auto block"
		on:click={() => (tocModalOpen = false)}
		on:keydown={(event) => {
			if (event.key === 'Enter' || event.key === ' ') {
				tocModalOpen = false;
			}
		}}
	>
		<ArticleContents />
	</button>
</Modal>
