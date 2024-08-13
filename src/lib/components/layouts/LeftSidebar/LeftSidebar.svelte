<script lang="ts">
	import {
		Button,
		GradientButton,
		Sidebar,
		SidebarCta,
		SidebarItem,
		SidebarWrapper
	} from 'flowbite-svelte';
	import {
		BookmarkOutline,
		MessageDotsOutline,
		SearchOutline,
		UserOutline
	} from 'flowbite-svelte-icons';
	import { fly } from 'svelte/transition';

	export let showSidebar: boolean = false;
</script>

{#if showSidebar}
	<div transition:fly={{ x: -1000, opacity: 1, duration: 300 }}>
		<Sidebar class="md:hidden h-full fixed z-50 top-0">
			<SidebarWrapper class="h-full">
				<SidebarItem label="プロフィール" href="/profile">
					<svelte:fragment slot="icon">
						<UserOutline
							class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
						/>
					</svelte:fragment>
				</SidebarItem>
				<SidebarItem label="ブックマーク" href="/articles/bookmark">
					<svelte:fragment slot="icon">
						<BookmarkOutline
							class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
						/>
					</svelte:fragment>
				</SidebarItem>
				<SidebarCta>
					<GradientButton color="cyanToBlue" href="/search">
						<SearchOutline class="me-2" />
						記事を探す
					</GradientButton>
				</SidebarCta>
				<SidebarCta>
					<Button color="alternative" href="/contact">
						<MessageDotsOutline class="me-2" />
						お問い合わせ
					</Button>
				</SidebarCta>
			</SidebarWrapper>
		</Sidebar>
	</div>
{/if}
