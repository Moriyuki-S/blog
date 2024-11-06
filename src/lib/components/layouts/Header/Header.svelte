<script lang="ts">
	import {
		GradientButton,
		Navbar,
		NavBrand,
		NavHamburger,
		NavLi,
		NavUl
	} from 'flowbite-svelte';
	import {
		BookmarkOutline,
		SearchOutline,
		UserOutline
	} from 'flowbite-svelte-icons';
	import LeftSidebar from '../LeftSidebar/LeftSidebar.svelte';
	import { fade } from 'svelte/transition';
	import Watermelon from '$lib/assets/images/Watermelon.svelte';

	let showSidebar: boolean = false;

	const toggleSidebar = () => {
		showSidebar = !showSidebar;
	};
</script>

<header class="w-full border-b fixed top-0 left-0 z-10">
	<Navbar aria-labelledby="desktop-navigation">
		<NavBrand href="/">
			<div class="pt-1 me-1">
				<Watermelon />
			</div>
			<p class="text-2xl md:text-3xl font-extrabold">
				人生の<span class="bg-clip-text text-transparent bg-ocean-wave animate-gradient-x bg-200%"
					>夏休み</span
				>
			</p>
		</NavBrand>
		<NavHamburger class="md:hidden" onClick={toggleSidebar} />
		<div class="hidden md:flex gap-x-5 items-center">
			<NavUl>
				<NavLi href="/profile" class="inline-flex gap-x-1 items-center">
					<UserOutline />
					プロフィール
				</NavLi>
				<NavLi href="/bookmark" class="inline-flex gap-x-1 items-center">
					<BookmarkOutline />
					ブックマーク
				</NavLi>
			</NavUl>
			<ul class="flex gap-x-4">
				<li>
					<GradientButton href="/search" color="cyan">
						<SearchOutline class="me-2" />
						記事を探す
					</GradientButton>
				</li>
			</ul>
		</div>
	</Navbar>
</header>

<LeftSidebar {showSidebar} {toggleSidebar} />

{#if showSidebar}
	<button
		in:fade
		out:fade={{ duration: 150 }}
		class="w-full h-full bg-gray-900 bg-opacity-50 fixed top-0 left-0 z-40"
		on:click|preventDefault={toggleSidebar}
	></button>
{/if}
