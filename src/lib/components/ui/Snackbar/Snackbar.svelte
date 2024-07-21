<script lang="ts">
	import { CloseOutline } from 'flowbite-svelte-icons';
	import { fade } from 'svelte/transition';

	export let message: string;

	const closeSnackbar = () => {};
</script>

<div
	data-component="snackbar"
	role="alert"
	transition:fade={{ duration: 350 }}
	class="fixed right-8 bottom-8 flex box-content bg-sky-500 items-center justify-center gap-x-4 px-5 py-2 rounded-md"
>
	<p class="text-white py-2">{message}</p>
	<button
		on:click|preventDefault={closeSnackbar}
		class="group hover:bg-gray-200 transition-all rounded-sm"
	>
		<div class="p-2">
			<CloseOutline color="white" class="group-hover:text-black transition-colors" />
		</div>
	</button>
</div>
