<script lang="ts">
	import {
		GradientButton,
		Sidebar,
		SidebarCta,
		SidebarItem,
		SidebarWrapper
	} from 'flowbite-svelte';
	import { BookmarkOutline, SearchOutline, UserOutline } from 'flowbite-svelte-icons';
	import { quintInOut } from 'svelte/easing';
	import { fly } from 'svelte/transition';

	export let showSidebar: boolean = false;
	export let toggleSidebar: () => void;
</script>

{#if showSidebar}
	<div transition:fly={{ x: 0, opacity: 1, duration: 100, easing: quintInOut }}>
		<Sidebar class="md:hidden h-full fixed z-50 top-0">
			<SidebarWrapper class="h-full pt-16 list-none *:mb-8">
				<SidebarItem label="プロフィール" href="/profile" on:click={toggleSidebar}>
					<svelte:fragment slot="icon">
						<UserOutline
							class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
						/>
					</svelte:fragment>
				</SidebarItem>
				<SidebarItem label="ブックマーク" href="/bookmark" on:click={toggleSidebar}>
					<svelte:fragment slot="icon">
						<BookmarkOutline
							class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
						/>
					</svelte:fragment>
				</SidebarItem>
				<SidebarCta>
					<GradientButton color="cyanToBlue" href="/search" on:click={toggleSidebar}>
						<SearchOutline class="me-2" />
						記事を探す
					</GradientButton>
				</SidebarCta>
			</SidebarWrapper>
		</Sidebar>
	</div>
{/if}
