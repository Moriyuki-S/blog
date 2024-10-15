<script lang="ts">
	import { Toast } from 'flowbite-svelte';
	import {
		CheckCircleSolid,
		CloseCircleSolid,
		ExclamationCircleSolid
	} from 'flowbite-svelte-icons';
	import { fade, fly } from 'svelte/transition';

	export let message: string;
	export let type: 'success' | 'error' | 'warning' | 'info' = 'success';

	type SnackBarColor =
		| 'none'
		| 'gray'
		| 'red'
		| 'yellow'
		| 'green'
		| 'indigo'
		| 'purple'
		| 'blue'
		| 'primary'
		| 'orange'
		| undefined;

	let color: SnackBarColor;

	$: color = (() => {
		switch (type) {
			case 'success':
				return 'green';
			case 'error':
				return 'red';
			case 'warning':
				return 'yellow';
			case 'info':
				return 'blue';
		}
	})();

	$: icon = (() => {
		switch (type) {
			case 'success':
				return CheckCircleSolid;
			case 'error':
				return CloseCircleSolid;
			case 'warning':
				return ExclamationCircleSolid;
			case 'info':
				return ExclamationCircleSolid;
		}
	})();
</script>

<div in:fade out:fly={{ y: 50, duration: 400 }}>
	<Toast {color}>
		<svelte:component this={icon} slot="icon" class="w-5 h-5" />
		{message}
	</Toast>
</div>
