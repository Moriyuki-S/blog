<script lang="ts">
	import {
		ArrowUpRightFromSquareOutline,
		ArrowUpRightFromSquareSolid
	} from 'flowbite-svelte-icons';

	export let text: string;
	export let href: string;
	export let isIconSolid: boolean = false;
	export let citeClass: string = '';
	export let aClass: string = '';
</script>

<cite class={`text-xs dark:text-white ${citeClass}`}>
	{text}
	<a {href} class={`underline text-blue-500 dark:text-blue-700 ${aClass}`} target="_blank" rel="noopener nofollow noreferrer">
		(
		{href}
		{#if isIconSolid}
			<ArrowUpRightFromSquareSolid class="inline pb-1 w-5 h-5" />
		{:else}
			<ArrowUpRightFromSquareOutline class="inline pb-1 w-5 h-5" />
		{/if}
		)
	</a>
</cite>
