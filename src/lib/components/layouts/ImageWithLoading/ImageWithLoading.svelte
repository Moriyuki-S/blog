<script lang="ts">
	import { browser } from '$app/environment';
	import { ImagePlaceholder } from 'flowbite-svelte';

	export let src: string;
	export let alt: string;
	export let imageSkeletonClass: string = 'w-full h-full';
	export let imageSkeletonHeight: string = '240';

	let isLoading: boolean = true;

	if (browser) {
		const img = new Image();
		img.src = src;

		img.onload = () => {
			isLoading = false;
		};
	}
</script>

{#if isLoading}
	<ImagePlaceholder
		imgHeight={imageSkeletonHeight}
		imgOnly
		divClass={`space-y-8 *:mx-auto animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center !max-w-full *:!max-w-full !max-h-full *:!h-full ${imageSkeletonClass}`}
	/>
{:else}
	<img {src} {alt} {...$$restProps} />
{/if}
