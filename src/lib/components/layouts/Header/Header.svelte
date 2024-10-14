<script lang="ts">
	import {
		Button,
		GradientButton,
		Navbar,
		NavBrand,
		NavHamburger,
		NavLi,
		NavUl
	} from 'flowbite-svelte';
	import {
		BookmarkOutline,
		MessageDotsOutline,
		SearchOutline,
		UserOutline
	} from 'flowbite-svelte-icons';
	import LeftSidebar from '../LeftSidebar/LeftSidebar.svelte';
	import { fade } from 'svelte/transition';

	let showSidebar: boolean = false;

	const toggleSidebar = () => {
		showSidebar = !showSidebar;
	};
</script>

<header class="w-full border-b fixed top-0 left-0 z-10">
	<Navbar aria-labelledby="desktop-navigation">
		<NavBrand href="/">
			<h1>ブログ</h1>
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
				<li>
					<Button href="/contact" color="alternative">
						<MessageDotsOutline class="me-2" />
						お問い合わせ
					</Button>
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
