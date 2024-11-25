<script lang="ts">
	import { Dropdown, DropdownItem } from 'flowbite-svelte';
	import { DesktopPcOutline, MoonOutline, SunOutline } from 'flowbite-svelte-icons';
	import { setMode, mode } from 'mode-watcher';

	let isOpen: boolean = false;

	const handleChangeDisplayTheme = (mode: 'light' | 'dark' | 'system') => {
		setMode(mode);
		isOpen = false;
	};
</script>

<button
	class="border rounded-xl p-3 hover:bg-gray-200 transition-all tansform active:scale-90 dark:hover:bg-gray-300 dark:hover:text-black"
>
	{#if $mode === 'dark'}
		<SunOutline />
	{:else}
		<MoonOutline />
	{/if}
</button>
<Dropdown bind:open={isOpen}>
	<DropdownItem
		class="text-xl font-bold flex items-center"
		on:click={() => handleChangeDisplayTheme('light')}
	>
		<SunOutline class="inline w-7 h-7 me-2 pt-1" />
		Light
	</DropdownItem>
	<DropdownItem
		class="text-xl font-bold flex items-center"
		on:click={() => handleChangeDisplayTheme('dark')}
	>
		<MoonOutline class="inline w-7 h-7 me-2 pt-1" />
		Dark
	</DropdownItem>
	<DropdownItem
		class="text-xl font-bold flex items-center"
		on:click={() => handleChangeDisplayTheme('system')}
	>
		<DesktopPcOutline class="inline w-7 h-7 me-2 pt-1" />
		System
	</DropdownItem>
</Dropdown>
